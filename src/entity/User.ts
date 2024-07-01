import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column(
        {
            unique: true
        }
    )
    email: string

    @Column(
        {
            type: "enum",
            enum: ["admin", "user"],
            default: "user"
        }
    )
    role: string

}
