import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, password, contact } = authCredentialsDto;
    const user = this.create({
      username,
      password,
      contact,
    });
    await this.save(user);
    return user;
  }
}
