import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOptimisticLockingColumns1611604286813 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "note" ADD "version" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "customer" ADD "version" integer NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "version"`);
    await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "version"`);
  }
}
