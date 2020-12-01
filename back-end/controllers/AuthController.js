const tenantRepository = require("../repository/tenantRepository");
const tenantTypeRepository = require("../repository/tenantTypeRepository")
const userRepository = require('../repository/userRepository');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const auth = require('../config/auth.json')

exports.login = async function (req, res) {

    const { password, email } = req.body;
    try {
        const tenant = await tenantRepository.getByEmail(email);

        if (!tenant) {

            const user = await userRepository.getByEmail(email);

            if (user) {

                if (!bcrypt.compareSync(password, user.password)) {
                    return res.status(400).json('Passwor is incorrect!');
                }
                else {
                    const usertype = await userRepository.getUserTypeById(user.userTypeId);
                    usertype.dataValues.id = undefined;
                    user.id = undefined;
                    user.password = undefined;
                    const payload = { user: email };
                    var theToken = jwt.sign(payload, auth.secret, { expiresIn: 86400 });
                    return res.status(200).json({ user, usertype, token: theToken });
                }
            } else {
                return res.status(400).json("Email not fount");
            }

        } else {

            if (!bcrypt.compareSync(password, tenant.password)) {
                return res.status(400).json('Passwor is incorrect!');
            }
            else {
                const tenanttype = await tenantTypeRepository.getTenantTypeById(tenant.tenanttype_id);
                tenanttype.dataValues.id = undefined;
                tenant.id = undefined;
                tenant.password = undefined;

                const payload = { user: email };
                var theToken = jwt.sign(payload, auth.secret_admin, { expiresIn: 86400 });
                return res.status(200).json({ tenant, tenanttype, token: theToken });
            }

        }
    } catch (error) {
        console.log('ERRO\n', error);
        return res.status(500).json("Something went wrong!")
    }
}
