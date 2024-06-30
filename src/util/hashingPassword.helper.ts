import bcrypt from "bcrypt";

class HashingPassword {
  static hashPassword = (password: string): string => {
    const salt: string = bcrypt.genSaltSync(10);
    const hashedPassword: string = bcrypt.hashSync(password, salt);
    return hashedPassword;
  };

  static comparePassword = (password: string, hashedPassword: string): boolean => {
    const isMatch: boolean = bcrypt.compareSync(password, hashedPassword);
    return isMatch;
  };
}

export default HashingPassword;