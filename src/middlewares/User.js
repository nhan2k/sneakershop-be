const emailCheck = (email) => {
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  return email.match(regex);
};

const passwordCheck = (password) => {
  // Minimum eight characters, at least one letter and one number:
  const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g);
  return password.match(regex);
};

const nameCheck = (name) => {
  const regex = new RegExp(/[a-zA-Z]{2,}/g);
  return name.match(regex);
};

export const registerValidate = async (req, res, next) => {
  try {
    const email = await emailCheck(req.body.email);
    const password = await passwordCheck(req.body.password);
    const name =
      (await nameCheck(req.body.firstname)) && nameCheck(req.body.lastname);
    if (!email) {
      res.status(500).json({ message: "email is not Valid!" });
    } else if (!password) {
      res.status(500).json({
        message:
          "Password minimum eight characters, at least one letter and one number",
      });
    } else if (!name) {
      res
        .status(500)
        .json({ message: "firstname and lastname least two letter" });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginValidate = async (req, res, next) => {
  try {
    const email = await emailCheck(req.body.email);
    const password = await passwordCheck(req.body.password);
    if (!email) {
      res.status(500).json({ message: "email is not Valid!" });
    } else if (!password) {
      res.status(500).json({
        message:
          "Password minimum eight characters, at least one letter and one number",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
