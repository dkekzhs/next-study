import { useFormStatus } from "react-dom";

export default function FormSumbit() {
    const {pending } = useFormStatus();
    return <button type="sumbit">
        {pending ? 'Submitting...' : 'Share Meal'}
    </button>
}