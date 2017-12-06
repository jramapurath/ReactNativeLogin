export const validation = {
    email: {
        presence: {
            message: 'Please enter email id'
        },
        format: {
            pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: 'Invalid email'
        }

    },
    username: {
        presence: {
            message: 'Please enter Username'
        },
        length: {
            minimum: {
                val: 5,
                message: 'Username must be min 5 character'
            }
        }
    },
    password: {
        presence: {
            message: 'Please enter Password'
        },
        length: {
            minimum: {
                val: 5,
                message: 'Password must be min 5 character'
            }
        }
    },
    cpassword: {
        presence: {
            message: 'Please enter Password'
        },
        length: {
            minimum: {
                val: 5,
                message: 'Password must be min 5 character'
            }
        }
    }
}

export function validate(nameField, value) {

    let resp = [null, null];
    if (validation.hasOwnProperty(nameField)) {
        let v = validation[nameField]
        if (value == '' || value == null) {
            resp[0] = false
            resp[1] = v['presence']['message']
        } else if (v.hasOwnProperty('format') && !v['format']['pattern'].test(value)) {
            resp[0] = false;
            resp[1] = v['format']['message']
        } else if (v.hasOwnProperty('length')) {
            let l = v['length'];
            if (l.hasOwnProperty('minimum') && value.length < l['minimum']['val']) {
                resp[0] = false;
                resp[1] = l['minimum']['message']
            } else if (l.hasOwnProperty('maximum') && value.length < l['maximun']['val']) {
                resp[0] = false;
                resp[1] = l['maximum']['message']
            }
        } else {
            resp[0] = true
        }
    } else {
        resp[0] = true
    }
    return resp;

}