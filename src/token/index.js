import jwt from 'jsonwebtoken';

// `privatekey` should be an actual RSA private key (this should be hidden in production... maybe env var)
const privatekey = 'lsdkmfkldvmkdfmvkdlfmvdklfvmdlkvmdlvkf';

export function GenerateToken(user) {
    return jwt.sign({ user }, privatekey, { expiresIn: '5m' });
}

export function VerifyToken(token) {
    let decoded;

    // Currently we are returning true if the token gets decoded successfully, we also need to
    // verify the actual user in some way... maybe another header? still researching.
    try {
        decoded = jwt.verify(token, privatekey);
    } catch(err) {
        return false;
    }

    return true;
}