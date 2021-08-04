-- CreateTable
CREATE TABLE "GroceryItem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30),
    "quantitycount" INTEGER,
    "quantityunit" VARCHAR(20),
    "category" VARCHAR(30),
    "recipeId" INTEGER NOT NULL,
    "nutrition" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "servings" INTEGER,
    "link" TEXT,
    "nutrition" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe.name_unique" ON "Recipe"("name");

-- AddForeignKey
ALTER TABLE "GroceryItem" ADD FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
