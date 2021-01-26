import { MigrationInterface, QueryRunner } from 'typeorm';

import { query } from 'express';

export class AddSampleData1611630911242 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.customer (id,"createdAt","updatedAt","deletedAt",status,"firstName","lastName",email,"phoneNumber","version") VALUES
        ('29219dfb-4ea3-468f-afd2-be08051f5367','2021-01-26 02:09:51.134858','2021-01-26 02:09:51.134858',NULL,'current','Carlos','Vargas','cavargas40@gmail.com','(57) 301 352 77 74',1),
        ('10e4f0ba-4179-4514-ac86-04636b9d7bac','2021-01-26 02:10:20.773732','2021-01-26 02:10:20.773732',NULL,'current','Azusa','Moro','azusa@gmail.com','301 345556 45',1),
        ('a0512c89-0b2a-4bb4-97d4-1418571a29f6','2021-01-26 02:10:43.241019','2021-01-26 02:10:43.241019',NULL,'current','John','Doe','johndoe@gmail.com','1235543',1);`,
    );

    await queryRunner.query(
      `INSERT INTO public.note (id,"createdAt","updatedAt","deletedAt",description,"customerId","version") VALUES
        ('119e3566-df96-4ede-8716-fc3128ff3e26','2021-01-26 02:33:48.76477','2021-01-26 02:33:48.76477',NULL,'Customer quite interested in our products','29219dfb-4ea3-468f-afd2-be08051f5367',1),
        ('37e1de41-ea6d-4ca6-ae58-893b001513c4','2021-01-26 02:34:18.240214','2021-01-26 02:34:18.240214',NULL,'Customer wants to do business with us','29219dfb-4ea3-468f-afd2-be08051f5367',1),
        ('f64a652c-84a8-4c0c-8665-7850c6b7a7fc','2021-01-26 02:35:01.523452','2021-01-26 02:35:01.523452',NULL,'The business was successful this client is now really important for us','29219dfb-4ea3-468f-afd2-be08051f5367',1),
        ('b72569af-ba09-40fa-9332-b9259147c229','2021-01-26 03:05:26.298706','2021-01-26 03:05:26.298706',NULL,'quite good customer, always buy a lot','10e4f0ba-4179-4514-ac86-04636b9d7bac',1),
        ('75ff21cc-cbab-4379-8860-b1ff6ebca7f7','2021-01-26 03:08:46.72912','2021-01-26 03:08:46.72912',NULL,'customer keeps being of the top 3','10e4f0ba-4179-4514-ac86-04636b9d7bac',1),
        ('232bbda3-907c-41b8-ab0f-cd981a14e696','2021-01-26 03:13:01.853863','2021-01-26 03:13:01.853863',NULL,'Really good customer. recommended','a0512c89-0b2a-4bb4-97d4-1418571a29f6',1),
        ('d9270300-4a79-4959-b808-30f1d85d88f3','2021-01-26 03:13:19.44365','2021-01-26 03:13:19.44365',NULL,'Our best customer','a0512c89-0b2a-4bb4-97d4-1418571a29f6',1);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM public.note WHERE id IN (
          '119e3566-df96-4ede-8716-fc3128ff3e26',
          '37e1de41-ea6d-4ca6-ae58-893b001513c4',
          'f64a652c-84a8-4c0c-8665-7850c6b7a7fc',
          'b72569af-ba09-40fa-9332-b9259147c229',
          '75ff21cc-cbab-4379-8860-b1ff6ebca7f7',
          '232bbda3-907c-41b8-ab0f-cd981a14e696',
          'd9270300-4a79-4959-b808-30f1d85d88f3');`,
    );

    await queryRunner.query(`
        DELETE FROM public.customer WHERE id IN (
            '29219dfb-4ea3-468f-afd2-be08051f5367',
            '10e4f0ba-4179-4514-ac86-04636b9d7bac',
            'a0512c89-0b2a-4bb4-97d4-1418571a29f6');
    `);
  }
}
