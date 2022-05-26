import User from "./Model";



export const register = async (req, res) => {
    try {
        const credentials = req.body;
        const data = await User.create(credentials)
        data.save()
        res.status(200).json({
            message: "Successfully registered",
            data: data
        })

    } catch (error) {
        res.status(422).json({
            message: error,
        })
    }
}

export const Login = async (req, res) => {
    const { email, password } = req.body
    if (!email) {
        return res.status(422).json({
            status: false,
            message: "Email Required"
        })
    }
    if (!password) {
        return res.status(422).json({
            status: false,
            message: "Password Required"
        })
    }
    const data = await User.findOne({ email, password })
    try {
        if (data) {
            return res.status(200).json({
                message: "Successfully login",
                data: data
            })
        }
        else {
            return res.status(422).json({
                message: 'Invalid Credentials',
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error,
        })
    }

}