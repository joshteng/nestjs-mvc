import { MainEntity } from "src/common/entities/main.entities";
import { BeforeInsert, Column, Entity, Index } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
export class User extends MainEntity {

  @Index()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT))
    }
  }
}
