
interface inputs {
    name?: string;
    role?: "student" | "teacher";
    email: string;
    password: string;
    method: "login" | "register";
}

interface outputs {
    status: 'success' | 'failure';
    message : string;
}

export const checkInputs = ({name, role, email, password, method} : inputs) : outputs => {
    
    if (!email.includes('@gmail.com')) return {message: "Enter valid email !", status: 'failure'};
    if (!(password.length > 5)) return {message: "Enter String Password of minimun 9 characters", status: 'failure'};

    if (method == 'register') {
        if (name?.length) {
            if (! (name.length > 3)) return {message: "Enter Name of minimum greater than 3 character", status: 'failure'};
            if ((name.length > 16)) return {message: "Enter Name of minimum less than 16 character", status: 'failure'};
        }

        if ( ! (role == "student" || role == "teacher")) {
            return {message: "Role is invalid!", status: 'failure'};
        }
    }

    return {message: "Processing...", status: 'success'};
}