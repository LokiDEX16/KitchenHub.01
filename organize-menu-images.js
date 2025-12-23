#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Image mapping based on actual menu item names from the website
const imageMapping = {
  // BOBAKAFE - Matching actual menu items
  'Bobakafe': {
    destFolder: 'src/assets/menu/bobakafe',
    files: {
      // MILK TEA BOBAS
      'IMG_2104.jpeg': { name: 'strawberry-milk-tea.jpeg', desc: 'STRAWBERRY MILK TEA' },
      'IMG_2105.jpeg': { name: 'thai-milk-tea.jpeg', desc: 'THAI MILK TEA' },
      'IMG_2106.jpeg': { name: 'taro-milk-tea.jpeg', desc: 'TARO MILK TEA' },
      'IMG_2107.jpeg': { name: 'mango-milk-tea.jpeg', desc: 'MANGO MILK TEA' },
      'IMG_2110.jpeg': { name: 'coconut-milk-tea.jpeg', desc: 'COCONUT MILK TEA' },
      'IMG_2111.jpeg': { name: 'classic-milk-tea.jpeg', desc: 'CLASSIC MILK TEA' },
      'IMG_2112.jpeg': { name: 'macho-milk-tea.jpeg', desc: 'MACHO MILK TEA' },
      
      // FRUIT TEA
      'IMG_2118.jpeg': { name: 'mango-jasmine-tea.jpeg', desc: 'MANGO JASMINE TEA' },
      'IMG_2119.jpeg': { name: 'passion-fruit-green-tea.jpeg', desc: 'PASSION FRUIT GREEN TEA' },
      'IMG_2121.jpeg': { name: 'peach-jasmine-tea.jpeg', desc: 'PEACH JASMINE TEA' },
      
      // SPECIAL TEAS
      'IMG_2124.jpeg': { name: 'tiger-milk-tea.jpeg', desc: 'TIGER MILK TEA' },
      'IMG_2125.jpeg': { name: 'mango-lassi-boba.jpeg', desc: 'MANGO LASSI BOBA' },
      'IMG_2130.jpeg': { name: 'strawberry-pinacolada.jpeg', desc: 'STRAWBERRY PINACOLDA' },
    }
  },

  // DOSA24 - Matching actual menu items
  'Dosa24': {
    destFolder: 'src/assets/menu/dosa24',
    files: {
      // SMALL PLATES
      'IMG_2102.jpeg': { name: 'idli-plate.jpeg', desc: 'Idli Plate (3 nos)' },
      'IMG_2103.jpeg': { name: 'medhu-vada.jpeg', desc: 'Medhu Vada (2nos)' },
      
      // ENTREE
      'IMG_2097.jpeg': { name: 'plain-dosa.jpeg', desc: 'Plain Dosa' },
      'IMG_2099.jpeg': { name: 'masala-dosa.jpeg', desc: 'Masala Dosa' },
      'IMG_2101.jpeg': { name: 'mysore-masala-dosa.jpeg', desc: 'Mysore Masala Dosa' },
    }
  },

  // VEGAN15 - Matching actual menu items
  'Vegan15/Vegan15  salads': {
    destFolder: 'src/assets/menu/vegan15',
    files: {
      // SALADS
      'IMG_2049.jpeg': { name: 'vegan-caesar-salad.jpeg', desc: 'VEGAN CAESAR SALAD' },
      'IMG_2050.jpeg': { name: 'south-west-vegan-salad.jpeg', desc: 'SOUTH WEST VEGAN SALAD' },
      'IMG_2051.jpeg': { name: 'katchumber-salad.jpeg', desc: 'KATCHUMBER SALAD' },
      'IMG_2052.jpeg': { name: 'power-quinoa-salad.jpeg', desc: 'POWER QUINOA SALAD' },
      'IMG_2053.jpeg': { name: 'tabbouleh-salad.jpeg', desc: 'TABBOULEH SALAD' },
    }
  },

  'Vegan15/Vegan15 appetizers': {
    destFolder: 'src/assets/menu/vegan15',
    files: {
      // STARTERS
      'IMG_2046.jpeg': { name: 'vegan-falafel.jpeg', desc: 'VEGAN FALAFEL' },
      'IMG_2043.jpeg': { name: 'crispy-avocado-fries.jpeg', desc: 'CRISPY AVOCADO FRIES' },
      'IMG_2048.jpeg': { name: 'vegan-crab-cake.jpeg', desc: 'VEGAN CRAB CAKE' },
      'IMG_2044.jpeg': { name: 'cauliflower-honey-garlic.jpeg', desc: 'CAULIFLOWER HONEY GARLIC' },
      'IMG_2045.jpeg': { name: 'buffalo-cauliflower.jpeg', desc: 'BUFFALO CAULIFLOWER' },
    }
  },

  'Vegan15/Vegan15 Starter': {
    destFolder: 'src/assets/menu/vegan15',
    files: {
      'IMG_2069.jpeg': { name: 'buffalo-chicken-bite.jpeg', desc: 'BUFFALO CHICKEN BITE' },
      'IMG_2070.jpeg': { name: 'meat-free-mambo.jpeg', desc: 'MEAT-FREE MAMBO' },
    }
  },

  'Vegan15/Vegan15 entrees': {
    destFolder: 'src/assets/menu/vegan15',
    files: {
      // ENTRÉE
      'IMG_2055.jpeg': { name: 'sesame-ginger-chicken.jpeg', desc: 'SESAME GINGER CHICKEN' },
      'IMG_2056.jpeg': { name: 'thai-vegetable-curry.jpeg', desc: 'THAI VEGETABLE CURRY' },
      'IMG_2057.jpeg': { name: 'yoga-bowl.jpeg', desc: 'YOGA BOWL' },
      'IMG_2058.jpeg': { name: 'tofu-saag.jpeg', desc: 'TOFU SAAG' },
      'IMG_2060.jpeg': { name: 'tuscan-pesto-pasta.jpeg', desc: 'TUSCAN PESTO PASTA' },
      'IMG_2066.jpeg': { name: 'chicken-parmesan.jpeg', desc: 'CHICKEN PARMESAN' },
      'IMG_2067.jpeg': { name: 'vegan-spaghetti-meatball.jpeg', desc: 'VEGAN SPAGHETTI & MEATBALL' },
      'IMG_6600.jpeg': { name: 'buddha-bowl.jpeg', desc: 'BUDDHA BOWL' },
      'IMG_6602.jpeg': { name: 'vegan-veggie-biryani.jpeg', desc: 'VEGAN VEGGIE BIRYANI' },
    }
  },

  'Vegan15/Vegan15 sides': {
    destFolder: 'src/assets/menu/vegan15',
    files: {
      // SIDES
      'IMG_2061.jpeg': { name: 'fresh-guacamole.jpeg', desc: 'FRESH GUACAMOLE' },
      'IMG_2063.jpeg': { name: 'hummus.jpeg', desc: 'HUMMUS' },
      'IMG_2064.jpeg': { name: 'pico-de-gallo.jpeg', desc: 'PICO DE GALLO' },
      'IMG_2065.jpeg': { name: 'french-fries.jpeg', desc: 'FRENCH FRIES' },
      
      // WRAPS N ROLLS
      'IMG_2068.jpeg': { name: 'vegan-falafel-wrap.jpeg', desc: 'VEGAN FALAFEL WRAP' },
    }
  }
};

async function copyImage(sourcePath, destPath, desc) {
  try {
    const data = await fs.readFile(sourcePath);
    await fs.writeFile(destPath, data);
    return { success: true, desc };
  } catch (error) {
    return { success: false, error: error.message, desc };
  }
}

async function processImages() {
  const baseSourcePath = 'KH dev doc';
  let successCount = 0;
  let errorCount = 0;
  const results = [];

  console.log('🚀 Kitchen Hub Menu Image Organization');
  console.log('📝 Renaming images to match menu item names\n');
  console.log('=' .repeat(70));

  for (const [sourceFolder, mapping] of Object.entries(imageMapping)) {
    console.log(`\n📁 Processing: ${sourceFolder}`);
    console.log('-'.repeat(70));
    
    for (const [sourceFile, fileInfo] of Object.entries(mapping.files)) {
      const sourcePath = path.join(baseSourcePath, sourceFolder, sourceFile);
      const destPath = path.join(mapping.destFolder, fileInfo.name);

      const result = await copyImage(sourcePath, destPath, fileInfo.desc);
      
      if (result.success) {
        console.log(`  ✅ ${sourceFile}`);
        console.log(`     → ${fileInfo.name}`);
        console.log(`     📝 ${fileInfo.desc}`);
        successCount++;
      } else {
        console.log(`  ❌ ${sourceFile} - FAILED`);
        console.log(`     ⚠️  ${result.error}`);
        errorCount++;
      }
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('📊 SUMMARY');
  console.log('='.repeat(70));
  console.log(`✅ Successfully copied: ${successCount} images`);
  console.log(`❌ Failed: ${errorCount} images`);
  console.log(`📁 Total processed: ${successCount + errorCount} images`);

  console.log('\n📝 All images renamed to match menu item names');
  console.log('   Example: IMG_2104.jpeg → strawberry-milk-tea.jpeg');

  return { successCount, errorCount, results };
}

// Run the script
processImages()
  .then(({ successCount, errorCount }) => {
    console.log('\n✨ Process completed!');
    console.log('\n📋 Next step: Update menu TypeScript files to reference these new image names');
    if (errorCount > 0) {
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('\n💥 Fatal error:', error);
    process.exit(1);
  });
