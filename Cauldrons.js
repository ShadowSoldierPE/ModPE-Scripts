//Please ask if you wish to use.
//Made by ShadowSoldier
//Not Complete

//Make The Item To Use for the Cauldron to Be Placed
ModPE.setItem(380, "cauldron", 0, "Cauldron");

//Add a Crafting Recipe
Item.addShapedRecipe(380, 0, )

//Create Your Blocks
Block.defineBlock(118, "tile.cauldron.stage0", ["cauldron_bottom", 0], ["cauldron_top", 0], ["cauldron_side", 0]);
//Make The Non-Textured Parts of Block Invisible
Block.setRenderLayer(118, 2);
