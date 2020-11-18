import { hash } from "bcrypt";
import { MainEntity } from "src/common/entities/main.entities";
import { BeforeInsert, Column, Entity, Index } from "typeorm";


@Entity()
export class User extends MainEntity {

  @Index()
  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  private async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 10)
    }
  }
}
