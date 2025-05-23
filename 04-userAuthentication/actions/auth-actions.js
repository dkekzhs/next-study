'use server'
import { createAuthSession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";


export async function signupForm(prevState, formData){
    const email = formData.get("email");
    const password = formData.get("password");
    
    let errors = {};

    if(!email.includes('@')){
        errors.email = 'Please enter a valid email address';
    }

    if (password.trim().length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
      }

    if(Object.keys(errors).length > 0 ){
        return {
            errors,
        };
    }
    const hashPassword = hashUserPassword(password);
    try{
        const userId = createUser(email, hashPassword);
        await createAuthSession(userId);
        redirect('/training');
    }
    catch(error){
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return {
                errors : {
                    email : "It seems like an account for the chosen email already exists."
                }
            }
        }
        throw error;
    }

} 

export async function login(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    
    const existUser = getUserByEmail(email);

    if(!existUser){
        return {
            errors : {
                email : 'Could not authenicate user, please check your credentials'
            }
        }
    }

    const validatePassword = verifyPassword(existUser.password, password);

    if(!validatePassword){
        return {
            errors : {
                password : 'Could not authenicate user, please check your credentials'
            }
        }
    }
    await createAuthSession(existUser.id);
    redirect('/training');
}

export async function auth(mode, prevState, formData) {
    if(mode ==='login'){
        return login(prevState, formData);
    }
    return signupForm(prevState,formData);
}