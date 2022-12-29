-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "bithDate" TEXT NOT NULL,
    "homePhoneNumber1" TEXT NOT NULL,
    "homePhoneNumber2" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_cpf_key" ON "patient"("cpf");
