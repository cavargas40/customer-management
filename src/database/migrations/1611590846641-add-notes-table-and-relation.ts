import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNotesTableAndRelation1611590846641 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "note" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "description" character varying NOT NULL, "customerId" uuid, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "note" ADD CONSTRAINT "FK_44b966fa1b600ec6ee09a8bb502" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_44b966fa1b600ec6ee09a8bb502"`);
    await queryRunner.query(`DROP TABLE "note"`);
  }
}
