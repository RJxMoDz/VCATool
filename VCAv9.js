
/*

Copyright © 2016

JavaScript made by RJxMoDz

*/

var VCAv9 = {};

var version = "1.14";

var number = "99";

var Button = android.widget.Button;

var LinearLayout = android.widget.LinearLayout;

var RelativeLayout = android.widget.RelativeLayout;

var PopupWindow = android.widget.PopupWindow;

var ScrollView = android.widget.ScrollView;

var TextView = android.widget.TextView;

var Switch = android.widget.Switch;

var Runnable = java.lang.Runnable;

var View = android.view.View;

var ColorDrawable = android.graphics.drawable.ColorDrawable;

var Color = android.graphics.Color;

var Gravity = android.view.Gravity;

var Intent = android.content.Intent;

var Uri = android.net.Uri;

var ProgressBar = android.widget.ProgressBar;

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var Toast = android.widget.Toast;

var sdcard = new android.os.Environment.getExternalStorageDirectory();

var path = sdcard + "/games/com.mojang/minecraftpe";

var PathPix = "/games/com.mojang/minecraftpe";

var GetLang = ModPE.getLanguage();

var metrics = ctx.getResources().getDisplayMetrics();

var dp = metrics.density;

var btnX = 5*dp, btnY = 5*dp;

var buttonX = 5*dp, buttonY = 5*dp;

var pressed = false;

var mX = null, mY = null;

var GUI;

var background;

var menu;

var menu1;

var menu2;

var menu3;

var menu4;

var exitUI;

var exitUI1;

var exitUI2;

var exitUI3;

var exitUI4;

var defaultDestroyTime = [

null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 

0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 

0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 

3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, 

null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, 

null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, 

null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, 

null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, 

null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 

2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 

5, null, null, null, null, null, null, null, null, null, null, null, null, null, 

null, null, null, null, null, null, null, null, null, null, null, null, null, null,

null, null, null, null, null, null, null, null, null, null, null, null, null, null,

null, null, null, null, null, null, null, null, null, null, null, null, null, null,

null, null, null, null, null, null, null, null, null, null, null, null, null, null,

null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0

];

var goldId = 84;

var topBlocks = [];

var bottomBlocks = [];

var gameX, gameY, gameZ;

var gameProgress = 0;

var gameStarted = 0;

var count = 0;

var countDown = 0;

var nameColor = "§l§a";

var healthColor = "§l§a";

var moddedChar;

var moddedCharRenderType = Renderer.createHumanoidRenderer();

var axeIds = [258, 271, 275, 279, 286];

var woodId = 17;

var counting = 0;

var victim1;

var victim2;

var ppx, ppy, ppz = 0;

var playerDir = [0, 0, 0];

var DEG_TO_RAD = Math.PI / 180;

var playerFlySpeed = 1;

var playerWalkSpeed = 0.2;

var falling = 0;

var next = 0;

var px, py, pz, lx, ly, lz, vel, saver;

var cd = 0;

var s = 0;

var Xdiff;

var Zdiff;

var Xpos;

var Zpos;

var isFalling = false;

var xSave = "0";

var ySave = "0";

var zSave = "0";

var gravity = -0.07840000092983246;

var Entities = [];

var counter = 0;

var twerking = 0;

var chestTracersRange = 10;

var chestTracersGroundMode = "on";

var chestTracersParticle = "on";

var playerTracersRange = 10;

var playerTracersGroundMode = "on";

var playerTracersParticle = "on";

var aig = 0;

var infectgm = false;

var tagsch = false;

var hi;

var health = false;

var skinch = false;

var skin;

var tcch = false;

var tc;

var treechopper = false;

var minich = false;

var map;

var mbch = false;

var mb;

var mobbattles = false;

var uidebugch = false;

var uidebug;

var backch = true;

var back;

var speedminech = false;

var speedmine;

var superspeedmine = false;

var autoplacech = false;

var autoplace;

var place = false;

var godmodech = false;

var godmode;

var supergodmode = false;

var tapregench = false;

var tapregen;

var supertapregen = false;

var breakch = false;

var breaking;

var antibreak = false;

var suicidech = false;

var suicide;

var autosuicide = false;

var immobilech = false;

var immobile;

var freeze = false;

var boomch = false;

var boom;

var kaboom = false;

var nukech = false;

var nuke;

var nuker = false;

var flightch = false;

var flight;

var removech = false;

var remove;

var allremove = false;

var removerch = false;

var remover;

var tapremover = false;

var stoptimech = false;

var stop;

var stoptime = false;

var weatherch = false;

var weather;

var noweather = false;

var pech = false;

var pe;

var powerexplosions = false;

var arrowgunch = false;

var arrowgun;

var arrowminigun = false;

var griefch = false;

var grief;

var griefing = false;

var autoleavech = false;

var autoleave;

var leave = false;

var lagch = false;

var lag;

var lagging = false;

var saddleupch = false;

var saddleup;

var saddle = false;

var ctch = false;

var ct;

var chesttracers = false;

var ptch = false;

var pt;

var playertracers = false;

var knockbackch = false;

var knockback;

var knockbacks = false;

var antiknockbackch = false;

var antiknockback;

var antiknockbacks = false;

var avch = false;

var av;

var antivoid = false;

var xpspawnch = false;

var xpspawn;

var spawner = false;

var heroch = false;

var hero;

var herobrine = false;

var tapspamch = false;

var tapspam;

var spammer = false;

var tttch = false;

var ttt;

var texttotoast = false;

var jetpackch = false;

var jetpack;

var jetpacked = false;

var autoswordch = false;

var autosword;

var sword = false;

var autoswitchch = false;

var autoswitch;

var switcher = false;

var tpch = false;

var tp;

var tpaura = false;

var alltpch = false;

var alltp;

var alltps = false;

var ndgch = false;

var ndg;

var nodownglide = false;

var nukerch = false;

var nuker;

var nukers = false;

var glidech = false;

var glide;

var glider = false;

var cbuildch = false;

var cbuild;

var cbuilder = false;

var speedch = false;

var speed;

var speeded = false;

var teleportch = false;

var tele;

var teleporter = false;

var stackdrch = false;

var stackdr;

var stacked = false;

var aimch = false;

var bot;

var aimbot = false;

var aimbotch = false;

var aim;

var bowaimbot = false;

var apch = false;

var ap;

var antipotion = false;

var highjumpch = false;

var highjump;

var highjumps = false;

var freezech = false;

var freeze;

var freezeaura = false;

var multiplierch = false;

var multi;

var multiplier = false;

var criticch = false;

var critic;

var criticals = false;

var derpch = false;

var derp;

var derps = false;

var twerkch = false;

var twerk;

var twerker = false;

var grach = false;

var pple;

var grapple = false;

var flwch = false;

var flw;

var follow = false;

var dronech = false;

var drone;

var droneplus = false;

var walkch = false;

var walk;

var autowalk = false;

var killch = false;

var kill;

var killaura = false;

var gmspeedch = false;

var gmspeed;

var gamesd = false;

var zoomch = false;

var zoom;

var antiburnch = false;

var antiburn;

var burn = false;

var firech = false;

var fire;

var fireaura = false;

var jesusch = false;

var jesus;

var waterwalk = false;

var nowallch = false;

var nowall;

var nowalls = false;

var climbch = false;

var climb;

var climbs = false;

var phinch = false;

var phin;

var dolphin = false;

var jumpch = false;

var jump;

var autojump = false;

var checkForUpdate = false;

var newUpdate;

var updateMod;

var mp;

var music = [

	["Ahrix - Nova [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3"],

	["Ahxello & Alex Skrindo - Daydreamer", "http://b1.ge.tt/gett/842vbod2/Ahxello+%26+Alex+Skrindo+-+Daydreamer.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],

	["C418 – Key", "http://download1583.mediafire.com/qtpokdrrpuug/3w6s41qk2i546x1/C418+Key.mp3"],

	["C418 – Mellohi", "http://download1589.mediafire.com/7g944raqy63g/bj1192b5wqj417b/C418+-+Mellohi+%28Minecraft+Volume+Beta%29.mp3"],

	["C418 – Subwoofer Lullaby", "http://download1486.mediafire.com/xxag7u8o97zg/r6f2394d0z94wnj/C418+Subwoofer+Lullaby.mp3"],

	["C418 – Sweden", "http://download1477.mediafire.com/rpco0d20s2jg/5v74oc3cfidtpw1/C418+Sweden.mp3"],

	["DEAF KEV - Invincible [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3"],

	["Different Heaven & EH!DE - My Heart [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3"],

	["Different Heaven - Nekozilla", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3"],

	["Disfigure - Blank [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3"],

	["Distrion & Alex Skrindo - Entropy", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3"],

	["Diviners feat. Contacreast - Tropic Love [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3"],

	["Infradist – Immortal Geometry", "http://download1639.mediafire.com/ruvxd55advkg/j122ppnsccs6ein/Infradist+-+Immortal+Geometry.mp3"],

	["Infradist – Non Compos Mentis", "http://download1328.mediafire.com/8a224zvkb7qg/8x85zhu1eu0h8c4/Non+Compos+Mentis.mp3"],

	["Infradist – Sadist", "http://download1512.mediafire.com/nh4e6d7vf6ug/njsdljtnmc3kc9c/Sadist.mp3"],

	["Itro & Tobu - Cloud 9 [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3"],

	["Jim Yosef - Eclipse [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3"],

	["Jim Yosef - Firefly [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3"],

	["Laszlo - Fall To Light [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Laszlo%20-%20Fall%20to%20Light.mp3"],

	["Lisa Mitchell - Neopolitan Dreams (Nilow Remix)", "http://b1.ge.tt/gett/4WKD4nd2/Lisa+Mitchell+-+Neopolitan+Dreams+%28Nilow+Rmx?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],

	["OMFG - Hello", "http://b1.ge.tt/gett/1a353nd2/OMFG+-+Hello.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],

	["SirensCeol - Coming Home [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3"],

	["Syn Cole - Feel Good [NCS Release]", "https://dl.dropboxusercontent.com/content_link/XXC2RpC9xcqPJSvKX6zoE3soAOsxxqs3BoorX1rO70lkBqcOGZLp7NqMda9XHXBz/file?dl=1"],

	["Tobu & Syndec - Dusk [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20%26%20Syndec%20-%20Dusk.mp3"],

	["Tobu - Candyland [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3"],

	["Tobu - Roots [NCS Release]", "https://hive-downloads-bwh6b963f4d.bwhog.net/private/downloads/user-2327816/1469285317/Tobu_-_Roots.mp3"],

	["William Ekh - Adventure (feat. Alexa Lusader)", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3"]

];

var Optifine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 141, 15, 16, 17, 18, 20, 21, 22, 24, 26, 30, 31, 32, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 71, 73, 74, 78, 79, 80, 81, 82, 83, 85, 87, 92, 95, 98, 102, 103, 105, 107, 109, 108, 112, 114, 128, 155, 156, 245, 246, 247, 248, 249, 253, 254, 255];

Block.setLightLevel(Optifine, 15);

Block.setShape(0, 0, 0, 0, 0.0001, 0.6, 0.0001);

Block.setShape(65, 0, 0, 0, 0.0001, 0.6, 0.0001);

Block.setShape(95, 0, 0, 0, 0.0001, 0.6, 0.0001);

Block.setShape(255, 0, 0, 0, 0.0001, 0.6, 0.0001);

const VEL_Y_OFFSET = -0.07840000092983246;

Item.setCategory(84, 2);

Player.addItemCreativeInv(84, 1, 0);

ModPE.langEdit("menu.copyright","§aVCA v9 §6| §f" + number + " Mods Loaded");

if(GetLang == "fr_FR")ModPE.langEdit("menu.copyright","§aVCA v9 §6| §f" + number + " Mods Chargés");

ModPE.getAndroidVersion = function(){

	return com.mojang.minecraftpe.HardwareInformation.getAndroidVersion();

}

ModPE.getClientId = function(){

    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/clientid.txt");

    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));

    var read, username;

    while((read = br.readLine()) != null){

        username = read;

        break;

    }

    br.close();

    return username;

};

ModPE.getPlayerName = function(){

    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");

    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));

    var read, username;

    while((read = br.readLine()) != null){

        if(read.split(":")[0] == "mp_username"){

            username = read.split(":")[1];

            break;

        }

    }

    br.close();

    return username;

};

VCAv9.menuIsShowing = false;

VCAv9.playerIsInGame = true;

VCAv9.playerIsInGame2 = true;

VCAv9.font = android.graphics.Typeface.create("sans-serif-thin", android.graphics.Typeface.NORMAL);

VCAv9.getDeviceName = function(){

	var manufacturer = android.os.Build.MANUFACTURER;

	var model = android.os.Build.MODEL;

	if(model.startsWith(manufacturer)){

		return model;

	}else{

		return manufacturer + " " + model;

	}

}

VCAv9.setupTheme = function(){

	ModPE.overrideTexture("images/gui/background.png","https://raw.githubusercontent.com/RJxMoDz/VCA-v9/master/background.png");

	ModPE.overrideTexture("images/gui/bg32.png","https://raw.githubusercontent.com/RJxMoDz/VCA-v9/master/bg32.png");

	ModPE.overrideTexture("images/font/default8.png","https://dl.dropboxusercontent.com/s/u5shz9f7v3mhapj/default.png");

	ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/BCA6vgv.png");

	ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/dY3c1Jl.png");

}

VCAv9.setupTheme();

  var createUiThread = function(func){

     getContext().runOnUiThread(new java.lang.Runnable({

        run: function(){

            func(getContext());

        }

    }));

};

VCAv9.drawTracer = function(x, y, z, groundMode, particleName){

	for(var count = 0; count <= 25; count++){

		Level.addParticle(ParticleType.flame, x, y, z, (getPlayerX() - x) / count, groundMode?0:((getPlayerY() - y) / count), (getPlayerZ() - z) / count, 2);

	}

}

VCAv9.changeGameMode = function(){

	if(Level.getGameMode() == 0){

		Level.setGameMode(1);

	}else if(Level.getGameMode() == 1){

		Level.setGameMode(0);

	}else if(Level.getGameMode() == 2){

		Level.setGameMode(1);

	}else if(Level.getGameMode() == 3){

		Level.setGameMode(0);

	}

}

VCAv9.resetMusic = function(){

	music = [

	["Ahrix - Nova [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3"],

	["Ahxello & Alex Skrindo - Daydreamer", "http://b1.ge.tt/gett/842vbod2/Ahxello+%26+Alex+Skrindo+-+Daydreamer.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],

	["C418 – Key", "http://download1583.mediafire.com/qtpokdrrpuug/3w6s41qk2i546x1/C418+Key.mp3"],

	["C418 – Mellohi", "http://download1589.mediafire.com/7g944raqy63g/bj1192b5wqj417b/C418+-+Mellohi+%28Minecraft+Volume+Beta%29.mp3"],

	["C418 – Subwoofer Lullaby", "http://download1486.mediafire.com/xxag7u8o97zg/r6f2394d0z94wnj/C418+Subwoofer+Lullaby.mp3"],

	["C418 – Sweden", "http://download1477.mediafire.com/rpco0d20s2jg/5v74oc3cfidtpw1/C418+Sweden.mp3"],

	["DEAF KEV - Invincible [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3"],

	["Different Heaven & EH!DE - My Heart [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3"],

	["Different Heaven - Nekozilla", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3"],

	["Disfigure - Blank [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3"],

	["Distrion & Alex Skrindo - Entropy", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3"],

	["Diviners feat. Contacreast - Tropic Love [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3"],

	["Infradist – Immortal Geometry", "http://download1639.mediafire.com/ruvxd55advkg/j122ppnsccs6ein/Infradist+-+Immortal+Geometry.mp3"],

	["Infradist – Non Compos Mentis", "http://download1328.mediafire.com/8a224zvkb7qg/8x85zhu1eu0h8c4/Non+Compos+Mentis.mp3"],

	["Infradist – Sadist", "http://download1512.mediafire.com/nh4e6d7vf6ug/njsdljtnmc3kc9c/Sadist.mp3"],

	["Itro & Tobu - Cloud 9 [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3"],

	["Jim Yosef - Eclipse [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3"],

	["Jim Yosef - Firefly [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3"],

	["Laszlo - Fall To Light [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Laszlo%20-%20Fall%20to%20Light.mp3"],

	["Lisa Mitchell - Neopolitan Dreams (Nilow Remix)", "http://b1.ge.tt/gett/4WKD4nd2/Lisa+Mitchell+-+Neopolitan+Dreams+%28Nilow+Rmx?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],

	["OMFG - Hello", "http://b1.ge.tt/gett/1a353nd2/OMFG+-+Hello.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],

	["SirensCeol - Coming Home [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3"],

	["Syn Cole - Feel Good [NCS Release]", "https://dl.dropboxusercontent.com/content_link/XXC2RpC9xcqPJSvKX6zoE3soAOsxxqs3BoorX1rO70lkBqcOGZLp7NqMda9XHXBz/file?dl=1"],

	["Tobu & Syndec - Dusk [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20%26%20Syndec%20-%20Dusk.mp3"],

	["Tobu - Candyland [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3"],

	["Tobu - Roots [NCS Release]", "https://hive-downloads-bwh6b963f4d.bwhog.net/private/downloads/user-2327816/1469285317/Tobu_-_Roots.mp3"],

	["William Ekh - Adventure (feat. Alexa Lusader)", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3"]

	];

}

VCAv9.playMusic = function(){

	if(music.length != 0){

		try{

			var randomMusic = music[Math.floor(Math.random() * music.length)];

			mp = new android.media.MediaPlayer();

			mp.setDataSource(randomMusic[1]);

			mp.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener(){

				onPrepared: function(mp){

					musicText = randomMusic[0];

					mp.start();

				}

			});

			mp.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener(){

				onCompletion: function(arg0){

					mp = null;

					music.slice(randomMusic);

					eval(VCAv9.playMusic());

				}

			});

			mp.prepareAsync();

		}catch(error){

			Toast.makeText(ctx, error, 1).show();

		}

	}else if(music.length == 0){

		VCAv9.resetMusic();

		eval(VCAv9.playMusic());

	}

}

VCAv9.healthIndicator = function(){

    var mobs = Entity.getAll();

    for(var i = 0; i < mobs.length; i++){

        var xq = Entity.getX(mobs[i]) - getPlayerX();

        var yq = Entity.getY(mobs[i]) - getPlayerY();

        var zq = Entity.getZ(mobs[i]) - getPlayerZ();

        if(xq * xq + yq * yq + zq * zq <= 14 * 14 && mobs[i] != getPlayerEnt()){

            if(Entity.getEntityTypeId(mobs[i]) == 10){

                Entity.setNameTag(mobs[i], nameColor + "Chicken " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 11){

                Entity.setNameTag(mobs[i], nameColor + "Cow " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 12){

                Entity.setNameTag(mobs[i], nameColor + "Pig " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 13){

                Entity.setNameTag(mobs[i], nameColor + "Sheep " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 14){

                Entity.setNameTag(mobs[i], nameColor + "Wolf " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 15){

                Entity.setNameTag(mobs[i], nameColor + "Villager " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 16){

                Entity.setNameTag(mobs[i], nameColor + "Mooshroom " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 17){

                Entity.setNameTag(mobs[i], nameColor + "Squid " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 18){

                Entity.setNameTag(mobs[i], nameColor + "Rabbit " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 19){

                Entity.setNameTag(mobs[i], nameColor + "Bat " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 20){

                Entity.setNameTag(mobs[i], nameColor + "Iron Golem " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 21){

                Entity.setNameTag(mobs[i], nameColor + "Snow Golem " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 22){

                Entity.setNameTag(mobs[i], nameColor + "Ocelot " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 23){

                Entity.setNameTag(mobs[i], nameColor + "Horse " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 24){

                Entity.setNameTag(mobs[i], nameColor + "Donkey " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 25){

                Entity.setNameTag(mobs[i], nameColor + "Mule " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 26){

                Entity.setNameTag(mobs[i], nameColor + "Skeleton Horse " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 27){

                Entity.setNameTag(mobs[i], nameColor + "Zombie Horse " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 32){

                Entity.setNameTag(mobs[i], nameColor + "Zombie " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 33){

                Entity.setNameTag(mobs[i], nameColor + "Creeper " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 34){

                Entity.setNameTag(mobs[i], nameColor + "Skeleton " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 35){

                Entity.setNameTag(mobs[i], nameColor + "Spider " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 36){

                Entity.setNameTag(mobs[i], nameColor + "Zombie Pigman " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 37){

                Entity.setNameTag(mobs[i], nameColor + "Slime " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 38){

                Entity.setNameTag(mobs[i], nameColor + "Enderman " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 39){

                Entity.setNameTag(mobs[i], nameColor + "Silverfish " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 40){

                Entity.setNameTag(mobs[i], nameColor + "Cave Spider " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 41){

                Entity.setNameTag(mobs[i], nameColor + "Ghast " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 42){

                Entity.setNameTag(mobs[i], nameColor + "Magma Cube " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 43){

                Entity.setNameTag(mobs[i], nameColor + "Blaze " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 44){

                Entity.setNameTag(mobs[i], nameColor + "Zombie Villager " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 45){

                Entity.setNameTag(mobs[i], nameColor + "Witch " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 46){

                Entity.setNameTag(mobs[i], nameColor + "Stray " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 47){

                Entity.setNameTag(mobs[i], nameColor + "Husk " + healthColor + Entity.getHealth(mobs[i]));

            }

            if(Entity.getEntityTypeId(mobs[i]) == 48){

                Entity.setNameTag(mobs[i], nameColor + "Wither Skeleton " + healthColor + Entity.getHealth(mobs[i]));

            }

        }

    }

}

VCAv9.flight = function(onOrOff){

	switch(onOrOff){

		case 0:

			if(Level.getGameMode() == 0){

				Player.setCanFly(0);

			}

			break;

		case 1:

			Player.setCanFly(1);

			break;

	}

}

VCAv9.explosion = function(x, y, z){

	Level.explode(x, y, z, 4);

}

VCAv9.tapNuker = function(x, y, z){

	for(var blockX = - 4; blockX <= 4; blockX++){

		for(var blockY = - 4; blockY <= 4; blockY++){

			for(var blockZ = - 4; blockZ <= 4; blockZ++){

				setTile(x + blockX, y + blockY, z + blockZ, 0);

			}

		}

	}

}

VCAv9.nuker = function(x, y, z){

	for(var blockX = - 9; blockX <= 9; blockX++){

		for(var blockY = - 9; blockY <= 9; blockY++){

			for(var blockZ = - 9; blockZ <= 9; blockZ++){

				setTile(x + blockX, y + blockY, z + blockZ, 0);

			}

		}

	}

}

VCAv9.autoSword = function(attacker, victim){

    if(attacker == getPlayerEnt()){

        for(var i = 0; i <= 36; i++){

            var gCI = Player.getCarriedItem();

            var gCID = Player.getCarriedItemData();

            var gCIA = Player.getCarriedItemCount();

            if(Player.getInventorySlot(i) == 268){

                Player.setInventorySlot(i, gCI, gCIA, gCID);

                Entity.setCarriedItem(getPlayerEnt(), 268, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));

                break;

            }

        }

        for(var i = 0; i <= 36; i++){

            var gCI = Player.getCarriedItem();

            var gCID = Player.getCarriedItemData();

            var gCIA = Player.getCarriedItemCount();

            if(Player.getInventorySlot(i) == 283){

                Player.setInventorySlot(i, gCI, gCIA, gCID);

                Entity.setCarriedItem(getPlayerEnt(), 283, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));

                break;

            }

        }

        for(var i = 0; i <= 36; i++){

            var gCI = Player.getCarriedItem();

            var gCID = Player.getCarriedItemData();

            var gCIA = Player.getCarriedItemCount();

            if(Player.getInventorySlot(i) == 272){

                Player.setInventorySlot(i, gCI, gCIA, gCID);

                Entity.setCarriedItem(getPlayerEnt(), 272, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));

                break;

            }

        }

        for(var i = 0; i <= 36; i++){

            var gCI = Player.getCarriedItem();

            var gCID = Player.getCarriedItemData();

            var gCIA = Player.getCarriedItemCount();

            if(Player.getInventorySlot(i) == 267){

                Player.setInventorySlot(i, gCI, gCIA, gCID);

                Entity.setCarriedItem(getPlayerEnt(), 267, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));

                break;

            }

        }

        for(var i = 0; i <= 36; i++){

            var gCI = Player.getCarriedItem();

            var gCID = Player.getCarriedItemData();

            var gCIA = Player.getCarriedItemCount();

            if(Player.getInventorySlot(i) == 276){

                Player.setInventorySlot(i, gCI, gCIA, gCID);

                Entity.setCarriedItem(getPlayerEnt(), 276, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));

                break;

            }

        }

    }

}

VCAv9.tapExplosion = function(x, y, z){

	Level.explode(x, y, z, 9);

}

VCAv9.teleporter = function(x, y, z){

	setPosition(getPlayerEnt(), x, y, z);

	while(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) != 0){

		Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+1, getPlayerZ());

	}

}

VCAv9.bowAimbot = function(e){

	var mobs = Entity.getAll();

	for(var i=0; i<mobs.length; i++){

		ent = mobs[i];

		x = Entity.getX(ent) - Entity.getX(getPlayerEnt());

		z = Entity.getZ(ent) - Entity.getZ(getPlayerEnt());

		if(Entity.getEntityTypeId(ent) != EntityType.ITEM && Entity.getEntityTypeId(ent) != EntityType.ARROW && ent != getPlayerEnt()){

			setVelX(e, x / 4.5);

			setVelY(e, 0);

			setVelZ(e, z / 4.5);

		}

	}

}

VCAv9GUI64 = "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"

VCAv9Background64 = "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"

var customcolor = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/");

var customcolorI = new android.graphics.drawable.BitmapDrawable(customcolor);

var VCAv9BackgroundZ = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + PathPix + "/VCAv9Background.PNG");

var VCAv9Background = new android.graphics.drawable.BitmapDrawable(VCAv9BackgroundZ);

var VCAv9GUIZ = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + PathPix + "/VCAv9GUI.PNG");

var VCAv9GUI = new android.graphics.drawable.BitmapDrawable(VCAv9GUIZ);

Base64Decode(android.util.Base64.decode(VCAv9Background64, 0), path + "/VCAv9Background.PNG");

Base64Decode(android.util.Base64.decode(VCAv9GUI64, 0), path + "/VCAv9GUI.PNG");

function Base64Decode(byteArray, Path){

    try{

        var File = new java.io.File(Path);

        if(!File.exists()){

            File.createNewFile();

            var Stream = new java.io.FileOutputStream(File);

            Stream.write(byteArray);

            Stream.close();

        }
        
    }catch(error){

        Toast.makeText(ctx, error, 1).show();

    }

}

var ScreenType = {

	start_screen: "start_screen",

	hud: "hud_screen",

	ingame: "in_game_play_screen",

	survival_inv: "survival_inventory_screen",

	creative_inv: "creative_inventory_screen",

	pause_screen: "pause_screen",

	options_screen: "options_screen"

};

var currentScreen;

function screenChangeHook(screenName) {

	currentScreen = screenName;

	if(screenName == ScreenType.hud || screenName == ScreenType.ingame) {

		if((GUI == null || !GUI.isShowing()) && !VCAv9.menuIsShowing) {

			starter();

		}

	} else {

		if(GUI != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					GUI.dismiss();

				}

			}));

		}

		if(background != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					background.dismiss();

				}

			}));

		}

		if(exitUI != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					exitUI.dismiss();

				}

			}));

		}

		if(exitUI1 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					exitUI1.dismiss();

				}

			}));

		}

		if(exitUI2 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					exitUI2.dismiss();

				}

			}));

		}

		if(exitUI3 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					exitUI3.dismiss();

				}

			}));

		}

		if(exitUI4 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					exitUI4.dismiss();

				}

			}));

		}

		if(menu != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					menu.dismiss();

				}

			}));

		}

		if(menu1 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					menu1.dismiss();

				}

			}));

		}

		if(menu2 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					menu2.dismiss();

				}

			}));

		}

		if(menu3 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					menu3.dismiss();

				}

			}));

		}

		if(menu4 != null) {

			ctx.runOnUiThread(new java.lang.Runnable({

				run: function() {

					menu4.dismiss();

				}

			}));

		}

	}

}

function checkVersion(){

    var r  = new java.lang.Runnable(){

        run: function(){

            try{

                var urls = new java.net.URL("https://raw.githubusercontent.com/RJxMoDz/VCA-v9/master/Version.TXT");

                var check = urls.openConnection();

                var script = check.getInputStream();

                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);

                var byteCount = 0;

                var checkedVersion;

                while((byteCount = script.read(typeb)) != -1){

                checkedVersion = new java.lang.String(typeb, 0, byteCount);

                }

                newUpdate = checkedVersion;

                if(version + "\n" != checkedVersion){

                clientMessage("§a<VCA v9> Version : " + version + " + Exclusive Version : " + newUpdate + "§aInternet : ON");

                }

                else if(version + "\n" == checkedVersion){

                clientMessage("§a<VCA v9> Version : " + version + " | Internet : ON");

                }

            }

            catch(error){

                if(error == "JavaException: java.net.UnknownHostException: raw.githubusercontent.com"){

                            }

                            else{

                                clientMessage("§a<VCA v9> Version : " + version + " | Internet : OFF");

                      }

              }

      }

}

    var threadt = new java.lang.Thread(r);

    threadt.start();

}

function rptask(){

    ctx.runOnUiThread(new java.lang.Runnable({

        run: function(){

            new android.os.Handler()

                .postDelayed(new java.lang.Runnable({

                      run: function(){

                      if(chesttracers){

                      var x = getPlayerX();

                      var y = getPlayerY();

                      var z = getPlayerZ();

                      var newX;

                      var newY;

                      var newZ;

                      for(var blockX = - chestTracersRange; blockX <= chestTracersRange; blockX++){

                      for(var blockY = - chestTracersRange; blockY <= chestTracersRange; blockY++){

                      for(var blockZ = - chestTracersRange; blockZ <= chestTracersRange; blockZ++){

                      newX = x + blockX;

                      newY = y + blockY;

                      newZ = z + blockZ;

                      if(getTile(newX, newY, newZ) == 54 || getTile(newX, newY, newZ) == 23){

                      VCAv9.drawTracer(newX, newY, newZ, chestTracersGroundMode=="on"?true:false, chestTracersParticle);

                       }

                       }

                       }

                       }

                       }

                       if(playertracers){

                       var x = getPlayerX();

                       var y = getPlayerY();

                       var z = getPlayerZ();

                       var newX;

                       var newY;

                       var newZ;

                       for(var blockX = - playerTracersRange; blockX <= playerTracersRange; blockX++){

                       for(var blockY = - playerTracersRange; blockY <= playerTracersRange; blockY++){

                       for(var blockZ = - playerTracersRange; blockZ <= playerTracersRange; blockZ++){

                       newX = x + blockX;

                       newY = y + blockY;

                       newZ = z + blockZ;

                       var mobs = Entity.getAll();

                       for(var e = 0; e < mobs.length; e++){

                       var newX = Entity.getX(mobs[e]);

                       var newY = Entity.getY(mobs[e]);

                       var newZ = Entity.getZ(mobs[e]);

                       if(Entity.getEntityTypeId(mobs[e]) == 27 || Entity.getEntityTypeId(mobs[e]) == 65){

                       VCAv9.drawTracer(newX, newY, newZ, playerTracersGroundMode=="on"?true:false, playerTracersParticle);

                       }

                       }

                       }

                       }

                       }

                       }

                       if(twerker) {

                       twerking++;

                       if(twerking == 6) {

                       Entity.setSneaking(Player.getEntity(), 1);

                       }

                       if(twerking == 11) {

                       Entity.setSneaking(Player.getEntity(), 0);

                       twerking = 1;

                       }

                       }

                       if(GUI != null && GUI.isShowing() == false && (background == null || background.isShowing() == false) && (menu == null || menu.isShowing() == false) && (menu1 == null || menu1.isShowing() == false) && (menu2 == null || menu2.isShowing() == false) && (menu3 == null || menu3.isShowing() == false) && (menu4 == null || menu4.isShowing() == false) && (exitUI == null || exitUI.isShowing() == false) && (exitUI1 == null || exitUI1.isShowing() == false) && (exitUI2 == null || exitUI2.isShowing() == false) && (exitUI3 == null || exitUI3.isShowing() == false) && (exitUI4 == null || exitUI4.isShowing() == false)){

                       net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;

                       net.zhuoweizhang.mcpelauncher.ScriptManager.setLevelFakeCallback(true, false);

                       starter();

                       }

                       eval(rptask());

                    }

                }), 1000 / 70);

        }

    }))

}

rptask();

function dip2px(dips){

	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);

}

function newLevel(){

	if(minich == true){

	mapWindow.show();

	}

	VCAv9.playerIsInGame2 = true;

	VCAv9.playerIsInGame = true;

}

function starter(){

ctx.runOnUiThread(new Runnable({ run: function(){

	try{

		var layout = new LinearLayout(ctx);

		layout.setOrientation(1);

		var menuBtn = new Button(ctx);

		menuBtn.setBackgroundDrawable(customcolorI);

		menuBtn.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

		menuBtn.setOnClickListener(new View.OnClickListener({

			onClick: function(viewarg){

				Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.chestopen", 1, 1);

				GUI.dismiss();

				if(minich == true){

				mapWindow.hide();

				}

				mainMenu();

				exit();

				if(backch == true){

				backgroundMenu();

				menu.dismiss();

				exitUI.dismiss();

				mainMenu();

				exit();

			}

		}}));

		menuBtn.setOnLongClickListener(new android.view.View.OnLongClickListener(){

		  onLongClick: function(v, t){

			pressed = true;

				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);

			return true;

		  }

		});

		menuBtn.setOnTouchListener(new android.view.View.OnTouchListener(){

		  onTouch :function(v, e){

			if(!pressed){

			  mX = e.getX();

			  mY = e.getY();

			}

			if(pressed){

			  var action = e.getAction();

			if(action == 2){

			  var X = parseInt(e.getX()-mX)*-1/10;

			  var Y = parseInt(e.getY()-mY)*-1/10;

			  btnX += X;

			  btnY += Y;

			  GUI.update(parseInt(btnX), parseInt(btnY), -1, -1);

			}

			if(action == 1)

			  pressed = false;

			}

			  return false;

		  }

		});

		layout.addView(menuBtn);

		GUI = new PopupWindow(layout, dip2px(40), dip2px(40));

		GUI.setAnimationStyle(android.R.style.Animation_Dialog);

		GUI.setBackgroundDrawable(VCAv9GUI);

		GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, btnX, btnY);

		}catch(error){

			Toast.makeText(ctx, error, 1).show();

		}

	}}));

}

starter();

function backgroundMenu(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var menuLayout = new LinearLayout(ctx);

			var menuScroll = new ScrollView(ctx);

			var menuLayout1 = new LinearLayout(ctx);

			menuLayout.setOrientation(1);

			menuLayout1.setOrientation(1);

			menuScroll.addView(menuLayout);

			menuLayout1.addView(menuScroll);

			background = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight(), true);

			background.setAnimationStyle(android.R.style.Animation_Translucent);

			background.setBackgroundDrawable(VCAv9Background);

			background.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);

			}catch(error){

				Toast.makeText(ctx, error, 1).show();

			}

	}}));

}

function mainMenu(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var menuLayout = new LinearLayout(ctx);

			var menuScroll = new ScrollView(ctx);

			var menuLayout1 = new LinearLayout(ctx);

			menuLayout.setOrientation(1);

			menuLayout1.setOrientation(1);

			menuScroll.addView(menuLayout);

			menuLayout1.addView(menuScroll);

			var root = new TextView(ctx);

			root.setTextSize(24);

			root.setText(" /");

			root.setTypeface(VCAv9.font);

			root.setTextColor(Color.GREEN);

			menuLayout.addView(root);

			var progBar = new ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);

			progBar.setMax(100);

			progBar.setIndeterminate(true);

			progBar.setProgress(100);

			menuLayout.addView(progBar);

			var extras = new Button(ctx);

			extras.setTextSize(30);

			extras.setText("Extras");

			extras.setTransformationMethod(null);

			extras.setTypeface(VCAv9.font);

			extras.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			extras.setTextColor(Color.GREEN);

			extras.setGravity(Gravity.CENTER);

			extras.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					mainMenu1();

					exit1();

					exitUI.dismiss();

					menu.dismiss();

				}

			}));

			menuLayout.addView(extras);

			speedmine = new Switch(ctx);

			speedmine.setText("-AutoMine");

			speedmine.setTypeface(VCAv9.font);

			speedmine.setTextColor(Color.RED);

			speedmine.setChecked(speedminech);

			speedmine.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!speedminech){

						speedminech = true;

						speedmine.setTextColor(Color.GREEN);

						superspeedmine = true;

					}else{

						speedminech = false;

						speedmine.setTextColor(Color.RED);

						superspeedmine = false;

					}

					speedmine.setChecked(speedminech);

				}

			}));

			menuLayout.addView(speedmine);

			if(speedminech) {

				speedmine.setTextColor(Color.GREEN);

			}

			autoplace = new Switch(ctx);

			autoplace.setText("-AutoPlace");

			autoplace.setTypeface(VCAv9.font);

			autoplace.setTextColor(Color.RED);

			autoplace.setChecked(autoplacech);

			autoplace.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!autoplacech){

						autoplacech = true;

						autoplace.setTextColor(Color.GREEN);

						place = true;

					}else{

						autoplacech = false;

						autoplace.setTextColor(Color.RED);

						place = false;

					}

					autoplace.setChecked(autoplacech);

				}

			}));

			menuLayout.addView(autoplace);

			if(autoplacech) {

				autoplace.setTextColor(Color.GREEN);

			}

			godmode = new Switch(ctx);

			godmode.setText("-God Mode");

			godmode.setTypeface(VCAv9.font);

			godmode.setTextColor(Color.RED);

			godmode.setChecked(godmodech);

			godmode.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!godmodech){

						godmodech = true;

						godmode.setTextColor(Color.GREEN);

						supergodmode = true;

					}else{

						godmodech = false;

						godmode.setTextColor(Color.RED);

						supergodmode = false;

						Player.setHealth(20);

						Player.setHunger(20);

					}

					godmode.setChecked(godmodech);

				}

			}));

			menuLayout.addView(godmode);

			if(godmodech) {

				godmode.setTextColor(Color.GREEN);

			}

			tapregen = new Switch(ctx);

			tapregen.setText("-TapRegen");

			tapregen.setTypeface(VCAv9.font);

			tapregen.setTextColor(Color.RED);

			tapregen.setChecked(tapregench);

			tapregen.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!tapregench){

						tapregench = true;

						tapregen.setTextColor(Color.GREEN);

						supertapregen = true;

					}else{

						tapregench = false;

						tapregen.setTextColor(Color.RED);

						supertapregen = false;

					}

					tapregen.setChecked(tapregench);

				}

			}));

			menuLayout.addView(tapregen);

			if(tapregench) {

				tapregen.setTextColor(Color.GREEN);

			}

			breaking = new Switch(ctx);

			breaking.setText("-Protection");

			breaking.setTypeface(VCAv9.font);

			breaking.setTextColor(Color.RED);

			breaking.setChecked(breakch);

			breaking.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!breakch){

						breakch = true;

						breaking.setTextColor(Color.GREEN);

						antibreak = true;

					}else{

						breakch = false;

						breaking.setTextColor(Color.RED);

						antibreak = false;

					}

					breaking.setChecked(breakch);

				}

			}));

			menuLayout.addView(breaking);

			if(breakch) {

				breaking.setTextColor(Color.GREEN);

			}

			suicide = new Switch(ctx);

			suicide.setText("-AutoSuicide");

			suicide.setTypeface(VCAv9.font);

			suicide.setTextColor(Color.RED);

			suicide.setChecked(suicidech);

			suicide.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!suicidech){

						suicidech = true;

						suicide.setTextColor(Color.GREEN);

						autosuicide = true;

					}else{

						suicidech = false;

						suicide.setTextColor(Color.RED);

						autosuicide = false;

						Player.setHealth(20);

					}

					suicide.setChecked(suicidech);

				}

			}));

			menuLayout.addView(suicide);

			if(suicidech) {

				suicide.setTextColor(Color.GREEN);

			}

			immobile = new Switch(ctx);

			immobile.setText("-Immobile");

			immobile.setTypeface(VCAv9.font);

			immobile.setTextColor(Color.RED);

			immobile.setChecked(immobilech);

			immobile.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!immobilech){

						immobilech = true;

						immobile.setTextColor(Color.GREEN);

						freeze = true;

					}else{

						immobilech = false;

						immobile.setTextColor(Color.RED);

						freeze = false;

						Entity.setImmobile(Player.getEntity(), false);

					}

					immobile.setChecked(immobilech);

				}

			}));

			menuLayout.addView(immobile);

			if(immobilech) {

				immobile.setTextColor(Color.GREEN);

			}

			boom = new Switch(ctx);

			boom.setText("-Kaboom");

			boom.setTypeface(VCAv9.font);

			boom.setTextColor(Color.RED);

			boom.setChecked(boomch);

			boom.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!boomch){

						boomch = true;

						boom.setTextColor(Color.GREEN);

						kaboom = true;

					}else{

						boomch = false;

						boom.setTextColor(Color.RED);

						kaboom = false;

					}

					boom.setChecked(boomch);

				}

			}));

			menuLayout.addView(boom);

			if(boomch) {

				boom.setTextColor(Color.GREEN);

			}

			nuke = new Switch(ctx);

			nuke.setText("-Nuker");

			nuke.setTypeface(VCAv9.font);

			nuke.setTextColor(Color.RED);

			nuke.setChecked(nukech);

			nuke.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!nukech){

						nukech = true;

						nuke.setTextColor(Color.GREEN);

						nuker = true;

					}else{

						nukech = false;

						nuke.setTextColor(Color.RED);

						nuker = false;

					}

					nuke.setChecked(nukech);

				}

			}));

			menuLayout.addView(nuke);

			if(nukech) {

				nuke.setTextColor(Color.GREEN);

			}

			flight = new Switch(ctx);

			flight.setText("-Flight");

			flight.setTypeface(VCAv9.font);

			flight.setTextColor(Color.RED);

			flight.setChecked(flightch);

			flight.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!flightch){

						flightch = true;

						flight.setTextColor(Color.GREEN);

						VCAv9.flight(1);

					}else{

						flightch = false;

						flight.setTextColor(Color.RED);

						VCAv9.flight(0);

					}

					flight.setChecked(flightch);

				}

			}));

			menuLayout.addView(flight);

			if(flightch) {

				flight.setTextColor(Color.GREEN);

			}

			remove = new Switch(ctx);

			remove.setText("-All Remove");

			remove.setTypeface(VCAv9.font);

			remove.setTextColor(Color.RED);

			remove.setChecked(removech);

			remove.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!removech){

						removech = true;

						remove.setTextColor(Color.GREEN);

						allremove = true;

					}else{

						removech = false;

						remove.setTextColor(Color.RED);

						allremove = false;

					}

					remove.setChecked(removech);

				}

			}));

			menuLayout.addView(remove);

			if(removech) {

				remove.setTextColor(Color.GREEN);

			}

			remover = new Switch(ctx);

			remover.setText("-TapRemover [+ Players]");

			remover.setTypeface(VCAv9.font);

			remover.setTextColor(Color.RED);

			remover.setChecked(removerch);

			remover.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!removerch){

						removerch = true;

						remover.setTextColor(Color.GREEN);

						tapremover = true;

					}else{

						removerch = false;

						remover.setTextColor(Color.RED);

						tapremover = false;

					}

					remover.setChecked(removerch);

				}

			}));

			menuLayout.addView(remover);

			if(removerch) {

				remover.setTextColor(Color.GREEN);

			}

			stop = new Switch(ctx);

			stop.setText("-StopTime");

			stop.setTypeface(VCAv9.font);

			stop.setTextColor(Color.RED);

			stop.setChecked(stoptimech);

			stop.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!stoptimech){

						locktime = Level.getTime();

						stoptimech = true;

						stop.setTextColor(Color.GREEN);

						stoptime = true;

					}else{

						stoptimech = false;

						stop.setTextColor(Color.RED);

						stoptime = false;

					}

					stop.setChecked(stoptimech);

				}

			}));

			menuLayout.addView(stop);

			if(stoptimech) {

				stop.setTextColor(Color.GREEN);

			}

			weather = new Switch(ctx);

			weather.setText("-NoWeather");

			weather.setTypeface(VCAv9.font);

			weather.setTextColor(Color.RED);

			weather.setChecked(weatherch);

			weather.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!weatherch){

						weatherch = true;

						weather.setTextColor(Color.GREEN);

						noweather = true;

					}else{

						weatherch = false;

						weather.setTextColor(Color.RED);

						noweather = false;

					}

					weather.setChecked(weatherch);

				}

			}));

			menuLayout.addView(weather);

			if(weatherch) {

				weather.setTextColor(Color.GREEN);

			}

			arrowgun = new Switch(ctx);

			arrowgun.setText("-ArrowGun");

			arrowgun.setTypeface(VCAv9.font);

			arrowgun.setTextColor(Color.RED);

			arrowgun.setChecked(arrowgunch);

			arrowgun.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!arrowgunch){

						arrowgunch = true;

						arrowgun.setTextColor(Color.GREEN);

						arrowminigun = true;

					}else{

						arrowgunch = false;

						arrowgun.setTextColor(Color.RED);

						arrowminigun = false;

					}

					arrowgun.setChecked(arrowgunch);

				}

			}));

			menuLayout.addView(arrowgun);

			if(arrowgunch) {

				arrowgun.setTextColor(Color.GREEN);

			}

			pe = new Switch(ctx);

			pe.setText("-PowerExplosions");

			pe.setTypeface(VCAv9.font);

			pe.setTextColor(Color.RED);

			pe.setChecked(pech);

			pe.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!pech){

						pech = true;

						pe.setTextColor(Color.GREEN);

						powerexplosions = true;

					}else{

						pech = false;

						pe.setTextColor(Color.RED);

						powerexplosions = false;

					}

					pe.setChecked(pech);

				}

			}));

			menuLayout.addView(pe);

			if(pech) {

				pe.setTextColor(Color.GREEN);

			}

			grief = new Switch(ctx);

			grief.setText("-Grief");

			grief.setTypeface(VCAv9.font);

			grief.setTextColor(Color.RED);

			grief.setChecked(griefch);

			grief.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!griefch){

						griefch = true;

						grief.setTextColor(Color.GREEN);

						griefing = true;

					}else{

						griefch = false;

						grief.setTextColor(Color.RED);

						griefing = false;

					}

					grief.setChecked(griefch);

				}

			}));

			menuLayout.addView(grief);

			if(griefch) {

				grief.setTextColor(Color.GREEN);

			}

			autoleave = new Switch(ctx);

			autoleave.setText("-AutoLeave");

			autoleave.setTypeface(VCAv9.font);

			autoleave.setTextColor(Color.RED);

			autoleave.setChecked(autoleavech);

			autoleave.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!autoleavech){

						autoleavech = true;

						autoleave.setTextColor(Color.GREEN);

						leave = true;

					}else{

						autoleavech = false;

						autoleave.setTextColor(Color.RED);

						leave = false;

					}

					autoleave.setChecked(autoleavech);

				}

			}));

			menuLayout.addView(autoleave);

			if(autoleavech) {

				autoleave.setTextColor(Color.GREEN);

			}

			lag = new Switch(ctx);

			lag.setText("-Lag");

			lag.setTypeface(VCAv9.font);

			lag.setTextColor(Color.RED);

			lag.setChecked(lagch);

			lag.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!lagch){

						lagch = true;

						lag.setTextColor(Color.GREEN);

						lagging = true;

					}else{

						lagch = false;

						lag.setTextColor(Color.RED);

						lagging = false;

					}

					lag.setChecked(lagch);

				}

			}));

			menuLayout.addView(lag);

			if(lagch) {

				lag.setTextColor(Color.GREEN);

			}

			saddleup = new Switch(ctx);

			saddleup.setText("-Ride [+ Players]");

			saddleup.setTypeface(VCAv9.font);

			saddleup.setTextColor(Color.RED);

			saddleup.setChecked(saddleupch);

			saddleup.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!saddleupch){

						saddleupch = true;

						saddleup.setTextColor(Color.GREEN);

						saddle = true;

					}else{

						saddleupch = false;

						saddleup.setTextColor(Color.RED);

						saddle = false;

					}

					saddleup.setChecked(saddleupch);

				}

			}));

			menuLayout.addView(saddleup);

			if(saddleupch) {

				saddleup.setTextColor(Color.GREEN);

			}

			ct = new Switch(ctx);

			ct.setText("-ChestTracers");

			ct.setTypeface(VCAv9.font);

			ct.setTextColor(Color.RED);

			ct.setChecked(ctch);

			ct.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!ctch){

						ctch = true;

						ct.setTextColor(Color.GREEN);

						chesttracers = true;

					}else{

						ctch = false;

						ct.setTextColor(Color.RED);

						chesttracers = false;

					}

					ct.setChecked(ctch);

				}

			}));

			menuLayout.addView(ct);

			if(ctch) {

				ct.setTextColor(Color.GREEN);

			}

			pt = new Switch(ctx);

			pt.setText("-PlayerTracers");

			pt.setTypeface(VCAv9.font);

			pt.setTextColor(Color.RED);

			pt.setChecked(ptch);

			pt.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!ptch){

						ptch = true;

						pt.setTextColor(Color.GREEN);

						playertracers = true;

					}else{

						ptch = false;

						pt.setTextColor(Color.RED);

						playertracers = false;

					}

					pt.setChecked(ptch);

				}

			}));

			menuLayout.addView(pt);

			if(ptch) {

				pt.setTextColor(Color.GREEN);

			}

			knockback = new Switch(ctx);

			knockback.setText("-Knockback [All]");

			knockback.setTypeface(VCAv9.font);

			knockback.setTextColor(Color.RED);

			knockback.setChecked(knockbackch);

			knockback.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!knockbackch){

						knockbackch = true;

						knockback.setTextColor(Color.GREEN);

						knockbacks = true;

					}else{

						knockbackch = false;

						knockback.setTextColor(Color.RED);

						knockbacks = false;

					}

					knockback.setChecked(knockbackch);

				}

			}));

			menuLayout.addView(knockback);

			if(knockbackch) {

				knockback.setTextColor(Color.GREEN);

			}

			antiknockback = new Switch(ctx);

			antiknockback.setText("-AntiKnockback");

			antiknockback.setTypeface(VCAv9.font);

			antiknockback.setTextColor(Color.RED);

			antiknockback.setChecked(antiknockbackch);

			antiknockback.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!antiknockbackch){

						antiknockbackch = true;

						antiknockback.setTextColor(Color.GREEN);

						antiknockbacks = true;

					}else{

						antiknockbackch = false;

						antiknockback.setTextColor(Color.RED);

						antiknockbacks = false;

					}

					antiknockback.setChecked(antiknockbackch);

				}

			}));

			menuLayout.addView(antiknockback);

			if(antiknockbackch) {

				antiknockback.setTextColor(Color.GREEN);

			}

			av = new Switch(ctx);

			av.setText("-AntiVOID");

			av.setTypeface(VCAv9.font);

			av.setTextColor(Color.RED);

			av.setChecked(avch);

			av.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!avch){

						avch = true;

						av.setTextColor(Color.GREEN);

						antivoid = true;

					}else{

						avch = false;

						av.setTextColor(Color.RED);

						antivoid = false;

					}

					av.setChecked(avch);

				}

			}));

			menuLayout.addView(av);

			if(avch) {

				av.setTextColor(Color.GREEN);

			}

			xpspawn = new Switch(ctx);

			xpspawn.setText("-XPSpawner");

			xpspawn.setTypeface(VCAv9.font);

			xpspawn.setTextColor(Color.RED);

			xpspawn.setChecked(xpspawnch);

			xpspawn.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!xpspawnch){

						xpspawnch = true;

						xpspawn.setTextColor(Color.GREEN);

						spawner = true;

					}else{

						xpspawnch = false;

						xpspawn.setTextColor(Color.RED);

						spawner = false;

					}

					xpspawn.setChecked(xpspawnch);

				}

			}));

			menuLayout.addView(xpspawn);

			if(xpspawnch) {

				xpspawn.setTextColor(Color.GREEN);

			}

			hero = new Switch(ctx);

			hero.setText("-Herobrine");

			hero.setTypeface(VCAv9.font);

			hero.setTextColor(Color.RED);

			hero.setChecked(heroch);

			hero.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!heroch){

						heroch = true;

						hero.setTextColor(Color.GREEN);

						herobrine = true;

					}else{

						heroch = false;

						hero.setTextColor(Color.RED);

						herobrine = false;

					}

					hero.setChecked(heroch);

				}

			}));

			menuLayout.addView(hero);

			if(heroch) {

				hero.setTextColor(Color.GREEN);

			}

			tapspam = new Switch(ctx);

			tapspam.setText("-TapSpammer");

			tapspam.setTypeface(VCAv9.font);

			tapspam.setTextColor(Color.RED);

			tapspam.setChecked(tapspamch);

			tapspam.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!tapspamch){

						tapspamch = true;

						tapspam.setTextColor(Color.GREEN);

						spammer = true;

					}else{

						tapspamch = false;

						tapspam.setTextColor(Color.RED);

						spammer = false;

					}

					tapspam.setChecked(tapspamch);

				}

			}));

			menuLayout.addView(tapspam);

			if(tapspamch) {

				tapspam.setTextColor(Color.GREEN);

			}

			ttt = new Switch(ctx);

			ttt.setText("-Text2Toast");

			ttt.setTypeface(VCAv9.font);

			ttt.setTextColor(Color.RED);

			ttt.setChecked(tttch);

			ttt.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!tttch){

						tttch = true;

						ttt.setTextColor(Color.GREEN);

						texttotoast = true;

					}else{

						tttch = false;

						ttt.setTextColor(Color.RED);

						texttotoast = false;

					}

					ttt.setChecked(tttch);

				}

			}));

			menuLayout.addView(ttt);

			if(tttch) {

				ttt.setTextColor(Color.GREEN);

			}

			jetpack = new Switch(ctx);

			jetpack.setText("-Jetpack");

			jetpack.setTypeface(VCAv9.font);

			jetpack.setTextColor(Color.RED);

			jetpack.setChecked(jetpackch);

			jetpack.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!jetpackch){

						jetpackch = true;

						jetpack.setTextColor(Color.GREEN);

						jetpacked = true;

					}else{

						jetpackch = false;

						jetpack.setTextColor(Color.RED);

						jetpacked = false;

					}

					jetpack.setChecked(jetpackch);

				}

			}));

			menuLayout.addView(jetpack);

			if(jetpackch) {

				jetpack.setTextColor(Color.GREEN);

			}

			autosword = new Switch(ctx);

			autosword.setText("-AutoSword");

			autosword.setTypeface(VCAv9.font);

			autosword.setTextColor(Color.RED);

			autosword.setChecked(autoswordch);

			autosword.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!autoswordch){

						autoswordch = true;

						autosword.setTextColor(Color.GREEN);

						sword = true;

					}else{

						autoswordch = false;

						autosword.setTextColor(Color.RED);

						sword = false;

					}

					autosword.setChecked(autoswordch);

				}

			}));

			menuLayout.addView(autosword);

			if(autoswordch) {

				autosword.setTextColor(Color.GREEN);

			}

			autoswitch = new Switch(ctx);

			autoswitch.setText("-AutoSwitch");

			autoswitch.setTypeface(VCAv9.font);

			autoswitch.setTextColor(Color.RED);

			autoswitch.setChecked(autoswitchch);

			autoswitch.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!autoswitchch){

						autoswitchch = true;

						autoswitch.setTextColor(Color.GREEN);

						switcher = true;

					}else{

						autoswitchch = false;

						autoswitch.setTextColor(Color.RED);

						switcher = false;

					}

					autoswitch.setChecked(autoswitchch);

				}

			}));

			menuLayout.addView(autoswitch);

			if(autoswitchch) {

				autoswitch.setTextColor(Color.GREEN);

			}

			tp = new Switch(ctx);

			tp.setText("-TP-Aura");

			tp.setTypeface(VCAv9.font);

			tp.setTextColor(Color.RED);

			tp.setChecked(tpch);

			tp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!tpch){

						tpch = true;

						tp.setTextColor(Color.GREEN);

						tpaura = true;

					}else{

						tpch = false;

						tp.setTextColor(Color.RED);

						tpaura = false;

					}

					tp.setChecked(tpch);

				}

			}));

			menuLayout.addView(tp);

			if(tpch) {

				tp.setTextColor(Color.GREEN);

			}

			alltp = new Switch(ctx);

			alltp.setText("-All Teleport");

			alltp.setTypeface(VCAv9.font);

			alltp.setTextColor(Color.RED);

			alltp.setChecked(alltpch);

			alltp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!alltpch){

						alltpch = true;

						alltp.setTextColor(Color.GREEN);

						alltps = true;

					}else{

						alltpch = false;

						alltp.setTextColor(Color.RED);

						alltps = false;

					}

					alltp.setChecked(alltpch);

				}

			}));

			menuLayout.addView(alltp);

			if(alltpch) {

				alltp.setTextColor(Color.GREEN);

			}

			ndg = new Switch(ctx);

			ndg.setText("-NoDownGlide");

			ndg.setTypeface(VCAv9.font);

			ndg.setTextColor(Color.RED);

			ndg.setChecked(ndgch);

			ndg.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!ndgch){

						ndgch = true;

						ndg.setTextColor(Color.GREEN);

						nodownglide = true;

					}else{

						ndgch = false;

						ndg.setTextColor(Color.RED);

						nodownglide = false;

					}

					ndg.setChecked(ndgch);

				}

			}));

			menuLayout.addView(ndg);

			if(ndgch) {

				ndg.setTextColor(Color.GREEN);

			}

			nuker = new Switch(ctx);

			nuker.setText("-TapNuker [+ Players]");

			nuker.setTypeface(VCAv9.font);

			nuker.setTextColor(Color.RED);

			nuker.setChecked(nukerch);

			nuker.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!nukerch){

						nukerch = true;

						nuker.setTextColor(Color.GREEN);

						nukers = true;

					}else{

						nukerch = false;

						nuker.setTextColor(Color.RED);

						nukers = false;

					}

					nuker.setChecked(nukerch);

				}

			}));

			menuLayout.addView(nuker);

			if(nukerch) {

				nuker.setTextColor(Color.GREEN);

			}

			glide = new Switch(ctx);

			glide.setText("-Glide");

			glide.setTypeface(VCAv9.font);

			glide.setTextColor(Color.RED);

			glide.setChecked(glidech);

			glide.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!glidech){

						glidech = true;

						glide.setTextColor(Color.GREEN);

						glider = true;

					}else{

						glidech = false;

						glide.setTextColor(Color.RED);

						glider = false;

					}

					glide.setChecked(glidech);

				}

			}));

			menuLayout.addView(glide);

			if(glidech) {

				glide.setTextColor(Color.GREEN);

			}

			cbuild = new Switch(ctx);

			cbuild.setText("-TapExplosion [+ Players]");

			cbuild.setTypeface(VCAv9.font);

			cbuild.setTextColor(Color.RED);

			cbuild.setChecked(cbuildch);

			cbuild.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!cbuildch){

						cbuildch = true;

						cbuild.setTextColor(Color.GREEN);

						cbuilder = true;

					}else{

						cbuildch = false;

						cbuild.setTextColor(Color.RED);

						cbuilder = false;

					}

					cbuild.setChecked(cbuildch);

				}

			}));

			menuLayout.addView(cbuild);

			if(cbuildch) {

				cbuild.setTextColor(Color.GREEN);

			}

			speed = new Switch(ctx);

			speed.setText("-FastWalk");

			speed.setTypeface(VCAv9.font);

			speed.setTextColor(Color.RED);

			speed.setChecked(speedch);

			speed.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!speedch){

						speedch = true;

						speed.setTextColor(Color.GREEN);

						speeded = true;

						s = 1;

					}else{

						speedch = false;

						speed.setTextColor(Color.RED);

						speeded = false;

						s = 0;

					}

					speed.setChecked(speedch);

				}

			}));

			menuLayout.addView(speed);

			if(speedch) {

				speed.setTextColor(Color.GREEN);

			}

			tele = new Switch(ctx);

			tele.setText("-AutoTeleporter");

			tele.setTypeface(VCAv9.font);

			tele.setTextColor(Color.RED);

			tele.setChecked(teleportch);

			tele.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!teleportch){

						teleportch = true;

						tele.setTextColor(Color.GREEN);

						teleporter = true;

					}else{

						teleportch = false;

						tele.setTextColor(Color.RED);

						teleporter = false;

					}

					tele.setChecked(teleportch);

				}

			}));

			menuLayout.addView(tele);

			if(teleportch) {

				tele.setTextColor(Color.GREEN);

			}

			stackdr = new Switch(ctx);

			stackdr.setText("-StackDrop");

			stackdr.setTypeface(VCAv9.font);

			stackdr.setTextColor(Color.RED);

			stackdr.setChecked(stackdrch);

			stackdr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!stackdrch){

						stackdrch = true;

						stackdr.setTextColor(Color.GREEN);

						stacked = true;

					}else{

						stackdrch = false;

						stackdr.setTextColor(Color.RED);

						stacked = false;

					}

					stackdr.setChecked(stackdrch);

				}

			}));

			menuLayout.addView(stackdr);

			if(stackdrch) {

				stackdr.setTextColor(Color.GREEN);

			}

			bot = new Switch(ctx);

			bot.setText("-Aimbot");

			bot.setTypeface(VCAv9.font);

			bot.setTextColor(Color.RED);

			bot.setChecked(aimch);

			bot.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!aimch){

						aimch = true;

						bot.setTextColor(Color.GREEN);

						aimbot = true;

					}else{

						aimch = false;

						bot.setTextColor(Color.RED);

						aimbot = false;

					}

					bot.setChecked(aimch);

				}

			}));

			menuLayout.addView(bot);

			if(aimch) {

				bot.setTextColor(Color.GREEN);

			}

			aim = new Switch(ctx);

			aim.setText("-BowAimbot [+ Players]");

			aim.setTypeface(VCAv9.font);

			aim.setTextColor(Color.RED);

			aim.setChecked(aimbotch);

			aim.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!aimbotch){

						aimbotch = true;

						aim.setTextColor(Color.GREEN);

						bowaimbot = true;

					}else{

						aimbotch = false;

						aim.setTextColor(Color.RED);

						bowaimbot = false;

					}

					aim.setChecked(aimbotch);

				}

			}));

			menuLayout.addView(aim);

			if(aimbotch) {

				aim.setTextColor(Color.GREEN);

			}

			ap = new Switch(ctx);

			ap.setText("-AntiPotion");

			ap.setTypeface(VCAv9.font);

			ap.setTextColor(Color.RED);

			ap.setChecked(apch);

			ap.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!apch){

						apch = true;

						ap.setTextColor(Color.GREEN);

						antipotion = true;

					}else{

						apch = false;

						ap.setTextColor(Color.RED);

						antipotion = false;

					}

					ap.setChecked(apch);

				}

			}));

			menuLayout.addView(ap);

			if(apch) {

				ap.setTextColor(Color.GREEN);

			}

			highjump = new Switch(ctx);

			highjump.setText("-SuperJump");

			highjump.setTypeface(VCAv9.font);

			highjump.setTextColor(Color.RED);

			highjump.setChecked(highjumpch);

			highjump.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!highjumpch){

						highjumpch = true;

						highjump.setTextColor(Color.GREEN);

						highjumps = true;

					}else{

						highjumpch = false;

						highjump.setTextColor(Color.RED);

						highjumps = false;

					}

					highjump.setChecked(highjumpch);

				}

			}));

			menuLayout.addView(highjump);

			if(highjumpch) {

				highjump.setTextColor(Color.GREEN);

			}

			freeze = new Switch(ctx);

			freeze.setText("-FreezeAura");

			freeze.setTypeface(VCAv9.font);

			freeze.setTextColor(Color.RED);

			freeze.setChecked(freezech);

			freeze.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!freezech){

						freezech = true;

						freeze.setTextColor(Color.GREEN);

						freezeaura = true;

					}else{

						freezech = false;

						freeze.setTextColor(Color.RED);

						freezeaura = false;

					}

					freeze.setChecked(freezech);

				}

			}));

			menuLayout.addView(freeze);

			if(freezech) {

				freeze.setTextColor(Color.GREEN);

			}

			multi = new Switch(ctx);

			multi.setText("-SpeedHack");

			multi.setTypeface(VCAv9.font);

			multi.setTextColor(Color.RED);

			multi.setChecked(multiplierch);

			multi.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!multiplierch){

						multiplierch = true;

						multi.setTextColor(Color.GREEN);

						multiplier = true;

					}else{

						multiplierch = false;

						multi.setTextColor(Color.RED);

						multiplier = false;

					}

					multi.setChecked(multiplierch);

				}

			}));

			menuLayout.addView(multi);

			if(multiplierch) {

				multi.setTextColor(Color.GREEN);

			}

			critic = new Switch(ctx);

			critic.setText("-Criticals");

			critic.setTypeface(VCAv9.font);

			critic.setTextColor(Color.RED);

			critic.setChecked(criticch);

			critic.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!criticch){

						criticch = true;

						critic.setTextColor(Color.GREEN);

						criticals = true;

					}else{

						criticch = false;

						critic.setTextColor(Color.RED);

						criticals = false;

					}

					critic.setChecked(criticch);

				}

			}));

			menuLayout.addView(critic);

			if(criticch) {

				critic.setTextColor(Color.GREEN);

			}

			derp = new Switch(ctx);

			derp.setText("-Derp");

			derp.setTypeface(VCAv9.font);

			derp.setTextColor(Color.RED);

			derp.setChecked(derpch);

			derp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!derpch){

						derpch = true;

						derp.setTextColor(Color.GREEN);

						derps = true;

					}else{

						derpch = false;

						derp.setTextColor(Color.RED);

						derps = false;

					}

					derp.setChecked(derpch);

				}

			}));

			menuLayout.addView(derp);

			if(derpch) {

				derp.setTextColor(Color.GREEN);

			}

			twerk = new Switch(ctx);

			twerk.setText("-Twerk");

			twerk.setTypeface(VCAv9.font);

			twerk.setTextColor(Color.RED);

			twerk.setChecked(twerkch);

			twerk.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!twerkch){

						twerkch = true;

						twerk.setTextColor(Color.GREEN);

						twerker = true;

					}else{

						twerkch = false;

						twerk.setTextColor(Color.RED);

						twerker = false;

					}

					twerk.setChecked(twerkch);

				}

			}));

			menuLayout.addView(twerk);

			if(twerkch) {

				twerk.setTextColor(Color.GREEN);

			}

			pple = new Switch(ctx);

			pple.setText("-FastBridge");

			pple.setTypeface(VCAv9.font);

			pple.setTextColor(Color.RED);

			pple.setChecked(grach);

			pple.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!grach){

						grach = true;

						pple.setTextColor(Color.GREEN);

						grapple = true;

					}else{

						grach = false;

						pple.setTextColor(Color.RED);

						grapple = false;

					}

					pple.setChecked(grach);

				}

			}));

			menuLayout.addView(pple);

			if(grach) {

				pple.setTextColor(Color.GREEN);

			}

			flw = new Switch(ctx);

			flw.setText("-Follow");

			flw.setTypeface(VCAv9.font);

			flw.setTextColor(Color.RED);

			flw.setChecked(flwch);

			flw.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!flwch){

						flwch = true;

						flw.setTextColor(Color.GREEN);

						follow = true;

					}else{

						flwch = false;

						flw.setTextColor(Color.RED);

						follow = false;

					}

					flw.setChecked(flwch);

				}

			}));

			menuLayout.addView(flw);

			if(flwch) {

				flw.setTextColor(Color.GREEN);

			}

			drone = new Switch(ctx);

			drone.setText("-Drone+");

			drone.setTypeface(VCAv9.font);

			drone.setTextColor(Color.RED);

			drone.setChecked(dronech);

			drone.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!dronech){

						dronech = true;

						drone.setTextColor(Color.GREEN);

						droneplus = true;

					}else{

						dronech = false;

						drone.setTextColor(Color.RED);

						droneplus = false;

					}

					drone.setChecked(dronech);

				}

			}));

			menuLayout.addView(drone);

			if(dronech) {

				drone.setTextColor(Color.GREEN);

			}

			walk = new Switch(ctx);

			walk.setText("-AutoWalk");

			walk.setTypeface(VCAv9.font);

			walk.setTextColor(Color.RED);

			walk.setChecked(walkch);

			walk.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!walkch){

						walkch = true;

						walk.setTextColor(Color.GREEN);

						autowalk = true;

					}else{

						walkch = false;

						walk.setTextColor(Color.RED);

						autowalk = false;

					}

					walk.setChecked(walkch);

				}

			}));

			menuLayout.addView(walk);

			if(walkch) {

				walk.setTextColor(Color.GREEN);

			}

			kill = new Switch(ctx);

			kill.setText("-Killaura");

			kill.setTypeface(VCAv9.font);

			kill.setTextColor(Color.RED);

			kill.setChecked(killch);

			kill.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!killch){

						killch = true;

						kill.setTextColor(Color.GREEN);

						killaura = true;

					}else{

						killch = false;

						kill.setTextColor(Color.RED);

						killaura = false;

					}

					kill.setChecked(killch);

				}

			}));

			menuLayout.addView(kill);

			if(killch) {

				kill.setTextColor(Color.GREEN);

			}

			gmspeed = new Switch(ctx);

			gmspeed.setText("-Timer [All]");

			gmspeed.setTypeface(VCAv9.font);

			gmspeed.setTextColor(Color.RED);

			gmspeed.setChecked(gmspeedch);

			gmspeed.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!gmspeedch){

						gmspeedch = true;

						gmspeed.setTextColor(Color.GREEN);

						gamesd = true;

						ModPE.setGameSpeed(200);

						setNightMode(true);

					}else{

						gmspeedch = false;

						gmspeed.setTextColor(Color.RED);

						gamesd = false;

						ModPE.setGameSpeed(20);

						setNightMode(false);

					}

					gmspeed.setChecked(gmspeedch);

				}

			}));

			menuLayout.addView(gmspeed);

			if(gmspeedch) {

				gmspeed.setTextColor(Color.GREEN);

			}

			zoom = new Switch(ctx);

			zoom.setText("-Zoom");

			zoom.setTypeface(VCAv9.font);

			zoom.setTextColor(Color.RED);

			zoom.setChecked(zoomch);

			zoom.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!zoomch){

						zoomch = true;

						zoom.setTextColor(Color.GREEN);

						ModPE.setFov(10);

					}else{

						zoomch = false;

						zoom.setTextColor(Color.RED);

						ModPE.resetFov();

					}

					zoom.setChecked(zoomch);

				}

			}));

			menuLayout.addView(zoom);

			if(zoomch) {

				zoom.setTextColor(Color.GREEN);

			}

			antiburn = new Switch(ctx);

			antiburn.setText("-AntiFire");

			antiburn.setTypeface(VCAv9.font);

			antiburn.setTextColor(Color.RED);

			antiburn.setChecked(antiburnch);

			antiburn.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!antiburnch){

						antiburnch = true;

						antiburn.setTextColor(Color.GREEN);

						burn = true;

					}else{

						antiburnch = false;

						antiburn.setTextColor(Color.RED);

						burn = false;

					}

					antiburn.setChecked(antiburnch);

				}

			}));

			menuLayout.addView(antiburn);

			if(antiburnch) {

				antiburn.setTextColor(Color.GREEN);

			}

			fire = new Switch(ctx);

			fire.setText("-FireAura");

			fire.setTypeface(VCAv9.font);

			fire.setTextColor(Color.RED);

			fire.setChecked(firech);

			fire.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!firech){

						firech = true;

						fire.setTextColor(Color.GREEN);

						fireaura = true;

					}else{

						firech = false;

						fire.setTextColor(Color.RED);

						fireaura = false;

					}

					fire.setChecked(firech);

				}

			}));

			menuLayout.addView(fire);

			if(firech) {

				fire.setTextColor(Color.GREEN);

			}

			jesus = new Switch(ctx);

			jesus.setText("-LiquidWalk");

			jesus.setTypeface(VCAv9.font);

			jesus.setTextColor(Color.RED);

			jesus.setChecked(jesusch);

			jesus.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!jesusch){

						jesusch = true;

						jesus.setTextColor(Color.GREEN);

						waterwalk = true;

					}else{

						jesusch = false;

						jesus.setTextColor(Color.RED);

						waterwalk = false;

					}

					jesus.setChecked(jesusch);

				}

			}));

			menuLayout.addView(jesus);

			if(jesusch) {

				jesus.setTextColor(Color.GREEN);

			}

			nowall = new Switch(ctx);

			nowall.setText("-Wallhack");

			nowall.setTypeface(VCAv9.font);

			nowall.setTextColor(Color.RED);

			nowall.setChecked(nowallch);

			nowall.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!nowallch){

						nowallch = true;

						nowall.setTextColor(Color.GREEN);

						nowalls = true;

						Entity.setCollisionSize(getPlayerEnt(), 0.1, 0.1);

					}else{

						nowallch = false;

						nowall.setTextColor(Color.RED);

						nowalls = false;

						Entity.setCollisionSize(getPlayerEnt(), 0.6, 1.8);

					}

					nowall.setChecked(nowallch);

				}

			}));

			menuLayout.addView(nowall);

			if(nowallch) {

				nowall.setTextColor(Color.GREEN);

			}

			climb = new Switch(ctx);

			climb.setText("-Spider");

			climb.setTypeface(VCAv9.font);

			climb.setTextColor(Color.RED);

			climb.setChecked(climbch);

			climb.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!climbch){

						climbch = true;

						climb.setTextColor(Color.GREEN);

						climbs = true;

					}else{

						climbch = false;

						climb.setTextColor(Color.RED);

						climbs = false;

					}

					climb.setChecked(climbch);

				}

			}));

			menuLayout.addView(climb);

			if(climbch) {

				climb.setTextColor(Color.GREEN);

			}

			phin = new Switch(ctx);

			phin.setText("-Dolphin");

			phin.setTypeface(VCAv9.font);

			phin.setTextColor(Color.RED);

			phin.setChecked(phinch);

			phin.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!phinch){

						phinch = true;

						phin.setTextColor(Color.GREEN);

						dolphin = true;

					}else{

						phinch = false;

						phin.setTextColor(Color.RED);

						dolphin = false;

					}

					phin.setChecked(phinch);

				}

			}));

			menuLayout.addView(phin);

			if(phinch) {

				phin.setTextColor(Color.GREEN);

			}

			jump = new Switch(ctx);

			jump.setText("-BunnyHop");

			jump.setTypeface(VCAv9.font);

			jump.setTextColor(Color.RED);

			jump.setChecked(jumpch);

			jump.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!jumpch){

						jumpch = true;

						jump.setTextColor(Color.GREEN);

						autojump = true;

					}else{

						jumpch = false;

						jump.setTextColor(Color.RED);

						autojump = false;

					}

					jump.setChecked(jumpch);

				}

			}));

			menuLayout.addView(jump);

			if(jumpch) {

				jump.setTextColor(Color.GREEN);

			}

			var adventure = new Button(ctx);

			adventure.setTextSize(30);

			adventure.setText("Adventure");

			adventure.setTransformationMethod(null);

			if(GetLang == "fr_FR")adventure.setText('Aventure');

			adventure.setTypeface(VCAv9.font);

			adventure.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			adventure.setTextColor(Color.GREEN);

			adventure.setGravity(Gravity.CENTER);

			adventure.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.setGameMode(2);

				}

			}}));

			menuLayout.addView(adventure);

			var ac = new Button(ctx);

			ac.setTextSize(30);

			ac.setText("AntiCactus");

			ac.setTransformationMethod(null);

			ac.setTypeface(VCAv9.font);

			ac.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			ac.setTextColor(Color.GREEN);

			ac.setGravity(Gravity.CENTER);

			ac.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Block.setShape(81, 0, 0, 0, 1.2, 1.2, 1.2);

					Block.defineBlock(81, "§l§o§aAntiCactus", [["cactus", 0]], 0, false, 0);

				}

			}}));

			menuLayout.addView(ac);

			var allig = new Button(ctx);

			allig.setTextSize(30);

			allig.setText("AutoLevitate [Mobs]");

			allig.setTransformationMethod(null);

			if(GetLang == "fr_FR")allig.setText('Lever Auto [Animaux]');

			allig.setTypeface(VCAv9.font);

			allig.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			allig.setTextColor(Color.GREEN);

			allig.setGravity(Gravity.CENTER);

			allig.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					aig = 50;

				}

			}));

			menuLayout.addView(allig);

			var bf = new Button(ctx);

			bf.setTextSize(30);

			bf.setText("BlockFire");

			bf.setTransformationMethod(null);

			if(GetLang == "fr_FR")bf.setText('Bloc de Feu');

			bf.setTypeface(VCAv9.font);

			bf.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			bf.setTextColor(Color.GREEN);

			bf.setGravity(Gravity.CENTER);

			bf.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Block.setShape(51, 0, 0, 0, 0.0001, 0.6, 0.0001);

					Block.defineBlock(51, "§l§o§aBlockFire", [["fire", 0]], 51, true, 0);

				}

			}}));

			menuLayout.addView(bf);

			var changm = new Button(ctx);

			changm.setTextSize(30);

			changm.setText("Change Game Mode");

			changm.setTransformationMethod(null);

			if(GetLang == "fr_FR")changm.setText('Changer le Mode de jeu');

			changm.setTypeface(VCAv9.font);

			changm.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			changm.setTextColor(Color.GREEN);

			changm.setGravity(Gravity.CENTER);

			changm.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					VCAv9.changeGameMode();

				}

			}}));

			menuLayout.addView(changm);

			var clear = new Button(ctx);

			clear.setTextSize(30);

			clear.setText("Clear");

			clear.setTransformationMethod(null);

			if(GetLang == "fr_FR")clear.setText('Claire');

			clear.setTypeface(VCAv9.font);

			clear.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			clear.setTextColor(Color.GREEN);

			clear.setGravity(Gravity.CENTER);

			clear.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.setRainLevel(0);

					Level.setLightningLevel(0);

				}

			}}));

			menuLayout.addView(clear);

			var day = new Button(ctx);

			day.setTextSize(30);

			day.setText("Day");

			day.setTransformationMethod(null);

			if(GetLang == "fr_FR")day.setText('Jour');

			day.setTypeface(VCAv9.font);

			day.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			day.setTextColor(Color.GREEN);

			day.setGravity(Gravity.CENTER);

			day.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.setTime(200);

				}

			}}));

			menuLayout.addView(day);

			var fi = new Button(ctx);

			fi.setTextSize(30);

			fi.setText("FastIce");

			fi.setTransformationMethod(null);

			if(GetLang == "fr_FR")fi.setText('Glace Rapide');

			fi.setTypeface(VCAv9.font);

			fi.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			fi.setTextColor(Color.GREEN);

			fi.setGravity(Gravity.CENTER);

			fi.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Block.setShape(79, 0, 0, 0, 1, 1, 1);

					Block.setShape(174, 0, 0, 0, 1, 1, 1);

					Block.defineBlock(79, "§l§o§aFastIce", [["ice", 0]], 79, false, 4);

					Block.defineBlock(174, "§l§o§aFastIce", [["ice", 0]], 174, false, 4);

				}

			}}));

			menuLayout.addView(fi);

			var fss = new Button(ctx);

			fss.setTextSize(30);

			fss.setText("FastSoulSand");

			fss.setTransformationMethod(null);

			if(GetLang == "fr_FR")fss.setText('Sable des Âmes Rapide');

			fss.setTypeface(VCAv9.font);

			fss.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			fss.setTextColor(Color.GREEN);

			fss.setGravity(Gravity.CENTER);

			fss.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Block.setShape(88, 0, 0, 0, 1, 1, 1);

					Block.defineBlock(88, "§l§o§aFastSoulSand", [["soul_sand", 0]], 88, false, 4);

				}

			}}));

			menuLayout.addView(fss);

			var infect = new Button(ctx);

			infect.setTextSize(30);

			infect.setText("Infect God Mode [Mobs]");

			infect.setTransformationMethod(null);

			if(GetLang == "fr_FR")infect.setText('Infecter le God Mode [Animaux]');

			infect.setTypeface(VCAv9.font);

			infect.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			infect.setTextColor(Color.GREEN);

			infect.setGravity(Gravity.CENTER);

			infect.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

				  if(!infectgm){

					infectgm = true;

				}

			}}));

			menuLayout.addView(infect);

			var night = new Button(ctx);

			night.setTextSize(30);

			night.setText("Night");

			night.setTransformationMethod(null);

			if(GetLang == "fr_FR")night.setText('Nuit');

			night.setTypeface(VCAv9.font);

			night.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			night.setTextColor(Color.GREEN);

			night.setGravity(Gravity.CENTER);

			night.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.setTime(14000);

				}

			}}));

			menuLayout.addView(night);

			var nw = new Button(ctx);

			nw.setTextSize(30);

			nw.setText("NoWeb");

			nw.setTransformationMethod(null);

			if(GetLang == "fr_FR")nw.setText("Pas de Toile d'Araignée");

			nw.setTypeface(VCAv9.font);

			nw.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			nw.setTextColor(Color.GREEN);

			nw.setGravity(Gravity.CENTER);

			nw.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Block.setShape(30, 0, 0, 0, 0.0001, 0.6, 0.0001);

					Block.defineBlock(30, "§l§o§aNoWeb", [["web", 0]], 30, true, 0);

				}

			}}));

			menuLayout.addView(nw);

			var rs = new Button(ctx);

			rs.setTextSize(30);

			rs.setText("Rain | Snow");

			rs.setTransformationMethod(null);

			if(GetLang == "fr_FR")rs.setText('Neige | Pluie');

			rs.setTypeface(VCAv9.font);

			rs.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			rs.setTextColor(Color.GREEN);

			rs.setGravity(Gravity.CENTER);

			rs.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.setRainLevel(1);

				}

			}}));

			menuLayout.addView(rs);

			var sl = new Button(ctx);

			sl.setTextSize(30);

			sl.setText("SolidLiquid");

			sl.setTransformationMethod(null);

			if(GetLang == "fr_FR")sl.setText('Liquide Solide');

			sl.setTypeface(VCAv9.font);

			sl.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			sl.setTextColor(Color.GREEN);

			sl.setGravity(Gravity.CENTER);

			sl.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Block.setShape(8, 0, 0, 0, 1, 0.4, 1);

					Block.setShape(9, 0, 0, 0, 1, 0.4, 1);

					Block.setShape(10, 0, 0, 0, 1, 1, 1);

					Block.setShape(11, 0, 0, 0, 1, 1, 1);

					Block.defineBlock(8, "§l§o§aSolidLiquid", [["still_water", 0]], 8, false, 4);

					Block.defineBlock(9, "§l§o§aSolidLiquid", [["still_water", 0]], 9, false, 4);

					Block.defineBlock(10, "§l§o§aSolidLiquid", [["still_lava", 0]], 10, false, 4);

					Block.defineBlock(11, "§l§o§aSolidLiquid", [["still_lava", 0]], 11, false, 4);

				}

			}}));

			menuLayout.addView(sl);

			var spawna = new Button(ctx);

			spawna.setTextSize(30);

			spawna.setText("Spawn Aliens");

			spawna.setTransformationMethod(null);

			if(GetLang == "fr_FR")spawna.setText('Apparaître des Aliens');

			spawna.setTypeface(VCAv9.font);

			spawna.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			spawna.setTextColor(Color.GREEN);

			spawna.setGravity(Gravity.CENTER);

			spawna.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11, "mob/char.png");

					Entity.setRenderType(Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11, "mob/char.png"), 3);

				}

			}}));

			menuLayout.addView(spawna);

			var spawngs = new Button(ctx);

			spawngs.setTextSize(30);

			spawngs.setText("Spawn Growing Star");

			spawngs.setTransformationMethod(null);

			if(GetLang == "fr_FR")spawngs.setText('Apparaître une Étoile Croissante');

			spawngs.setTypeface(VCAv9.font);

			spawngs.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			spawngs.setTextColor(Color.GREEN);

			spawngs.setGravity(Gravity.CENTER);

			spawngs.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.addParticle(ParticleType.crit, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

				}

			}));

			menuLayout.addView(spawngs);

			var spawnh = new Button(ctx);

			spawnh.setTextSize(30);

			spawnh.setText("Spawn House");

			spawnh.setTransformationMethod(null);

			if(GetLang == "fr_FR")spawnh.setText('Apparaître une Maison');

			spawnh.setTypeface(VCAv9.font);

			spawnh.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			spawnh.setTextColor(Color.GREEN);

			spawnh.setGravity(Gravity.CENTER);

			spawnh.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					spawnHouse();

				}

			}}));

			menuLayout.addView(spawnh);

			var spawnn = new Button(ctx);

			spawnn.setTextSize(30);

			spawnn.setText("Spawn Nether");

			spawnn.setTransformationMethod(null);

			if(GetLang == "fr_FR")spawnn.setText('Apparaître un Nether');

			spawnn.setTypeface(VCAv9.font);

			spawnn.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			spawnn.setTextColor(Color.GREEN);

			spawnn.setGravity(Gravity.CENTER);

			spawnn.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					spawnNether();

				}

			}}));

			menuLayout.addView(spawnn);

			var spectator = new Button(ctx);

			spectator.setTextSize(30);

			spectator.setText("Spectator");

			spectator.setTransformationMethod(null);

			if(GetLang == "fr_FR")spectator.setText('Spectateur');

			spectator.setTypeface(VCAv9.font);

			spectator.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			spectator.setTextColor(Color.GREEN);

			spectator.setGravity(Gravity.CENTER);

			spectator.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.setGameMode(3);

				}

			}}));

			menuLayout.addView(spectator);

			var storm = new Button(ctx);

			storm.setTextSize(30);

			storm.setText("Storm");

			storm.setTransformationMethod(null);

			if(GetLang == "fr_FR")storm.setText('Orage');

			storm.setTypeface(VCAv9.font);

			storm.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			storm.setTextColor(Color.GREEN);

			storm.setGravity(Gravity.CENTER);

			storm.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					if(VCAv9.playerIsInGame){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					Level.setLightningLevel(1);

				}

			}}));

			menuLayout.addView(storm);

			var tif = new Button(ctx);

			tif.setTextSize(30);

			tif.setText("Teleport in Front");

			tif.setTransformationMethod(null);

			if(GetLang == "fr_FR")tif.setText('Se Téléporter en Avant');

			tif.setTypeface(VCAv9.font);

			tif.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			tif.setTextColor(Color.GREEN);

			tif.setGravity(Gravity.CENTER);

			tif.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					var hit = getYaw() + 90;

					var hitY = getPitch() - 180;

					x = Math.cos(hit * (Math.PI / 180));

					y = Math.sin(hitY * (Math.PI / 180));

					z = Math.sin(hit * (Math.PI / 180));

					setVelX(Player.getEntity(), x * 1);

					setVelY(Player.getEntity(), y * 1);

					setVelZ(Player.getEntity(), z * 1);

				}

			}));

			menuLayout.addView(tif);

			var ttld = new Button(ctx);

			ttld.setTextSize(30);

			ttld.setText("Teleport to Last Death");

			ttld.setTransformationMethod(null);

			if(GetLang == "fr_FR")ttld.setText('Se Téléporter au Dernier Décès');

			ttld.setTypeface(VCAv9.font);

			ttld.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			ttld.setTextColor(Color.GREEN);

			ttld.setGravity(Gravity.CENTER);

			ttld.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					ppx = ModPE.readData("x_pD_" + Level.getWorldDir());

					ppy = ModPE.readData("y_pD_" + Level.getWorldDir());

					ppz = ModPE.readData("z_pD_" + Level.getWorldDir());

					pDOpen();

				}

			}));

			menuLayout.addView(ttld);

			menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());

			menu.setAnimationStyle(android.R.style.Animation_Dialog);

			menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

			menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);

			}catch(error){

				Toast.makeText(ctx, error, 1).show();

			}

	}}));

}

function mainMenu1(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var menuLayout = new LinearLayout(ctx);

			var menuScroll = new ScrollView(ctx);

			var menuLayout1 = new LinearLayout(ctx);

			menuLayout.setOrientation(1);

			menuLayout1.setOrientation(1);

			menuScroll.addView(menuLayout);

			menuLayout1.addView(menuScroll);

			var rootextras = new TextView(ctx);

			rootextras.setTextSize(24);

			rootextras.setText(" /Extras");

			rootextras.setTypeface(VCAv9.font);

			rootextras.setTextColor(Color.GREEN);

			menuLayout.addView(rootextras);

			var progBar2 = new ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);

			progBar2.setMax(100);

			progBar2.setIndeterminate(true);

			progBar2.setProgress(100);

			menuLayout.addView(progBar2);

			var change = new Button(ctx);

			change.setTextSize(30);

			change.setText("Changelog");

			change.setTransformationMethod(null);

			if(GetLang == "fr_FR")change.setText('Changement');

			change.setTypeface(VCAv9.font);

			change.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			change.setTextColor(Color.GREEN);

			change.setGravity(Gravity.CENTER);

			change.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					mainMenu2();

					exit2();

					exitUI1.dismiss();

					menu1.dismiss();

				}

			}));

			menuLayout.addView(change);

			var various = new Button(ctx);

			various.setTextSize(30);

			various.setText("Various");

			various.setTransformationMethod(null);

			if(GetLang == "fr_FR")various.setText('Divers');

			various.setTypeface(VCAv9.font);

			various.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			various.setTextColor(Color.GREEN);

			various.setGravity(Gravity.CENTER);

			various.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					mainMenu3();

					exit3();

					exitUI1.dismiss();

					menu1.dismiss();

				}

			}));

			menuLayout.addView(various);

			var info = new Button(ctx);

			info.setTextSize(30);

			info.setText("Informations");

			info.setTransformationMethod(null);

			info.setTypeface(VCAv9.font);

			info.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			info.setTextColor(Color.GREEN);

			info.setGravity(Gravity.CENTER);

			info.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					mainMenu4();

					exit4();

					exitUI1.dismiss();

					menu1.dismiss();

				}

			}));

			menuLayout.addView(info);

			menu1 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());

			menu1.setAnimationStyle(android.R.style.Animation_Dialog);

			menu1.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

			menu1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);

			}catch(error){

				Toast.makeText(ctx, error, 1).show();

			}

	}}));

}

function mainMenu2(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var menuLayout = new LinearLayout(ctx);

			var menuScroll = new ScrollView(ctx);

			var menuLayout1 = new LinearLayout(ctx);

			menuLayout.setOrientation(1);

			menuLayout1.setOrientation(1);

			menuScroll.addView(menuLayout);

			menuLayout1.addView(menuScroll);

			var rootextraschangelog = new TextView(ctx);

			rootextraschangelog.setTextSize(24);

			rootextraschangelog.setText(" /Extras/Changelog");

			if(GetLang == "fr_FR")rootextraschangelog.setText(" /Extras/Changement");

			rootextraschangelog.setTypeface(VCAv9.font);

			rootextraschangelog.setTextColor(Color.GREEN);

			menuLayout.addView(rootextraschangelog);

			var progBar4 = new ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);

			progBar4.setMax(100);

			progBar4.setIndeterminate(true);

			progBar4.setProgress(100);

			menuLayout.addView(progBar4);

			var changelog1 = new TextView(ctx);

			changelog1.setTextSize(44);

			changelog1.setText("Adds : Change Client ID");

			if(GetLang == "fr_FR")changelog1.setText("Ajoute : Changer l'ID du Client");

			changelog1.setTypeface(VCAv9.font);

			changelog1.setTextColor(Color.GREEN);

			changelog1.setGravity(Gravity.CENTER);

			menuLayout.addView(changelog1);

			menu2 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());

			menu2.setAnimationStyle(android.R.style.Animation_Dialog);

			menu2.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

			menu2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);

			}catch(error){

				Toast.makeText(ctx, error, 1).show();

			}

	}}));

}

function mainMenu3(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var menuLayout = new LinearLayout(ctx);

			var menuScroll = new ScrollView(ctx);

			var menuLayout1 = new LinearLayout(ctx);

			menuLayout.setOrientation(1);

			menuLayout1.setOrientation(1);

			menuScroll.addView(menuLayout);

			menuLayout1.addView(menuScroll);

			var rootextrasvarious = new TextView(ctx);

			rootextrasvarious.setTextSize(24);

			rootextrasvarious.setText(" /Extras/Various");

			if(GetLang == "fr_FR")rootextrasvarious.setText(" /Extras/Divers");

			rootextrasvarious.setTypeface(VCAv9.font);

			rootextrasvarious.setTextColor(Color.GREEN);

			menuLayout.addView(rootextrasvarious);

			var progBar6 = new ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);

			progBar6.setMax(100);

			progBar6.setIndeterminate(true);

			progBar6.setProgress(100);

			menuLayout.addView(progBar6);

			hi = new Switch(ctx);

			hi.setText("-HealthITags[+ Players]");

			if(GetLang == "fr_FR")hi.setText('-Indicateur de Santé [+ Joueurs]');

			hi.setTypeface(VCAv9.font);

			hi.setTextColor(Color.RED);

			hi.setChecked(tagsch);

			hi.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!tagsch){

						tagsch = true;

						hi.setTextColor(Color.GREEN);

						health = true;

					}else{

						tagsch = false;

						hi.setTextColor(Color.RED);

						health = false;

					}

					hi.setChecked(tagsch);

				}

			}));

			menuLayout.addView(hi);

			if(tagsch) {

				hi.setTextColor(Color.GREEN);

			}

			skin = new Switch(ctx);

			skin.setText("-3D Player");

			if(GetLang == "fr_FR")skin.setText('-Joueur 3D');

			skin.setTypeface(VCAv9.font);

			skin.setTextColor(Color.RED);

			skin.setChecked(skinch);

			skin.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!skinch){

						skinch = true;

						skin.setTextColor(Color.GREEN);

						Entity.setRenderType(getPlayerEnt(), moddedCharRenderType.renderType);

						Entity.setMobSkin(Player.getEntity(), "mob/char.png");

					}else{

						skinch = false;

						skin.setTextColor(Color.RED);

						Entity.setRenderType(Player.getEntity(), 3);

						Entity.setMobSkin(Player.getEntity(), "mob/char.png");

					}

					skin.setChecked(skinch);

				}

			}));

			menuLayout.addView(skin);

			if(skinch) {

				skin.setTextColor(Color.GREEN);

			}

			tc = new Switch(ctx);

			tc.setText("-Tree Chopper");

			if(GetLang == "fr_FR")tc.setText('-Chopper les Arbres');

			tc.setTypeface(VCAv9.font);

			tc.setTextColor(Color.RED);

			tc.setChecked(tcch);

			tc.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!tcch){

						tcch = true;

						tc.setTextColor(Color.GREEN);

						treechopper = true;

					}else{

						tcch = false;

						tc.setTextColor(Color.RED);

						treechopper = false;

					}

					tc.setChecked(tcch);

				}

			}));

			menuLayout.addView(tc);

			if(tcch) {

				tc.setTextColor(Color.GREEN);

			}

			map = new Switch(ctx);

			map.setText("-Mini Map");

			if(GetLang == "fr_FR")map.setText('-Mini Carte');

			map.setTypeface(VCAv9.font);

			map.setTextColor(Color.RED);

			map.setChecked(minich);

			map.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!minich){

						minich = true;

						map.setTextColor(Color.GREEN);

					}else{

						minich = false;

						map.setTextColor(Color.RED);

					}

					map.setChecked(minich);

				}

			}));

			menuLayout.addView(map);

			if(minich) {

				map.setTextColor(Color.GREEN);

			}

			mb = new Switch(ctx);

			mb.setText("-Mob Battles");

			if(GetLang == "fr_FR")mb.setText("-Batailles d'Animaux");

			mb.setTypeface(VCAv9.font);

			mb.setTextColor(Color.RED);

			mb.setChecked(mbch);

			mb.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!mbch){

						mbch = true;

						mb.setTextColor(Color.GREEN);

						mobbattles = true;

					}else{

						mbch = false;

						mb.setTextColor(Color.RED);

						mobbattles = false;

					}

					mb.setChecked(mbch);

				}

			}));

			menuLayout.addView(mb);

			if(mbch) {

				mb.setTextColor(Color.GREEN);

			}

			uidebug = new Switch(ctx);

			uidebug.setText("-UI Debug");

			if(GetLang == "fr_FR")uidebug.setText('-UI de Développeur');

			uidebug.setTypeface(VCAv9.font);

			uidebug.setTextColor(Color.RED);

			uidebug.setChecked(uidebugch);

			uidebug.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!uidebugch){

						uidebugch = true;

						uidebug.setTextColor(Color.GREEN);

						ModPE.setUiRenderDebug(true);

					}else{

						uidebugch = false;

						uidebug.setTextColor(Color.RED);

						ModPE.setUiRenderDebug(false);

					}

					uidebug.setChecked(uidebugch);

				}

			}));

			menuLayout.addView(uidebug);

			if(uidebugch) {

				uidebug.setTextColor(Color.GREEN);

			}

			back = new Switch(ctx);

			back.setText("-Custom Background");

			if(GetLang == "fr_FR")back.setText('-Background Personnalisé');

			back.setTypeface(VCAv9.font);

			back.setTextColor(Color.RED);

			back.setChecked(backch);

			back.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({

				onCheckedChanged: function(){

						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

					if(!backch){

						backch = true;

						back.setTextColor(Color.GREEN);

						backgroundMenu();

						menu3.dismiss();

						exitUI3.dismiss();

						mainMenu3();

						exit3();

					}else{

						backch = false;

						back.setTextColor(Color.RED);

						background.dismiss();

					}

					back.setChecked(backch);

				}

			}));

			menuLayout.addView(back);

			if(backch) {

				back.setTextColor(Color.GREEN);

			}

			var change = new Button(ctx);

			change.setTextSize(30);

			change.setText("Change Client ID");

			change.setTransformationMethod(null);

			if(GetLang == "fr_FR")change.setText("Changer l'ID du Client");

			change.setTypeface(VCAv9.font);

			change.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			change.setTextColor(Color.GREEN);

			change.setGravity(Gravity.CENTER);

			change.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					for(var cid = 0; cid < 4; cid++){

					if(cid == 3)unban();

				}

			}}));

			menuLayout.addView(change);

			var check = new Button(ctx);

			check.setTextSize(30);

			check.setText("Check Version");

			check.setTransformationMethod(null);

			if(GetLang == "fr_FR")check.setText('Vérifier la Version');

			check.setTypeface(VCAv9.font);

			check.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			check.setTextColor(Color.GREEN);

			check.setGravity(Gravity.CENTER);

			check.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					checkVersion();

				}

			}));

			menuLayout.addView(check);

			var disco = new Button(ctx);

			disco.setTextSize(30);

			disco.setText("Disco");

			disco.setTransformationMethod(null);

			if(GetLang == "fr_FR")disco.setText('Discothèque');

			disco.setTypeface(VCAv9.font);

			disco.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			disco.setTextColor(Color.GREEN);

			disco.setGravity(Gravity.CENTER);

			disco.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					p1();

				}

			}));

			menuLayout.addView(disco);

			var start = new Button(ctx);

			start.setTextSize(30);

			start.setText("HyperTunnel");

			start.setTransformationMethod(null);

			start.setTypeface(VCAv9.font);

			start.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			start.setTextColor(Color.GREEN);

			start.setGravity(Gravity.CENTER);

			start.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					generateGame();

					countDown = 1;

				}

			}));

			menuLayout.addView(start);

			var music = new Button(ctx);

			music.setTextSize(30);

			music.setText("Music Player");

			music.setTransformationMethod(null);

			if(GetLang == "fr_FR")music.setText('Lecteur de Musique');

			music.setTypeface(VCAv9.font);

			music.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			music.setTextColor(Color.GREEN);

			music.setGravity(Gravity.CENTER);

			music.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

				if(mp != null){

					mp.stop();

					mp = null;

				}

					VCAv9.resetMusic();

					VCAv9.playMusic();

				}

			}));

			menuLayout.addView(music);

			var reset = new Button(ctx);

			reset.setTextSize(30);

			reset.setText("Reset All");

			reset.setTransformationMethod(null);

			if(GetLang == "fr_FR")reset.setText('Tout Réinitialiser');

			reset.setTypeface(VCAv9.font);

			reset.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			reset.setTextColor(Color.GREEN);

			reset.setGravity(Gravity.CENTER);

			reset.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

				if(mp != null){

					mp.stop();

					mp = null;

				}

					VCAv9.resetMusic();

					resetGame();

				}

			}));

			menuLayout.addView(reset);

			var resett = new Button(ctx);

			resett.setTextSize(30);

			resett.setText("Reset Textures");

			resett.setTransformationMethod(null);

			if(GetLang == "fr_FR")resett.setText('Réinitialiser les Textures');

			resett.setTypeface(VCAv9.font);

			resett.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			resett.setTextColor(Color.GREEN);

			resett.setGravity(Gravity.CENTER);

			resett.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 1, 1);

					ModPE.resetImages();

				}

			}));

			menuLayout.addView(resett);

			menu3 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());

			menu3.setAnimationStyle(android.R.style.Animation_Dialog);

			menu3.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

			menu3.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);

			}catch(error){

				Toast.makeText(ctx, error, 1).show();

			}

	}}));

}

function mainMenu4(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var menuLayout = new LinearLayout(ctx);

			var menuScroll = new ScrollView(ctx);

			var menuLayout1 = new LinearLayout(ctx);

			menuLayout.setOrientation(1);

			menuLayout1.setOrientation(1);

			menuScroll.addView(menuLayout);

			menuLayout1.addView(menuScroll);

			var rootextrasinformations = new TextView(ctx);

			rootextrasinformations.setTextSize(24);

			rootextrasinformations.setText(" /Extras/Informations");

			rootextrasinformations.setTypeface(VCAv9.font);

			rootextrasinformations.setTextColor(Color.GREEN);

			menuLayout.addView(rootextrasinformations);

			var progBar8 = new ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);

			progBar8.setMax(100);

			progBar8.setIndeterminate(true);

			progBar8.setProgress(100);

			menuLayout.addView(progBar8);

			var dev = new TextView(ctx);

			dev.setTextSize(44);

			dev.setText("Developers :");

			if(GetLang == "fr_FR")dev.setText('Développeurs :');

			dev.setTypeface(VCAv9.font);

			dev.setTextColor(Color.GREEN);

			dev.setGravity(Gravity.CENTER);

			menuLayout.addView(dev);

			var infos = new TextView(ctx);

			infos.setTextSize(44);

			infos.setText("Bases made by KillerBLS");

			if(GetLang == "fr_FR")infos.setText('Bases fait par KillerBLS');

			infos.setTypeface(VCAv9.font);

			infos.setTextColor(Color.GREEN);

			infos.setGravity(Gravity.CENTER);

			menuLayout.addView(infos);

			var infos1 = new TextView(ctx);

			infos1.setTextSize(44);

			infos1.setText("Remains made by RJxMoDz");

			if(GetLang == "fr_FR")infos1.setText('Restes fait par RJxMoDz');

			infos1.setTypeface(VCAv9.font);

			infos1.setTextColor(Color.GREEN);

			infos1.setGravity(Gravity.CENTER);

			menuLayout.addView(infos1);

			var infos2 = new TextView(ctx);

			infos2.setTextSize(44);

			infos2.setText("Thanks AJ170, ArceusMatt, FirePro9978, Flubberlutsch, Godsoft029, MxGoldo, MyNameIsTriXz, peacestorm, VeroXCode and wilco375 for things");

			if(GetLang == "fr_FR")infos2.setText('Merci AJ170, ArceusMatt, FirePro9978, Flubberlutsch, Godsoft029, MxGoldo, MyNameIsTriXz, peacestorm, VeroXCode et wilco375 pour des choses');

			infos2.setTypeface(VCAv9.font);

			infos2.setTextColor(Color.GREEN);

			infos2.setGravity(Gravity.CENTER);

			menuLayout.addView(infos2);

			var mod = new TextView(ctx);

			mod.setTextSize(44);

			mod.setText("Mods Pre-Activated :");

			if(GetLang == "fr_FR")mod.setText('Mods Pré-Activé :');

			mod.setTypeface(VCAv9.font);

			mod.setTextColor(Color.GREEN);

			mod.setGravity(Gravity.CENTER);

			menuLayout.addView(mod);

			var infos3 = new TextView(ctx);

			infos3.setTextSize(44);

			infos3.setText("Bypass and Textures");

			if(GetLang == "fr_FR")infos3.setText('Bypass et Textures');

			infos3.setTypeface(VCAv9.font);

			infos3.setTextColor(Color.GREEN);

			infos3.setGravity(Gravity.CENTER);

			menuLayout.addView(infos3);

			var advanced = TextView(ctx);

			advanced.setTextSize(44);

			advanced.setText("Advanced :");

			if(GetLang == "fr_FR")advanced.setText('Avancé :');

			advanced.setTypeface(VCAv9.font);

			advanced.setTextColor(Color.GREEN);

			advanced.setGravity(Gravity.CENTER);

			menuLayout.addView(advanced);

			var infos4 = new TextView(ctx);

			infos4.setTextSize(44);

			infos4.setText("Android Version : " + ModPE.getAndroidVersion());

			if(GetLang == "fr_FR")infos4.setText("Version d'Android : " + ModPE.getAndroidVersion());

			infos4.setTypeface(VCAv9.font);

			infos4.setTextColor(Color.GREEN);

			infos4.setGravity(Gravity.CENTER);

			menuLayout.addView(infos4);

			var infos5 = new TextView(ctx);

			infos5.setTextSize(44);

			infos5.setText("Client ID : " + ModPE.getClientId());

			if(GetLang == "fr_FR")infos5.setText('ID du Client : ' + ModPE.getClientId());

			infos5.setTypeface(VCAv9.font);

			infos5.setTextColor(Color.GREEN);

			infos5.setGravity(Gravity.CENTER);

			menuLayout.addView(infos5);

			var infos6 = new TextView(ctx);

			infos6.setTextSize(44);

			infos6.setText("Device Name : " + VCAv9.getDeviceName());

			if(GetLang == "fr_FR")infos6.setText('Nom du Dispositif : ' + VCAv9.getDeviceName());

			infos6.setTypeface(VCAv9.font);

			infos6.setTextColor(Color.GREEN);

			infos6.setGravity(Gravity.CENTER);

			menuLayout.addView(infos6);

			var infos7 = new TextView(ctx);

			infos7.setTextSize(44);

			infos7.setText("Minecraft Version : " + ModPE.getMinecraftVersion());

			if(GetLang == "fr_FR")infos7.setText('Version de Minecraft : ' + ModPE.getMinecraftVersion());

			infos7.setTypeface(VCAv9.font);

			infos7.setTextColor(Color.GREEN);

			infos7.setGravity(Gravity.CENTER);

			menuLayout.addView(infos7);

			var infos8 = new TextView(ctx);

			infos8.setTextSize(44);

			infos8.setText("User Name : " + ModPE.getPlayerName());

			if(GetLang == "fr_FR")infos8.setText("Nom d'Utilisateur : " + ModPE.getPlayerName());

			infos8.setTypeface(VCAv9.font);

			infos8.setTextColor(Color.GREEN);

			infos8.setGravity(Gravity.CENTER);

			menuLayout.addView(infos8);

			menu4 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());

			menu4.setAnimationStyle(android.R.style.Animation_Dialog);

			menu4.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

			menu4.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);

			}catch(error){

				Toast.makeText(ctx, error, 1).show();

			}

	}}));

}

function exit(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var xLayout = new LinearLayout(ctx);

			var xButton = new Button(ctx);

			xButton.setTextSize(20);

			xButton.setText('X');

			xButton.setTransformationMethod(null);

			xButton.setTypeface(VCAv9.font);

			xButton.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			xButton.setTextColor(Color.GREEN);

			xButton.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.chestclosed", 1, 1);

					if(backch == true){

					background.dismiss();

					}

					menu.dismiss();

					exitUI.dismiss();

					starter();

					if(minich == true){

					mapWindow.show();

				}

			}}));

		xButton.setOnLongClickListener(new android.view.View.OnLongClickListener(){

		  onLongClick: function(v, t){

			pressed = true;

				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);

			return true;

		  }

		});

		xButton.setOnTouchListener(new android.view.View.OnTouchListener(){

		  onTouch :function(v, e){

			if(!pressed){

			  mX = e.getX();

			  mY = e.getY();

			}

			if(pressed){

			  var action = e.getAction();

			if(action == 2){

			  var X = parseInt(e.getX()-mX)*-1/10;

			  var Y = parseInt(e.getY()-mY)*-1/10;

			  buttonX += X;

			  buttonY += Y;

			  exitUI.update(parseInt(buttonX), parseInt(buttonY), -1, -1);

			}

			if(action == 1)

			  pressed = false;

			}

			  return false;

		  }

		});

			xLayout.addView(xButton);

			exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));

			exitUI.setAnimationStyle(android.R.style.Animation_Dialog);

			exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

			exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, buttonX, buttonY);

			}catch(exception){

				Toast.makeText(ctx, exception, 1).show();

			}

	}}));

}

function exit1(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var xLayout = new LinearLayout(ctx);

			var xButton = new Button(ctx);

			xButton.setTextSize(20);

			xButton.setText('X');

			xButton.setTransformationMethod(null);

			xButton.setTypeface(VCAv9.font);

			xButton.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			xButton.setTextColor(Color.GREEN);

			xButton.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.bow", 1, 1);

					mainMenu();

					exit();

					exitUI1.dismiss();

					menu1.dismiss();

				}

			}));

		xButton.setOnLongClickListener(new android.view.View.OnLongClickListener(){

		  onLongClick: function(v, t){

			pressed = true;

				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);

			return true;

		  }

		});

		xButton.setOnTouchListener(new android.view.View.OnTouchListener(){

		  onTouch :function(v, e){

			if(!pressed){

			  mX = e.getX();

			  mY = e.getY();

			}

			if(pressed){

			  var action = e.getAction();

			if(action == 2){

			  var X = parseInt(e.getX()-mX)*-1/10;

			  var Y = parseInt(e.getY()-mY)*-1/10;

			  buttonX += X;

			  buttonY += Y;

			  exitUI1.update(parseInt(buttonX), parseInt(buttonY), -1, -1);

			}

			if(action == 1)

			  pressed = false;

			}

			  return false;

		  }

		});

			xLayout.addView(xButton);

			exitUI1 = new PopupWindow(xLayout, dip2px(40), dip2px(40));

			exitUI1.setAnimationStyle(android.R.style.Animation_Dialog);

			exitUI1.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

			exitUI1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, buttonX, buttonY);

			}catch(exception){

				Toast.makeText(ctx, exception, 1).show();

			}

	}}));

}

function exit2(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var xLayout = new LinearLayout(ctx);

			var xButton = new Button(ctx);

			xButton.setTextSize(20);

			xButton.setText('X');

			xButton.setTransformationMethod(null);

			xButton.setTypeface(VCAv9.font);

			xButton.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			xButton.setTextColor(Color.GREEN);

			xButton.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.bow", 1, 1);

					mainMenu1();

					exit1();

					exitUI2.dismiss();

					menu2.dismiss();

				}

			}));

		xButton.setOnLongClickListener(new android.view.View.OnLongClickListener(){

		  onLongClick: function(v, t){

			pressed = true;

				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);

			return true;

		  }

		});

		xButton.setOnTouchListener(new android.view.View.OnTouchListener(){

		  onTouch :function(v, e){

			if(!pressed){

			  mX = e.getX();

			  mY = e.getY();

			}

			if(pressed){

			  var action = e.getAction();

			if(action == 2){

			  var X = parseInt(e.getX()-mX)*-1/10;

			  var Y = parseInt(e.getY()-mY)*-1/10;

			  buttonX += X;

			  buttonY += Y;

			  exitUI2.update(parseInt(buttonX), parseInt(buttonY), -1, -1);

			}

			if(action == 1)

			  pressed = false;

			}

			  return false;

		  }

		});

			xLayout.addView(xButton);

			exitUI2 = new PopupWindow(xLayout, dip2px(40), dip2px(40));

			exitUI2.setAnimationStyle(android.R.style.Animation_Dialog);

			exitUI2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, buttonX, buttonY);

			}catch(exception){

				Toast.makeText(ctx, exception, 1).show();

			}

	}}));

}

function exit3(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var xLayout = new LinearLayout(ctx);

			var xButton = new Button(ctx);

			xButton.setTextSize(20);

			xButton.setText('X');

			xButton.setTransformationMethod(null);

			xButton.setTypeface(VCAv9.font);

			xButton.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			xButton.setTextColor(Color.GREEN);

			xButton.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.bow", 1, 1);

					mainMenu1();

					exit1();

					exitUI3.dismiss();

					menu3.dismiss();

				}

			}));

		xButton.setOnLongClickListener(new android.view.View.OnLongClickListener(){

		  onLongClick: function(v, t){

			pressed = true;

				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);

			return true;

		  }

		});

		xButton.setOnTouchListener(new android.view.View.OnTouchListener(){

		  onTouch :function(v, e){

			if(!pressed){

			  mX = e.getX();

			  mY = e.getY();

			}

			if(pressed){

			  var action = e.getAction();

			if(action == 2){

			  var X = parseInt(e.getX()-mX)*-1/10;

			  var Y = parseInt(e.getY()-mY)*-1/10;

			  buttonX += X;

			  buttonY += Y;

			  exitUI3.update(parseInt(buttonX), parseInt(buttonY), -1, -1);

			}

			if(action == 1)

			  pressed = false;

			}

			  return false;

		  }

		});

			xLayout.addView(xButton);

			exitUI3 = new PopupWindow(xLayout, dip2px(40), dip2px(40));

			exitUI3.setAnimationStyle(android.R.style.Animation_Dialog);

			exitUI3.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, buttonX, buttonY);

			}catch(exception){

				Toast.makeText(ctx, exception, 1).show();

			}

	}}));

}

function exit4(){

	ctx.runOnUiThread(new Runnable({ run: function(){

		try{

			var xLayout = new LinearLayout(ctx);

			var xButton = new Button(ctx);

			xButton.setTextSize(20);

			xButton.setText('X');

			xButton.setTransformationMethod(null);

			xButton.setTypeface(VCAv9.font);

			xButton.getBackground().setColorFilter(Color.TRANSPARENT, android.graphics.PorterDuff.Mode.MULTIPLY);

			xButton.setTextColor(Color.GREEN);

			xButton.setOnClickListener(new View.OnClickListener({

				onClick: function(viewarg){

					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.bow", 1, 1);

					mainMenu1();

					exit1();

					exitUI4.dismiss();

					menu4.dismiss();

				}

			}));

		xButton.setOnLongClickListener(new android.view.View.OnLongClickListener(){

		  onLongClick: function(v, t){

			pressed = true;

				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(100);

			return true;

		  }

		});

		xButton.setOnTouchListener(new android.view.View.OnTouchListener(){

		  onTouch :function(v, e){

			if(!pressed){

			  mX = e.getX();

			  mY = e.getY();

			}

			if(pressed){

			  var action = e.getAction();

			if(action == 2){

			  var X = parseInt(e.getX()-mX)*-1/10;

			  var Y = parseInt(e.getY()-mY)*-1/10;

			  buttonX += X;

			  buttonY += Y;

			  exitUI4.update(parseInt(buttonX), parseInt(buttonY), -1, -1);

			}

			if(action == 1)

			  pressed = false;

			}

			  return false;

		  }

		});

			xLayout.addView(xButton);

			exitUI4 = new PopupWindow(xLayout, dip2px(40), dip2px(40));

			exitUI4.setAnimationStyle(android.R.style.Animation_Dialog);

			exitUI4.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, buttonX, buttonY);

			}catch(exception){

				Toast.makeText(ctx, exception, 1).show();

			}

	}}));

}

function leaveGame(){

	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){

	VCAv9.playerIsInGame = false;

	VCAv9.playerIsInGame2 = false;

	mapWindow.hide();

	if(map_state){

	changeMapState();

	}

	pool.shutdownNow();

	startMapControl = true;

	X = undefined;

	entities = [];

	chests = [];

	if(GUI != null){

	GUI.dismiss();

	GUI = null;

	}

	if(background != null){

	background.dismiss();

	background = null;

	}

	if(exitUI != null){

	exitUI.dismiss();

	exitUI = null;

	}

	if(exitUI1 != null){

	exitUI1.dismiss();

	exitUI1 = null;

	}

	if(exitUI2 != null){

	exitUI2.dismiss();

	exitUI2 = null;

	}

	if(exitUI3 != null){

	exitUI3.dismiss();

	exitUI3 = null;

	}

	if(exitUI4 != null){

	exitUI4.dismiss();

	exitUI4 = null;

	}

	if(menu != null){

	menu.dismiss();

	menu = null;

	}

	if(menu1 != null){

	menu1.dismiss();

	menu1 = null;

	}

	if(menu2 != null){

	menu2.dismiss();

	menu2 = null;

	}

	if(menu3 != null){

	menu3.dismiss();

	menu3 = null;

	}

	if(menu4 != null){

	menu4.dismiss();

	menu4 = null;

	}

    }}));

}

function unban() {

	var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/clientId.txt/");

		var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/clientId.txt/";

			java.io.File(path).mkdirs();

			file.createNewFile();

			var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));

			var string = "";

			write.append((Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000));

			write.close();

}

function pDOpen() {

	Entity.setPosition(Player.getEntity(), ppx, ppy, ppz);

}

function modTick() {

randomAki = Math.floor((Math.random() * 5));

var locker = 0;

var x = getPlayerX();

 var y = getPlayerY();

 var z = getPlayerZ();

  var et = getPlayerEnt();

  var entity = Entity.getAll();

	if(health) {

		VCAv9.healthIndicator();

	}

	if(startMapControl) {

		startMapControl = false;

		createPool();

	}

	if(countDown>0) {

		if(countDown != 101) {

			countDown++;

		}

		else {

			startGame();

			countDown = 0;

		}

	}

	if(gameStarted == 1) {

		if(getPlayerX()>gameX+0.5) {

			if(getTile(gameX+6,gameY+1,gameZ-4) == 41) {

				setTile(gameX+6,gameY+1,gameZ-4,0);

				setTile(gameX+6,gameY+5,gameZ-4,41);

			}

		}

		else if(getPlayerX()<gameX+0.5) {

			if(getTile(gameX+6,gameY+5,gameZ-4) == 41) {

				setTile(gameX+6,gameY+1,gameZ-4,41);

				setTile(gameX+6,gameY+5,gameZ-4,0);

			}

		}

		Entity.setPosition(getPlayerEnt(),gameX+0.5,getPlayerY(),gameZ+0.5);

		Entity.setRot(getPlayerEnt(),270,-15);
		
		if(count >= 5) {

			updateGame();

			count = 0;

		} else if(count >= 4 && gameProgress>=100) {

			updateGame();

			count = 0;

		} else if(count >= 3 && gameProgress>=200) {

			updateGame();

			count = 0;

		} else if(count >= 2 && gameProgress>=300) {

			updateGame();

			count = 0;

		} else if(count >= 1 && gameProgress>=500) {

			updateGame();

			count = 0;

		} else count++;

	}

	if(aig > 0) {

		aig = aig - 1;

		for(ca=0; ca<=entity.length; ca++) {

		if(Player.isPlayer(entity[ca]) == false) {

		Entity.setVelY(entity[ca], 0.1);

			}

		}

	}

	if(infectgm) {

		for(ca=0; ca<=entity.length; ca++) {

		if(Player.isPlayer(entity[ca]) == false) {

		Entity.setHealth(entity[ca], 8000);

			}

		}

	}

	if(superspeedmine) {

		Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ());

	}

	if(place) {

		var x = Player.getPointedBlockX();

		var y = Player.getPointedBlockY();

		var z = Player.getPointedBlockZ();

		var side = Player.getPointedBlockSide();

		var blockId = Player.getCarriedItem();

		var blockData = Player.getCarriedItemData();

		if(getTile(x, y, z) != 0) {

			if(blockId <= 256) {

				setTile(x-(side==4?1:0)+(side==5?1:0),y-(side==0?1:0)+(side==1?1:0),z-(side==2?1:0)+(side==3?1:0), blockId, blockData);

			}

		}

	}

	if(supergodmode) {

		Player.setHealth(8000);

		Player.setHunger(8000);

	}

	if(autosuicide) {

		Player.setHealth(0);

	}

	if(freeze == true) {

		Entity.setImmobile(Player.getEntity(), true);

	}

	if(kaboom) {

		VCAv9.explosion(x, y, z, 4);

	}

	if(nuker == true) {

		VCAv9.tapNuker(x, y, z, 4);

	}

	if(allremove) {

		for(ca=0; ca<entity.length; ca++) {

		if(entity[ca]!=et && Player.isPlayer(entity[ca]) == false) {

		Entity.remove(entity[ca]);

			}

		}

	}

	if(stoptime) {

		if(locker>0) {

		locker = locker-1;

		} else {

		Level.setTime(locktime);

		locker = 20;

		}

	}

	if(noweather) {

		if(Level.getRainLevel() > 0) {

			Level.setRainLevel(0);

		}

		if(Level.getLightningLevel() > 0) {

			Level.setLightningLevel(0);

		}

	}

	if(arrowminigun) {

		var p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;

		var y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;

		var xx = Math.sin(p) * Math.cos(y);

		var yy = Math.sin(p) * Math.sin(y);

		var zz = Math.cos(p);

		var arrow = Level.spawnMob(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, 80);

		setVelX(arrow, xx);

		setVelY(arrow, zz);

		setVelZ(arrow, yy);

	}

	if(griefing) {

		Level.setTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), 11, 0);

	}

	if(leave) {

		if(Entity.getHealth(getPlayerEnt()) <= 8) {

			ModPE.leaveGame();

		}

	}

	if(lagging) {

		Level.addParticle(ParticleType.angryVillager, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 5);

		Level.addParticle(ParticleType.bubble, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.cloud, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.dripLava, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.dripWater, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.enchantmenttable, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.fallingDust, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.flame, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.happyVillager, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 50);

		Level.addParticle(ParticleType.heart, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 5);

		Level.addParticle(ParticleType.hugeexplosion, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.hugeexplosionSeed, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);

		Level.addParticle(ParticleType.ink, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.lava, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.mobFlame, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.note, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.portal, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.rainSplash, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.redstone, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 10);

		Level.addParticle(ParticleType.slime, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.smoke, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.snowballpoof, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.spell, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.splash, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.suspendedTown, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.terrain, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.waterWake, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.largeexplode, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.spell2, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

		Level.addParticle(ParticleType.spell3, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);

	}

	if(antivoid) {

		Math.round(getPlayerY());

		if(Math.round(getPlayerY()) == "-3") {

			setPosition(Player.getEntity(), getPlayerX(), 65, getPlayerZ() +5);

		}

	}

	if(jetpacked) {

		toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);

		var player = getPlayerEnt();

		setVelX(player, playerFlySpeed * playerDir[0]);

		setVelY(player, playerFlySpeed * playerDir[1]);

		setVelZ(player, playerFlySpeed * playerDir[2]);

	}

	if(switcher) {

		if(Player.getSelectedSlotId() != 7) {

			Player.setSelectedSlotId(Player.getSelectedSlotId() + 1);

		} else {

			Player.setSelectedSlotId(0);

		}

	}

	if(tpaura) {

	var mobs = Entity.getAll();

	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION && Entity.getHealth(mobs[i]) != 0) {

			var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());

			var victimPos = new Array(Entity.getX(mobs[i]), Entity.getY(mobs[i]), Entity.getZ(mobs[i]));

			var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);

			playerPos[0] += diffPos[0] * 2;

			playerPos[2] += diffPos[2] * 2;

					
			if(getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {

				Entity.setPosition(Player.getEntity(), playerPos[0], playerPos[1], playerPos[2]);

				}

			}

			break;

		}

	}

	if(alltps) {

		for(ca=0; ca<entity.length; ca++) {

		Entity.setPosition(entity[ca], x, y, z);

		}

	}

	if(nodownglide) {

		yCoord: 0;

		this.yCoord = getPlayerY();

		Entity.setVelY(getPlayerEnt(), -0.000000000001);

		Entity.setPosition(getPlayerEnt(), getPlayerX(), this.yCoord, getPlayerZ());

	}

	if(glider) {

		if(Entity.getVelY(getPlayerEnt()) <= 0 && Player.isFlying() == false) {

			setVelY(Player.getEntity(), - 0.07);

		}

	}

	if(speeded) {

		if(s==1) {

        Xpos = getPlayerX();

        Zpos = getPlayerZ();

        s = s + 1;

		}

		else if(s==3) {

        s = 1;

        Xdiff = getPlayerX()-Xpos;

        Zdiff = getPlayerZ()-Zpos;

        setVelX(getPlayerEnt(), Xdiff);

        setVelZ(getPlayerEnt(), Zdiff);

        Xdiff=0;

        Zdiff=0;

		}

		if(s!=1) {

			s = s + 1;

		}

	}

	if(teleporter && getTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ()) != 0) {

		VCAv9.teleporter(Player.getPointedBlockX(), Player.getPointedBlockY() + 3, Player.getPointedBlockZ());

	}

	if(aimbot) {

		var ent = getNearestEntity(7);

		if(ent != null) {

			crosshairAimAt(ent);

		}

	}

	if(antipotion) {

		Entity.removeAllEffects(getPlayerEnt());

	}

	if(highjumps) {

		if(!Player.isFlying()) {

			if(Entity.getVelY(Player.getEntity()) > 0.06) {

				Entity.setVelY(Player.getEntity(), 0.54);

				this.count++;

			}

			if(this.count == 1) {

				Entity.setVelY(Player.getEntity(), 0.48);

			}

			if(this.count == 2) {

				Entity.setVelY(Player.getEntity(), 0.42);

			}

			if(this.count == 3) {

				Entity.setVelY(Player.getEntity(), 0.36);

			}

			if(this.count == 4) {

				Entity.setVelY(Player.getEntity(), 0.31);

			}

			if(this.count == 5) {

				Entity.setVelY(Player.getEntity(), 0.26);

			}

			if(this.count == 6) {

				Entity.setVelY(Player.getEntity(), 0.22);

			}

			if(this.count == 7) {

				Entity.setVelY(Player.getEntity(), -0.078);

				this.count = 0;

			}

		if(Entity.getVelY(Player.getEntity()) <= -0.5 && !isFalling) {

			if(Level.getGameMode() == 0){

				Entity.addEffect(Player.getEntity(), MobEffect.jump, 999999, 254, false, false);

			isFalling = true;

			}

		}

		if(isFalling) {

			if(Level.getTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ())) > 0) {

				if(Entity.getVelY(Player.getEntity()) == VEL_Y_OFFSET) {

					isFalling = false;

						Entity.removeEffect(Player.getEntity(), MobEffect.jump);

					}

				}

			}

		}

	}

	if(freezeaura) {

	var mobs = Entity.getAll();

	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {

			Entity.setImmobile(mobs[i], true);

			}

		}

	}

	if(multiplier == 1){

		x = getPlayerX();

		y = getPlayerY();

		z = getPlayerZ();

	if(multiplier == 1){

		if(!(x-xSave == 0)){

			setVelX(getPlayerEnt(),(x-xSave))

			xSave = x

		}

		if(!(z-zSave==0)){

			setVelZ(getPlayerEnt(),(z-zSave))

			zSave = z

			}

		}

	}

	if(derps) {

		var player = getPlayerEnt();

		var y = Math.floor(Entity.getYaw(player));

		var p = Math.floor(Entity.getPitch(player));

		Entity.setRot(player, y +3, p);

	}

	if(follow) {

	var mobs = Entity.getAll();

	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

			if(x*x+y*y+z*z<=10*10 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {

				if(x*x+y*y+z*z>=2*2) {

					setVelX(getPlayerEnt(), x * 0.05);

					setVelZ(getPlayerEnt(), z * 0.05);

					setVelY(getPlayerEnt(), y * 0.05);

				}

				break;

			}

		}

	}

	if(droneplus) {

	var mobs = Entity.getAll();

	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

		mobYaw = getYaw(mobs[i]);

		if(Entity.getEntityTypeId(mobs[i]) == 63) {

			zahl = 0;

		}

		if(Entity.getEntityTypeId(mobs[i]) != 63) {

			zahl = 2;

		}

		if(x * x + y * y + z * z <= 4.5 * 4.5 && mobs[i] != getPlayerEnt()) {

			if(randomAki == 1) {

				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]) - 2.75, Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]));

				Entity.setRot(Player.getEntity(), 270, getPitch(Player.getEntity()));

			}

			if(randomAki == 2) {

				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]) + 2.75, Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]));

				Entity.setRot(Player.getEntity(), 90, getPitch(Player.getEntity()));

			}

			if(randomAki == 3) {

				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]), Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]) + 2.75);

				Entity.setRot(Player.getEntity(), 180, getPitch(Player.getEntity()));

			}

			if(randomAki == 4) {

				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]), Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]) - 2.75);

				Entity.setRot(Player.getEntity(), 0, getPitch(Player.getEntity()));

				}

			}

		}

	}

	if(autowalk) {

		toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);

		var player = getPlayerEnt();

		setVelX(player, playerWalkSpeed * playerDir[0]);

		if(Player.isFlying()) {

			setVelY(player, playerWalkSpeed * playerDir[1]);
	
		}

		setVelZ(player, playerWalkSpeed * playerDir[2]);

	}

	if(killaura) {

	var mobs = Entity.getAll();

	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {

			Entity.setHealth(mobs[i], 0);

			}

		}

	}

	if(burn) {

		var x = getPlayerX();

		var y = getPlayerY();

		var z = getPlayerZ();

		var blockOne = getTile(x, y, z);

		var blockTwo = getTile(x, y - 1, z);

		var blockThree = getTile(x, y - 2, z);

		setTile(x, y, z, 9);

		setTile(x, y - 1, z, 9);

		setTile(x, y - 2, z, 9);

		setTile(x, y, z, blockOne);

		setTile(x, y - 1, z, blockTwo);

		setTile(x, y - 2, z, blockThree);

		Entity.setFireTicks(getPlayerEnt(), 0);

	}

	if(fireaura) {

	var mobs = Entity.getAll();

	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {

			Entity.setFireTicks(mobs[i], 1000);

			}

		}

	}

	if(waterwalk) {

		if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11) {

			setVelY(getPlayerEnt(), 0);

		}

	}

	if(nowalls) {

		Entity.setCollisionSize(getPlayerEnt(),0,0);

		if(Level.getTile(Player.getX(),Player.getY(), Player.getZ())!=0 && Level.getTile(Player.getX(),Player.getY()-1, Player.getZ())!=0) {

			setVelY(getPlayerEnt(), 0.01);

		}

	}

	if(climbs) {

		if(getTile(Player.getX()+1, Player.getY(), Player.getZ())> 0) {

			setVelY(Player.getEntity(), 0.6);

		}

		if(getTile(Player.getX()-1, Player.getY(), Player.getZ())> 0) {

			setVelY(Player.getEntity(), 0.6);

		}

		if(getTile(Player.getX(), Player.getY(), Player.getZ()+1)> 0) {

			setVelY(Player.getEntity(), 0.6);

		}

		if(getTile(Player.getX(), Player.getY(), Player.getZ()-1)> 0) {

			setVelY(Player.getEntity(), 0.6);

		}

	}

	if(dolphin) {

		if(Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==8 || Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==9 || Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==10 || Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==11) {

			setVelY(getPlayerEnt(), 0.5);

		}

	}

	if(autojump) {

	var mobs = Entity.getAll();

	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

					var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());

					var victimPos = new Array(Entity.getX(mobs[i]), Entity.getY(mobs[i]), Entity.getZ(mobs[i]));

					var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);

					playerPos[0] += diffPos[0] * 2;

					playerPos[2] += diffPos[2] * 2;

					if(getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {

						Entity.setPosition(Player.getEntity(), playerPos[0], playerPos[1], playerPos[2]);

					}

				break;

		  }

	}

    if(checkForUpdate == false) {

        ctx.runOnUiThread(new java.lang.Runnable( {

            run: function() {

                try {

                    checkVersion();

                }

                catch(error) {

                    Toast.makeText(ctx, error, 1).show();

                }

            }

        }));

        checkForUpdate = true;

    }

}

function toDirectionalVector(vector, yaw, pitch) {

	vector[0] = Math.cos(yaw) * Math.cos(pitch);

	vector[1] = Math.sin(pitch);

	vector[2] = Math.sin(yaw) * Math.cos(pitch);

}

function attackHook(attacker, victim) {

	if(mobbattles) {

	if(victim && counting == 0) {

		preventDefault();

		victim1 = victim;

		counting++;

	}

	else if(victim && counting == 1) {

		preventDefault();

		victim2 = victim;

		Entity.setTarget(victim1, victim2);

		Entity.setTarget(victim2, victim1);

		counting = 0;

		}

	}

	if(supertapregen) {

		Entity.setHealth(victim, + 3);

		Player.setHealth(victim, 20);

		Player.setHunger(victim, 20);

	}

	if(tapremover) {

		if(getPlayerEnt() == attacker) {

			preventDefault();

			Entity.remove(victim);

		}

	}

	if(saddle) {

		rideAnimal(getPlayerEnt(), victim);

	}

	if(knockbacks) {

		var XVel;

		var ZVel;

		var x;

		var z;

		if(getYaw() < 0){

			var hit = getYaw()+90;

			for(var go=0; hit<0; go++)

			{

				hit+= 360;

			}

			x = Math.cos(hit*(Math.PI/180));

			z = Math.sin(hit*(Math.PI/180));

			setVelX(victim, x*3);

			setVelY(victim, 1);

			setVelZ(victim, z*3);

		}

		else if(getYaw() > 0 && getYaw() < 360)

		{

			var hit = getYaw()+90;

			XVel = Math.cos(hit*(Math.PI/180));

			ZVel= Math.sin(hit*(Math.PI/180));

			setVelX(victim, XVel*3);

			setVelY(victim, 1);

			setVelZ(victim, ZVel*3);

		}

		else if(getYaw() >= 360)

		{

			var hit = getYaw()+90;

			for(go=0; hit>=360; go++)

			{

				hit -= 360;

			}

			XVel = Math.cos(hit*(Math.PI/180));

			ZVel = Math.sin(hit*(Math.PI/180));

			setVelX(victim, XVel*3);

			setVelY(victim, 1);

			setVelZ(victim, ZVel*3);

        }

	  }

	if(sword) {

		VCAv9.autoSword(attacker, victim);

	}

	if(tpaura) {

		if(attacker == getPlayerEnt()) {

			var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());

			var victimPos = new Array(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim));

			var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);

			playerPos[0] += diffPos[0] * 2;

			playerPos[2] += diffPos[2] * 2;

			
			if(getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {

				Entity.setPosition(Player.getEntity(), playerPos[0], playerPos[1], playerPos[2]);

			}

		}

	}

	if(criticals) {

		Entity.setVelY(getPlayerEnt(), 0.64);

	}

	if(grapple) {

		if(attacker == Player.getEntity() && grapple && Entity.getHealth(victim) > 0) {

		setPosition(getPlayerEnt(), Entity.getX(victim), Entity.getY(victim)+1, Entity.getZ(victim));

		}

	}

	if(gamesd) {

		Entity.setHealth(victim, 1);

	}

}

function deathHook(v) {

	if(Player.getEntity(v)) {

		ModPE.saveData("x_pD_" + Level.getWorldDir(),Player.getX().toString());

		ModPE.saveData("y_pD_" + Level.getWorldDir(),Player.getY().toString());

		ModPE.saveData("z_pD_" + Level.getWorldDir(),Player.getZ().toString());

	}

}

function entityAddedHook(entity) {

   if(Entity.getEntityTypeId(entity) <= 63 && Entity.getEntityTypeId(entity) >= 10) {

        entities[entities.length] = entity;

   }

	if(bowaimbot) {

		if(Entity.getEntityTypeId(entity) == EntityType.ARROW) {

		VCAv9.bowAimbot(entity);

		}

	}

}

function entityHurtHook(attacker, victim, halfhearts) {

	if(victim == Player.getEntity() && antiknockbacks) {

		Entity.setImmobile(Player.getEntity(), true);

		ctx.runOnUiThread(new java.lang.Runnable({

			run: function() {

				new android.os.Handler().postDelayed(new java.lang.Runnable({

					run: function() {

						Entity.setImmobile(Player.getEntity(), false);

					}}), 50);

		}}));

	}

}

function serverMessageReceiveHook(str) {

	ctx.runOnUiThread(new java.lang.Runnable(){

		run: function(){

			if(texttotoast) {

				ModPE.showTipMessage(str);

		}

	}});

}

function getRandomColor() {

    var a = Object.keys(ChatColor);

        return ChatColor[a[Math.floor(Math.random()*(a.length+1))]]

}

function useItem(x, y, z, itemId, blockId, side) {

	if(treechopper) {

		if(itemId == axeIds[0] || itemId == axeIds[1] || itemId == axeIds[2] || itemId == axeIds[3] || itemId == axeIds[4]) {

			if(blockId == woodId) {

				Level.destroyBlock(x, y, z, true);

				for(var i = y+1;i < 128;i++) {

					if(getTile(x, i, z) == woodId) {

						Level.destroyBlock(x, i, z, true);

					} else {

						break;

					}

				}

			}

			preventDefault();

		}

	}

	if(antibreak) {

		preventDefault();

	}

	if(tapremover) {

		preventDefault();

		setTile(x, y, z, 0);

	}

	if(spawner) {

		Level.spawnMob(x, y + 1, z, EntityType.EXPERIENCE_ORB);

		Player.setLevel(+ 1000);

	}

	if(herobrine) {

		Level.spawnMob(x, y, z, EntityType.LIGHTNING_BOLT);

	}

	if(spammer) {

		clientMessage(getRandomColor() + "ＳＰＡＭ ！！！！ ＳＰＡＭ ！！！！ ＳＰＡＭ ！！！！ ＳＰＡＭ ！！！！");

	}

	if(nukers) {

		VCAv9.nuker(x, y, z, 9);

	}

	if(cbuilder) {

		VCAv9.tapExplosion(x, y, z, 9);

	}

	if(itemId == 259 && blockId == 46) {

		if(powerexplosions == true) {

			setTile(x, y, z, 0);

			preventDefault();

			explode(x, y, z, 30);

		}

	}

	if(criticals) {

		Entity.setVelY(getPlayerEnt(), 0.64);

	}

	if(grapple) {

		VCAv9.teleporter(x, y, z);

	}

}

function startDestroyBlock(){

	if(antibreak) {

		preventDefault();

	}

}

function destroyBlock(x, y, z, side){

    var data = Level.getData(x, y, z);

    var tile = Level.getTile(x, y, z);

	var blockId = getTile(x,y,z);

	if(blockId == goldId){

		var rnd = Math.floor(Math.random()*(10));

		if(rnd == 0 || rnd == 1){

			rnd = Math.floor(Math.random()*(5));

			Level.setTime(8280);

			if(rnd == 0){

				Level.spawnMob(x+4,y,z+4,33);

				Level.spawnMob(x-4,y,z+4,33);

				Level.spawnMob(x+4,y,z-4,33);

				Level.spawnMob(x-4,y,z-4,33);

			}else if(rnd == 1){

				Level.spawnMob(x+4,y,z+4,32);

				Level.spawnMob(x-4,y,z+4,32);

				Level.spawnMob(x+4,y,z-4,32);

				Level.spawnMob(x-4,y,z-4,32);

			}else if(rnd == 2){

				Level.spawnMob(x+4,y,z+4,34);

				Level.spawnMob(x-4,y,z+4,34);

				Level.spawnMob(x+4,y,z-4,34);

				Level.spawnMob(x-4,y,z-4,34);

			}else if(rnd == 3){

				Level.spawnMob(x+4,y,z+4,35);

				Level.spawnMob(x-4,y,z+4,35);

				Level.spawnMob(x+4,y,z-4,35);

				Level.spawnMob(x-4,y,z-4,35);

			}else{

				Level.spawnMob(x+4,y,z+4,33);

				Level.spawnMob(x-4,y,z+4,33);

				Level.spawnMob(x+4,y,z-4,33);

				Level.spawnMob(x-4,y,z-4,33);

				Level.spawnMob(x+4,y,z+4,32);

				Level.spawnMob(x-4,y,z+4,32);

				Level.spawnMob(x+4,y,z-4,32);

				Level.spawnMob(x-4,y,z-4,32);

				Level.spawnMob(x+4,y,z+4,34);

				Level.spawnMob(x-4,y,z+4,34);

				Level.spawnMob(x+4,y,z-4,34);

				Level.spawnMob(x-4,y,z-4,34);

				Level.spawnMob(x+4,y,z+4,35);

				Level.spawnMob(x-4,y,z+4,35);

				Level.spawnMob(x+4,y,z-4,35);

				Level.spawnMob(x-4,y,z-4,35);

			}

		}else if(rnd == 2 || rnd == 3 || rnd == 4 || rnd == 5 || rnd == 6 || rnd == 7 || rnd == 8){

			rnd = Math.floor(Math.random()*(10));

			if(rnd == 0){

				Level.dropItem(x,y,z,0,310,1,0);

				Level.dropItem(x,y,z,0,311,1,0);

				Level.dropItem(x,y,z,0,312,1,0);

				Level.dropItem(x,y,z,0,313,64,0);

			}else if(rnd == 1){

				Level.dropItem(x,y,z,0,345,1,0);

				Level.dropItem(x,y,z,0,347,1,0);

				Level.dropItem(x,y,z,0,261,1,0);

				Level.dropItem(x,y,z,0,262,64,0);

			}else if(rnd == 2){

				Level.dropItem(x,y,z,0,298,1,0);

				Level.dropItem(x,y,z,0,299,1,0);

				Level.dropItem(x,y,z,0,300,1,0);

				Level.dropItem(x,y,z,0,301,1,0);

			}else if(rnd == 3){

				Level.dropItem(x,y,z,0,267,1,0);

				Level.dropItem(x,y,z,0,256,1,0);

				Level.dropItem(x,y,z,0,257,1,0);

			}else if(rnd == 4){

				Level.dropItem(x,y,z,0,272,1,0);

				Level.dropItem(x,y,z,0,291,1,0);

				Level.dropItem(x,y,z,0,275,1,0);

			}else if(rnd == 5){

				Level.dropItem(x,y,z,0,391,Math.floor(Math.random()*(6)+1),0);

			}else if(rnd == 6){

				Level.dropItem(x,y,z,0,260,Math.floor(Math.random()*(6)+1),0);

			}else if(rnd == 7){

				Level.dropItem(x,y,z,0,388,Math.floor(Math.random()*(10)+1),0);

			}else if(rnd == 8){

				Level.dropItem(x,y,z,0,289,Math.floor(Math.random()*(6)+1),0);

			}else{

				Level.dropItem(x,y,z,0,264,Math.floor(Math.random()*(3)+1),0);

				Level.dropItem(x,y,z,0,265,Math.floor(Math.random()*(6)+1),0);

				Level.dropItem(x,y,z,0,266,Math.floor(Math.random()*(3)+1),0);

			}

		}else{

			rnd = Math.floor(Math.random()*(3));

			var playerX = getPlayerX();

			var playerY = getPlayerY();

			var playerZ = getPlayerZ();

			if(rnd == 0){

				setTile(playerX+1, playerY-1, playerZ, 101);

				setTile(playerX+1, playerY, playerZ, 101);

				setTile(playerX-1, playerY-1, playerZ, 101);

				setTile(playerX-1, playerY, playerZ, 101);

				setTile(playerX, playerY-1, playerZ+1, 101);

				setTile(playerX, playerY-1, playerZ-1, 101);

				setTile(playerX, playerY, playerZ+1, 101);

				setTile(playerX, playerY, playerZ-1, 101);

				setTile(playerX+1, playerY-1, playerZ+1, 101);

				setTile(playerX+1, playerY, playerZ+1, 101);

				setTile(playerX-1, playerY-1, playerZ+1, 101);

				setTile(playerX-1, playerY, playerZ+1, 101);

				setTile(playerX+1, playerY-1, playerZ-1, 101);

				setTile(playerX+1, playerY, playerZ-1, 101);

				setTile(playerX-1, playerY-1, playerZ-1, 101);

				setTile(playerX-1, playerY, playerZ-1, 101);

				setTile(playerX, playerY+50, playerZ, 12);

				setTile(playerX, playerY+51, playerZ, 12);

			}else if(rnd == 1){

				setTile(playerX+2, playerY, playerZ-2, 24);

				setTile(playerX-2, playerY, playerZ+2, 24);

				setTile(playerX-2, playerY, playerZ-2, 24);

				setTile(playerX+2, playerY, playerZ+2, 24);

				setTile(playerX+2, playerY, playerZ, 24);

				setTile(playerX-2, playerY, playerZ, 24);

				setTile(playerX, playerY, playerZ+2, 24);

				setTile(playerX, playerY, playerZ-2, 24);

				setTile(playerX+2, playerY-1, playerZ-2, 24);

				setTile(playerX-2, playerY-1, playerZ+2, 24);

				setTile(playerX-2, playerY-1, playerZ-2, 24);

				setTile(playerX+2, playerY-1, playerZ+2, 24);

				setTile(playerX+2, playerY-1, playerZ, 24);

				setTile(playerX-2, playerY-1, playerZ, 24);

				setTile(playerX, playerY-1, playerZ+2, 24);

				setTile(playerX, playerY-1, playerZ-2, 24);

				setTile(playerX+2, playerY, playerZ-1, 24);

				setTile(playerX-2, playerY, playerZ+1, 24);

				setTile(playerX-1, playerY, playerZ-2, 24);

				setTile(playerX+1, playerY, playerZ+2, 24);

				setTile(playerX+1, playerY, playerZ-2, 24);

				setTile(playerX-1, playerY, playerZ+2, 24);

				setTile(playerX-2, playerY, playerZ-1, 24);

				setTile(playerX+2, playerY, playerZ+1, 24);

				setTile(playerX+2, playerY-1, playerZ-1, 24);

				setTile(playerX-2, playerY-1, playerZ+1, 24);

				setTile(playerX-1, playerY-1, playerZ-2, 24);

				setTile(playerX+1, playerY-1, playerZ+2, 24);

				setTile(playerX+1, playerY-1, playerZ-2, 24);

				setTile(playerX-1, playerY-1, playerZ+2, 24);

				setTile(playerX-2, playerY-1, playerZ-1, 24);

				setTile(playerX+2, playerY-1, playerZ+1, 24);

				setTile(playerX, playerY-2, playerZ, 24);

				setTile(playerX+1, playerY-2, playerZ-1, 24);

				setTile(playerX-1, playerY-2, playerZ+1, 24);

				setTile(playerX-1, playerY-2, playerZ-1, 24);

				setTile(playerX+1, playerY-2, playerZ+1, 24);

				setTile(playerX, playerY-2, playerZ-1, 24);

				setTile(playerX, playerY-2, playerZ+1, 24);

				setTile(playerX-1, playerY-2, playerZ, 24);

				setTile(playerX+1, playerY-2, playerZ, 24);

				setTile(playerX+1, playerY-1, playerZ-1, goldId);

				setTile(playerX-1, playerY-1, playerZ+1, goldId);

				setTile(playerX-1, playerY-1, playerZ-1, goldId);

				setTile(playerX+1, playerY-1, playerZ+1, goldId);

			}else{

				Level.spawnMob(x+1,y,z,65);

				Level.spawnMob(x,y,z+1,65);

			}

		}

		Level.destroyBlock(x,y,z,false);

	}

	if(treechopper){

		if(tile == woodId){

			Level.destroyBlock(x, y, z, true);

			for(var i = y+1;i < 128;i++){

				if(getTile(x, i, z) == woodId){

					Level.destroyBlock(x, i, z, true);

				} else {

					break;

				}

			}

		}

	}

	if(antibreak){

		preventDefault();

	}

        if(stacked){

        if(tile==1 && getCarriedItem()==270 || tile==1 && getCarriedItem()==257 || tile==1 && getCarriedItem()==274 || tile==1 && getCarriedItem()==278 || tile==1 && getCarriedItem()==285 || tile==4 && getCarriedItem()==270 || tile==4 && getCarriedItem()==257 || tile==4 && getCarriedItem()==274 || tile==4 && getCarriedItem()==278 || tile==4 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,4,63);

        }

        else if(tile==1 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285 || tile==4 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,4,64);

        }

        if(tile==2 || tile==3){

            Level.dropItem(x,y,z,0.5,3,63);

        }

        if(tile==5 || tile==6 || tile==12 || tile==13){

            Level.dropItem(x,y,z,0.5,tile,63,data);

        }

        if(tile==14 && getCarriedItem()==257 || tile==14 && getCarriedItem()==278 || tile==14 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,14,63);

        }

        else if(tile==14 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,14,64);

        }

        if(tile==15 && getCarriedItem()==257 || tile==15 && getCarriedItem()==274 || tile==15 && getCarriedItem()==278 || tile==15 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,15,63);

        }

        else if(tile==15 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,15,64);

        }

        if(tile==16 && getCarriedItem()==270 || tile==16 && getCarriedItem()==257 || tile==16 && getCarriedItem()==274 || tile==16 && getCarriedItem()==278 || tile==16 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,263,63);

        }

        else if(tile==16 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,263,64);

        }

        if(tile==17){

            Level.dropItem(x,y,z,0.5,17,63,data);

        }

        if(tile==18 && getCarriedItem()==359){

            Level.dropItem(x,y,z,0.5,18,63);

        }

        else if(tile==18 && getCarriedItem()!=359){

            Level.dropItem(x,y,z,0.5,18,64);

        }

        if(tile==19 || tile==20){

            Level.dropItem(x,y,z,0.5,tile,63,data);

        }

        if(tile==21 && getCarriedItem()==257 || tile==21 && getCarriedItem()==274 || tile==21 && getCarriedItem()==278 || tile==21 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,21,63);

        }

        else if(tile==21 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,21,64);

        }

        if(tile==22 && getCarriedItem()==257 || tile==22 && getCarriedItem()==274 || tile==22 && getCarriedItem()==278 || tile==22 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,22,63);

        }

        else if(tile==22 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,22,64);

        }

        if(tile==24 && getCarriedItem()==270 || tile==24 && getCarriedItem()==257 || tile==24 && getCarriedItem()==274 || tile==24 && getCarriedItem()==278 || tile==24 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,24,63);

        }

        else if(tile==24 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,24,64);

        }

        if(tile==26){

            Level.dropItem(x,y,z,0.5,26,63,data);

        }

        if(tile==27 && getCarriedItem()==270 || tile==27 && getCarriedItem()==257 || tile==27 && getCarriedItem()==274 || tile==27 && getCarriedItem()==278 || tile==27 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,27,63);

        }

        else if(tile==27 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,27,64);

        }

        if(tile==30 && getCarriedItem()==359){

            Level.dropItem(x,y,z,0.5,287,63);

        }

        else if(tile==30 && getCarriedItem()!=359){

            Level.dropItem(x,y,z,0.5,287,64);

        }

        if(tile==31 && getCarriedItem()==359 || tile==32 & getCarriedItem()==359){

            Level.dropItem(x,y,z,0.5,tile,63,data);

        }

        else if(tile==31 && getCarriedItem()!=359 || tile==32 && getCarriedItem()!=359){

            Level.dropItem(x,y,z,0.5,tile,64,data);

        }

        if(tile==37 || tile==38 || tile==39 || tile==40){

            Level.dropItem(x,y,z,0.5,tile,63);

        }

        if(tile==41 && getCarriedItem()==257 || tile==41 && getCarriedItem()==278 || tile==41 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,41,63);

        }

        else if(tile==41 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,41,64);

        }

        if(tile==42 && getCarriedItem()==257 || tile==42 && getCarriedItem()==274 || tile==42 && getCarriedItem()==278 || tile==42 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,42,63);

        }

        else if(tile==42 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,42,64);

        }

        if(tile==44 && getCarriedItem()==257 || tile==44 && getCarriedItem()==270 || tile==44 && getCarriedItem()==274 || tile==44 && getCarriedItem()==278 || tile==44 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,44,63);

        }

        else if(tile==44 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,44,64);

        }

        if(tile==45 && getCarriedItem()==270 || tile==45 && getCarriedItem()==257 || tile==45 && getCarriedItem()==274 || tile==45 && getCarriedItem()==278 || tile==45 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,45,63);

        }

        else if(tile==45 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,45,64);

        }

        if(tile==47){

            Level.dropItem(x,y,z,0.5,340,61);

        }

        if(tile==48 && getCarriedItem()==270 || tile==48 && getCarriedItem()==257 || tile==48 && getCarriedItem()==274 || tile==48 && getCarriedItem()==278 || tile==48 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,48,63);

        }

        else if(tile==48 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,48,64);

        }

        if(tile==49 && getCarriedItem()==278 || tile==246 && getCarriedItem()==278){

            Level.dropItem(x,y,z,0.5,49,63);

        }

        else if(tile==49 && getCarriedItem()!=278 || tile==246 && getCarriedItem()!=278){

            Level.dropItem(x,y,z,0.5,49,64);

        }

        if(tile==50 || tile==53 || tile==54){

            Level.dropItem(x,y,z,0.5,tile,63);

        }

        if(tile==56 && getCarriedItem()==257 || tile==57 && getCarriedItem()==257 || tile==56 && getCarriedItem()==278 || tile==57 && getCarriedItem()==278 || tile==56 && getCarriedItem()==285 || tile==57 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,tile,63);

        }

        else if(tile==56 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285 || tile==57 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,tile,64);

        }

        if(tile==61 && getCarriedItem()==270 || tile==61 && getCarriedItem()==257 || tile==61 && getCarriedItem()==274 || tile==61 && getCarriedItem()==278 || tile==61 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,61,63);

        }

        else if(tile==61 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,61,64);

        }

        if(tile==63 || tile==64 || tile==65 || tile==66){

            Level.dropItem(x,y,z,0.5,tile,63);

        }

        if(tile==67 && getCarriedItem()==270 || tile==67 && getCarriedItem()==257 || tile==67 && getCarriedItem()==274 || tile==67 && getCarriedItem()==278 || tile==67 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,67,63);

        }

        else if(tile==67 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,67,64);

        }

        if(tile==73 && getCarriedItem()==257 || tile==73 && getCarriedItem()==278 || tile==73 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,331,63);

        }

        else if(tile==73 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,331,64);

        }

        if(tile==78 && getCarriedItem()==256 || tile==78 && getCarriedItem()==269 || tile==78 && getCarriedItem()==273 || tile==78 && getCarriedItem()==277 || tile==78 && getCarriedItem()==284){

            Level.dropItem(x,y,z,0.5,332,63);

        }

        else if(tile==78 && getCarriedItem()!=256 && getCarriedItem()!=269 && getCarriedItem()!=273 && getCarriedItem()!=277 && getCarriedItem()!=284){

            Level.dropItem(x,y,z,0.5,332,64);

        }

        if(tile==80 && getCarriedItem()==256 || tile==80 && getCarriedItem()==269 || tile==80 && getCarriedItem()==273 || tile==80 && getCarriedItem()==277 || tile==80 && getCarriedItem()==284){

            Level.dropItem(x,y,z,0.5,332,60);

        }

        else if(tile==80 && getCarriedItem()!=256 && getCarriedItem()!=269 && getCarriedItem()!=273 && getCarriedItem()!=277 && getCarriedItem()!=284){

            Level.dropItem(x,y,z,0.5,332,64);

        }

        if(tile==81 || tile==82 || tile==83 || tile==85 || tile==86 || tile==89 || tile==91 || tile==96 || tile==102 || tile==107){

            Level.dropItem(x,y,z,0.5,tile,63);

        }

        if(tile==87 && getCarriedItem()==257 || tile==87 && getCarriedItem()==270 || tile==87 && getCarriedItem()==274 || tile==87 && getCarriedItem()==278 || tile==87 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,87,63);

        }

        else if(tile==87 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,87,64);

        }

        if(tile==98 && getCarriedItem()==257 || tile==98 && getCarriedItem()==270 || tile==98 && getCarriedItem()==274 || tile==98 && getCarriedItem()==278 || tile==98 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,98,63);

        }

        else if(tile==98 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,98,64);

        }

        if(tile==101 && getCarriedItem()==257 || tile==101 && getCarriedItem()==270 || tile==101 && getCarriedItem()==274 || tile==101 && getCarriedItem()==278 || tile==101 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,101,63);

        }

        else if(tile==101 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,101,64);

        }

        if(tile==103){

            Level.dropItem(x,y,z,0.5,360,57);

        }

        if(tile==108 && getCarriedItem()==257 || tile==108 && getCarriedItem()==270 || tile==108 && getCarriedItem()==274 || tile==108 && getCarriedItem()==278 || tile==108 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,108,63);

        }

        else if(tile==108 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,108,64);

        }

        if(tile==109 && getCarriedItem()==257 || tile==109 && getCarriedItem()==270 || tile==109 && getCarriedItem()==274 || tile==109 && getCarriedItem()==278 || tile==109 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,109,63);

        }

        else if(tile==109 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,109,64);

        }

        if(tile==112 && getCarriedItem()==257 || tile==112 && getCarriedItem()==270 || tile==112 && getCarriedItem()==274 || tile==112 && getCarriedItem()==278 || tile==112 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,112,63);

        }

        else if(tile==112 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,112,64);

        }

        if(tile==114 && getCarriedItem()==257 || tile==114 && getCarriedItem()==270 || tile==114 && getCarriedItem()==274 || tile==114 && getCarriedItem()==278 || tile==114 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,114,63);

        }

        else if(tile==114 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,114,64);

        }

        if(tile==128 && getCarriedItem()==257 || tile==128 && getCarriedItem()==270 || tile==128 && getCarriedItem()==274 || tile==128 && getCarriedItem()==278 || tile==128 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,128,63);

        }

        else if(tile==128 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,128,64);

        }

        if(tile==134 || tile==135 || tile==136 || tile==158 || tile==170 || tile==171 || tile==245 || tile==247){

            Level.dropItem(x,y,z,0.5,tile,63,data);

        }

        if(tile==139 && getCarriedItem()==257 || tile==139 && getCarriedItem()==270 || tile==139 && getCarriedItem()==274 || tile==139 && getCarriedItem()==278 || tile==139 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,139,63);

        }

        else if(tile==139 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,139,64);

        }

        if(tile==155 && getCarriedItem()==257 || tile==155 && getCarriedItem()==270 || tile==155 && getCarriedItem()==274 || tile==155 && getCarriedItem()==278 || tile==155 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,155,63);

        }

        else if(tile==155 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,155,64);

        }

        if(tile==156 && getCarriedItem()==257 || tile==156 && getCarriedItem()==270 || tile==156 && getCarriedItem()==274 || tile==156 && getCarriedItem()==278 || tile==156 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,156,63);

        }

        else if(tile==156 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,156,64);

        }

        if(tile==173 && getCarriedItem()==257 || tile==173 && getCarriedItem()==270 || tile==173 && getCarriedItem()==274 || tile==173 && getCarriedItem()==278 || tile==173 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,173,63);

        }

        else if(tile==173 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,173,64);

        }

        if(tile==244 && getCarriedItem()==257 || tile==244 && getCarriedItem()==270 || tile==244 && getCarriedItem()==274 || tile==244 && getCarriedItem()==278 || tile==244 && getCarriedItem()==285){

            Level.dropItem(x,y,z,0.5,457,63);

        }

        else if(tile==244 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){

            Level.dropItem(x,y,z,0.5,457,64);

        }

        if(tile==250){

            Level.dropItem(x,y,z,0,247,64);

        }

    }

}

function getNearestEntity(maxrange){

	var mobs = Entity.getAll();

	var players = Server.getAllPlayers();

	var small = maxrange;

	var ent = null;

		for(var i = 0; i < mobs.length; i++){

			var x = Entity.getX(mobs[i]) - getPlayerX();

			var y = Entity.getY(mobs[i]) - getPlayerY();

			var z = Entity.getZ(mobs[i]) - getPlayerZ();

			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

				if(dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1){

					small = dist;

					ent = mobs[i];

				}

			}

			for(var i = 0; i < players.length; i++){

				var x = Entity.getX(players[i]) - getPlayerX();

				var y = Entity.getY(players[i]) - getPlayerY();

				var z = Entity.getZ(players[i]) - getPlayerZ();

				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

					if(dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1){

						small = dist;

						ent = players[i];

					}

				}

		return ent;

}

function crosshairAimAt(ent, pos){

	if(ent != null){

		var x = Entity.getX(ent) - getPlayerX();

		var y = Entity.getY(ent) - getPlayerY();

		var z = Entity.getZ(ent) - getPlayerZ();

			if(pos != null && pos instanceof Array){

				x = Entity.getX(ent) - pos[0];

				y = Entity.getY(ent) - pos[1];

				z = Entity.getZ(ent) - pos[2];

			}

			if(Entity.getEntityTypeId(ent) != 63){

				y += 0.5;

				var a = 0.5 + Entity.getX(ent);

				var b = Entity.getY(ent);

				var c = 0.5 + Entity.getZ(ent);

				var len = Math.sqrt(x * x + y * y + z * z);

				var y = y / len;

				var pitch = Math.asin(y);

				pitch = pitch * 180.0 / Math.PI;

				pitch = -pitch;

				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);

			}

			if(pitch < 89 && pitch > -89){

				Entity.setRot(Player.getEntity(), yaw, pitch);

			}

	    }

}

function p1(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p2();

p1func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p2(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p3();

p2func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p3(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p4();

p3func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p4(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p5();

p4func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p5(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p6();

p5func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p6(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p7();

p6func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p7(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p8();

p7func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p8(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p9();

p8func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p9(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p10();

p9func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p10(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p11();

p10func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p11(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p12();

p11func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p12(){

new android.os.Handler().postDelayed(new java.lang.Runnable({

run:function(){

p1();

p12func();

if(VCAv9.playerIsInGame2){

}else{

}}

}),300);

}

function p1func(){

ModPE.langEdit("menu.copyright","Disco");

}

function p2func(){

ModPE.langEdit("menu.copyright","§adIsco");

}

function p3func(){

ModPE.langEdit("menu.copyright","§0diSco");

}

function p4func(){

ModPE.langEdit("menu.copyright","§adisCo");

}

function p5func(){

ModPE.langEdit("menu.copyright","discO");

}

function p6func(){

ModPE.langEdit("menu.copyright","§aDISCO");

}

function p7func(){

ModPE.langEdit("menu.copyright","§0dISCO");

}

function p8func(){

ModPE.langEdit("menu.copyright","§aDiSCO");

}

function p9func(){

ModPE.langEdit("menu.copyright","DIsCO");

}

function p10func(){

ModPE.langEdit("menu.copyright","§aDIScO");

}

function p11func(){

ModPE.langEdit("menu.copyright","§0DISCo");

}

function p12func(){

ModPE.langEdit("menu.copyright","§adisco");

}

function spawnNether(){

Level.setTile(getPlayerX(), getPlayerY() -1, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +1, getPlayerY() -1, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -1, getPlayerY() -1, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +2, getPlayerY() -1, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -2, getPlayerY() -1, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +2, getPlayerY() +1, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -2, getPlayerY() +1, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +2, getPlayerY() +2, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -2, getPlayerY() +2, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +2, getPlayerY() +3, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -2, getPlayerY() +3, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +2, getPlayerY() +4, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -2, getPlayerY() +4, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX(), getPlayerY() +4, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +1, getPlayerY() +4, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -1, getPlayerY() +4, getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() +2, getPlayerY(), getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX() -2, getPlayerY(), getPlayerZ() -3, 49, 0);

Level.setTile(getPlayerX(), getPlayerY() +1, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() +1, getPlayerY() +1, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() -1, getPlayerY() +1, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() +1, getPlayerY(), getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() -1, getPlayerY(), getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX(), getPlayerY() +2, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() +1, getPlayerY() +2, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() -1, getPlayerY() +2, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX(), getPlayerY() +3, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() +1, getPlayerY() +3, getPlayerZ() -3, 90, 0);

Level.setTile(getPlayerX() -1, getPlayerY() +3, getPlayerZ() -3, 90, 0);

}

function spawnHouse(){

setTile(Player.getX()+7, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()+4,17);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+7, Player.getY()+1, Player.getZ()-4,17);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()-4,17);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()-3,98);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()-2,98);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()-1,98);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()+1,98);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()+2,98);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()+3,98);

setTile(Player.getX()+7, Player.getY()+2, Player.getZ()+4,17);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()-4,17);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()-3,98);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()-2,102);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()-1,98);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()+1,98);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()+2,102);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()+3,98);

setTile(Player.getX()+7, Player.getY()+3, Player.getZ()+4,17);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()-4,17);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()-3,98);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()-2,98);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()-1,98);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ(),98);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()+1,98);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()+2,98);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()+3,98);

setTile(Player.getX()+7, Player.getY()+4, Player.getZ()+4,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()-4,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()-3,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()-2,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()-1,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ(),17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()+1,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()+2,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()+3,17);

setTile(Player.getX()+7, Player.getY()+5, Player.getZ()+4,17);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()+4,98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+9, Player.getY()+1, Player.getZ()-4,98);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()-4,98);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()+4,98);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()-4,98);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()+4,98);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()-4,98);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()+4,98);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()-4,98);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()+4,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()-4,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()+4,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()-3,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()+3,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()-2,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()+2,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()-1,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ()+1,98);

setTile(Player.getX()+9, Player.getY()+6, Player.getZ(),98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()+4,98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+10, Player.getY()+1, Player.getZ()-4,98);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()-4,98);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()+4,98);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()-4,98);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()+4,98);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()-4,98);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()+4,98);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()-4,98);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()+4,98);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()-4,98);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()+4,98);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()-3,17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()+3,17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()-2,17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()+2,17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()-1,17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()+1,17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ(),17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()-4,17);

setTile(Player.getX()+10, Player.getY()+7, Player.getZ()+4,17);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()+4,98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+11, Player.getY()+1, Player.getZ()-4,98);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()-4,98);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()+4,98);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()-4,98);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()+4,98);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()-4,98);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()+4,98);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()-4,98);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()+4,98);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ()-4,98);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ()+4,98);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()-3,17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()+3,17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()-2,17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()+2,17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()-1,17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()+1,17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ(),17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()-4,17);

setTile(Player.getX()+11, Player.getY()+7, Player.getZ()+4,17);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()+4,17);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+14, Player.getY()+1, Player.getZ()-4,17);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()-4,17);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()-3,98);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()-2,98);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()-1,98);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()+1,98);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()+2,98);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()+3,98);

setTile(Player.getX()+14, Player.getY()+2, Player.getZ()+4,17);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()-4,17);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()-3,98);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()-2,102);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()-1,98);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()+1,98);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()+2,102);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()+3,98);

setTile(Player.getX()+14, Player.getY()+3, Player.getZ()+4,17);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()-4,17);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()-3,98);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()-2,98);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()-1,98);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ(),98);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()+1,98);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()+2,98);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()+3,98);

setTile(Player.getX()+14, Player.getY()+4, Player.getZ()+4,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()-4,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()-3,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()-2,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()-1,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ(),17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()+1,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()+2,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()+3,17);

setTile(Player.getX()+14, Player.getY()+5, Player.getZ()+4,17);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()+4,98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+12, Player.getY()+1, Player.getZ()-4,98);

setTile(Player.getX()+12, Player.getY()+2, Player.getZ()-4,98);

setTile(Player.getX()+12, Player.getY()+2, Player.getZ()+4,98);

setTile(Player.getX()+12, Player.getY()+3, Player.getZ()-4,98);

setTile(Player.getX()+12, Player.getY()+3, Player.getZ()+4,98);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()-4,98);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()+4,98);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()-4,98);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()+4,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()-4,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()+4,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()-3,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()+3,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()-2,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()+2,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()-1,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ()+1,98);

setTile(Player.getX()+12, Player.getY()+6, Player.getZ(),98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()+4,98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+13, Player.getY()+1, Player.getZ()-4,98);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()-4,98);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()+4,98);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()-4,98);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()+4,98);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()-4,98);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()+4,98);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()-4,98);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()+4,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()-4,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()+4,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()-3,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()+3,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()-2,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()+2,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()-1,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ()+1,98);

setTile(Player.getX()+13, Player.getY()+6, Player.getZ(),98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ(),98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()+1,98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()+2,98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()+3,98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()+4,98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()-1,98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()-2,98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()-3,98);

setTile(Player.getX()+8, Player.getY()+1, Player.getZ()-4,98);

setTile(Player.getX()+8, Player.getY()+2, Player.getZ()-4,98);

setTile(Player.getX()+8, Player.getY()+2, Player.getZ()+4,98);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()-4,98);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()+4,98);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()-4,98);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()+4,98);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()-4,98);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()+4,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()-4,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()+4,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()-3,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()+3,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()-2,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()+2,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()-1,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ()+1,98);

setTile(Player.getX()+8, Player.getY()+6, Player.getZ(),98);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()+1,54);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()-1,54);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()+1,50);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()-1,50);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()-2,58);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()+2,58);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()-3,61);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ()+3,61);

setTile(Player.getX()+8, Player.getY()+2, Player.getZ(),0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ(),0);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ(),0);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ(),0);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ(),0);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ(),0);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()-1,0);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()-2,0);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()-3,0);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()+1,0);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()+2,0);

setTile(Player.getX()+9, Player.getY()+2, Player.getZ()+3,0);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()-1,0);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()-2,0);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()-3,0);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()+1,0);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()+2,0);

setTile(Player.getX()+9, Player.getY()+3, Player.getZ()+3,0);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()-1,0);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()-2,0);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()-3,0);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()+1,0);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()+2,0);

setTile(Player.getX()+9, Player.getY()+4, Player.getZ()+3,0);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()-1,0);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()-2,0);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()-3,0);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()+1,0);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()+2,0);

setTile(Player.getX()+9, Player.getY()+5, Player.getZ()+3,0);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()-1,0);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()-2,0);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()-3,0);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()+1,0);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()+2,0);

setTile(Player.getX()+10, Player.getY()+2, Player.getZ()+3,0);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()-1,0);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()-2,0);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()-3,0);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()+1,0);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()+2,0);

setTile(Player.getX()+10, Player.getY()+3, Player.getZ()+3,0);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()-1,0);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()-2,0);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()-3,0);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()+1,0);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()+2,0);

setTile(Player.getX()+10, Player.getY()+4, Player.getZ()+3,0);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()-1,0);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()-2,0);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()-3,0);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()+1,0);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()+2,0);

setTile(Player.getX()+10, Player.getY()+5, Player.getZ()+3,0);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()-1,0);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()-2,0);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()-3,0);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()+1,0);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()+2,0);

setTile(Player.getX()+10, Player.getY()+6, Player.getZ()+3,0);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()-1,0);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()-2,0);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()-3,0);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()+1,0);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()+2,0);

setTile(Player.getX()+11, Player.getY()+2, Player.getZ()+3,0);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()-1,0);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()-2,0);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()-3,0);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()+1,0);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()+2,0);

setTile(Player.getX()+11, Player.getY()+3, Player.getZ()+3,0);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()-1,0);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()-2,0);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()-3,0);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()+1,0);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()+2,0);

setTile(Player.getX()+11, Player.getY()+4, Player.getZ()+3,0);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()-1,0);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()-2,0);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()-3,0);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()+1,0);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()+2,0);

setTile(Player.getX()+11, Player.getY()+5, Player.getZ()+3,0);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ()-1,0);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ()-2,0);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ()-3,0);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ()+1,0);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ()+2,0);

setTile(Player.getX()+11, Player.getY()+6, Player.getZ(),0);

setTile(Player.getX()+12, Player.getY()+2, Player.getZ(),0);

setTile(Player.getX()+12, Player.getY()+3, Player.getZ(),0);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ(),0);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ(),0);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()-1,0);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()-1,0);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()-2,0);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()-2,0);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()-3,0);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()-3,0);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()+1,0);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()+1,0);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()+2,0);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()+2,0);

setTile(Player.getX()+12, Player.getY()+4, Player.getZ()+3,0);

setTile(Player.getX()+12, Player.getY()+5, Player.getZ()+3,0);

setTile(Player.getX()+12, Player.getY()+3, Player.getZ()+3,0);

setTile(Player.getX()+12, Player.getY()+3, Player.getZ()+2,0);

setTile(Player.getX()+12, Player.getY()+3, Player.getZ()-3,0);

setTile(Player.getX()+12, Player.getY()+3, Player.getZ()-2,0);

setTile(Player.getX()+13, Player.getY()+2, Player.getZ(),0);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ(),0);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ(),0);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ(),0);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()-1,0);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()-2,0);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()-3,0);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()+1,0);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()+2,0);

setTile(Player.getX()+13, Player.getY()+3, Player.getZ()+3,0);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()-1,0);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()-2,0);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()-3,0);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()+1,0);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()+2,0);

setTile(Player.getX()+13, Player.getY()+4, Player.getZ()+3,0);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()-1,0);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()-2,0);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()-3,0);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()+1,0);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()+2,0);

setTile(Player.getX()+13, Player.getY()+5, Player.getZ()+3,0);

setTile(Player.getX()+8, Player.getY()+2, Player.getZ(),0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ(),0);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ(),0);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ(),0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()-1,0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()-2,0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()-3,0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()+1,0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()+2,0);

setTile(Player.getX()+8, Player.getY()+3, Player.getZ()+3,0);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()-1,0);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()-2,0);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()-3,0);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()+1,0);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()+2,0);

setTile(Player.getX()+8, Player.getY()+4, Player.getZ()+3,0);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()-1,0);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()-2,0);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()-3,0);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()+1,0);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()+2,0);

setTile(Player.getX()+8, Player.getY()+5, Player.getZ()+3,0);

setTile(Player.getX()+3, Player.getY(), Player.getZ(),13);

setTile(Player.getX()+4, Player.getY(), Player.getZ(),13);

setTile(Player.getX()+5, Player.getY(), Player.getZ(),13);

setTile(Player.getX()+6, Player.getY(), Player.getZ(),13);

setTile(Player.getX()+7, Player.getY(), Player.getZ(),13);

setTile(Player.getX()+2, Player.getY(), Player.getZ()-1,13);

setTile(Player.getX()+3, Player.getY(), Player.getZ()-1,13);

setTile(Player.getX()+4, Player.getY(), Player.getZ()-1,13);

setTile(Player.getX()+5, Player.getY(), Player.getZ()-1,13);

setTile(Player.getX()+6, Player.getY(), Player.getZ()-1,13);

setTile(Player.getX()+7, Player.getY(), Player.getZ()-1,13);

setTile(Player.getX()+2, Player.getY(), Player.getZ()+1,13);

setTile(Player.getX()+3, Player.getY(), Player.getZ()+1,13);

setTile(Player.getX()+4, Player.getY(), Player.getZ()+1,13);

setTile(Player.getX()+5, Player.getY(), Player.getZ()+1,13);

setTile(Player.getX()+6, Player.getY(), Player.getZ()+1,13);

setTile(Player.getX()+7, Player.getY(), Player.getZ()+1,13);

setTile(Player.getX()+6, Player.getY()+1, Player.getZ(),109);

setTile(Player.getX()+2, Player.getY(), Player.getZ(),13);

Level.setChestSlot(Player.getX()+13, Player.getY()+2, Player.getZ()+1, 1, 324, 0, 2);

Level.setChestSlot(Player.getX()+13, Player.getY()+2, Player.getZ()+1, 2, 17, 0, 64);

Level.setChestSlot(Player.getX()+13, Player.getY()+2, Player.getZ()-1, 1, 126, 0, 2);

Level.setChestSlot(Player.getX()+13, Player.getY()+2, Player.getZ()-1, 2, 355, 0, 2);

}

function addModdedCharRenderType(renderer){

var model = renderer.getModel();

var var2 = 0;

var head = model.getPart("head").clear();

var body = model.getPart("body").clear();

var rArm = model.getPart("rightArm").clear();

var lArm = model.getPart("leftArm").clear();

var rLeg = model.getPart("rightLeg").clear();

var lLeg = model.getPart("leftLeg").clear();

head.clear();

head.setTextureOffset(0, 0, true);

head.addBox(-4, -8, -4, 8, 8, 8, var2);

head.setTextureOffset(3, 2, true);

head.addBox(-3, -9, -3, 6, 1, 6, var2);

head.setTextureOffset(5, 10, true);

head.addBox(-5, -4, -3, 1, 2, 2, var2);

head.setTextureOffset(10, 11, true);

head.addBox(4, -4, -3, 1, 2, 2, var2);

head.setTextureOffset(12, 10, true);

head.addBox(1, -5, -5, 2, 2, 1, var2);

head.setTextureOffset(8, 10, true);

head.addBox(-3, -5, -5, 2, 2, 1, var2);

head.setTextureOffset(10, 12, true);

head.addBox(-1, -3, -5, 2, 1, 1, var2);

head.setTextureOffset(9, 13, true);

head.addBox(-2, -2, -5, 4, 1, 1, var2);

body.clear();

body.setTextureOffset(16, 16, true);

body.addBox(-4, 2, -2, 8, 10, 4, var2);

body.setTextureOffset(11, 10, true);

body.addBox(-2, 0, -2, 4, 2, 4, var2);

lArm.clear();

lArm.setTextureOffset( 40, 17);

lArm.addBox(-1,0,-2, 4, 5, 4);

lArm.setTextureOffset( 40, 24);

lArm.addBox(0,5,-2, 4, 4, 4);

lArm.setTextureOffset( 40, 27);

lArm.addBox(1,9,-2, 4, 1, 4);

rArm.clear();

rArm.setTextureOffset( 40, 27);

rArm.addBox(-5,9,-2, 4, 1, 4);

rArm.setTextureOffset( 40, 17);

rArm.addBox(-3,0,-2, 4, 5, 4);

rArm.setTextureOffset( 40, 24);

rArm.addBox(-4,5,-2, 4, 4, 4);

lLeg.clear();

lLeg.setTextureOffset( 0, 20);

lLeg.addBox(-1.5,0,-2, 4, 5, 4);

lLeg.setTextureOffset( 0, 18);

lLeg.addBox(-1,5,-2, 4, 5, 4);

lLeg.setTextureOffset( 0, 26);

lLeg.addBox(-1,10,-3, 4, 2, 4);

rLeg.clear();

rLeg.setTextureOffset( 0, 26);

rLeg.addBox(-3,10,-3, 4, 2, 4);

rLeg.setTextureOffset( 0, 18);

rLeg.addBox(-3,5,-2, 4, 5, 4);

rLeg.setTextureOffset( 0, 20);

rLeg.addBox(-2.5,0,-2, 4, 5, 4);

}

addModdedCharRenderType(moddedCharRenderType);

/*JavaScript made by wilco375*/

function generateGame(){
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();     
 	activity.runOnUiThread(new java.lang.Runnable({ run: function() { 
 		try{ 
 			while(topBlocks.length < 5000){
				if(!separate()){
					if(topBlocks.length==0) var isTop = true
					else var isTop = onTop();
					for(i=0;i<=random(5,15);i++){
						if(isTop){
							topBlocks.push("1");
							bottomBlocks.push("0");
						} 
						else{
							bottomBlocks.push("1");
							topBlocks.push("0");
						} 
					}
					for(i=0;i<=random(3,6);i++){
						topBlocks.push("0");
						bottomBlocks.push("0");
					}
				}else{
					if(topBlocks.length==0) var currentTop = true
					else var currentTop = onTop();
					for(i=0;i<=random(5,15);i++){
						if(currentTop){
							topBlocks.push("1");
							bottomBlocks.push("0");
						}else{
							topBlocks.push("0");
							bottomBlocks.push("1");
						}
						for(i=0;i<=random(3,5);i++){
							topBlocks.push("0");
							bottomBlocks.push("0");
						}
						var randomNr = random(1,5);
						if(randomNr == 1 || randomNr == 2)  currentTop = !currentTop
					}
				}
			}
 		}catch(error){ 
 			Toast.makeText(ctx, error, 1).show(); 
 		} 
 	}})); 
} 

function startGame(){
	gameProgress = 0;
	gameStarted = 1;
	gameX = Math.floor(Player.getX());
	gameY = Math.round(Player.getY());
	gameY = gameY-2;
	gameZ = Math.floor(Player.getZ());
	Entity.setPosition(getPlayerEnt(),gameX+0.5,getPlayerY(),gameZ+0.5);
	Entity.setRot(getPlayerEnt(),270,-15);
	for(i = gameZ-7;i<=gameZ+7;i++){
		for(j = gameY;j<=gameY+6;j++){
			setTile(gameX+7,j,i,49);
		}
	}
	for(i = gameZ-7;i<=gameZ+7;i++){
		setTile(gameX+6,gameY,i,1);
		setTile(gameX+6,gameY+6,i,1);
	}
	for(j = gameY;j<=gameY+6;j++){
		setTile(gameX+6,j,gameZ+7,1);
		setTile(gameX+6,j,gameZ-7,1);
	}
	setTile(gameX+6,gameY+1,gameZ-4,41);
	updateGame();
}

function updateGame(){
	if(gameProgress+7>=5000){
		gameProgress = 5004;
	}
	for(i=gameProgress-6;i<=gameProgress+6;i++){
		if(i>=0){
			if(bottomBlocks[i]=="1"){
				if(getTile(gameX+6,gameY+1,gameZ+i-gameProgress) == 41) resetGame();
				else{
					setTile(gameX+6,gameY+2,gameZ+i-gameProgress,1);
					setTile(gameX+6,gameY+1,gameZ+i-gameProgress,1);
				}
			}else{
				if(getTile(gameX+6,gameY+2,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+2,gameZ+i-gameProgress,0);
				if(getTile(gameX+6,gameY+1,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+1,gameZ+i-gameProgress,0);
			}
			if(topBlocks[i]=="1"){
				if(getTile(gameX+6,gameY+5,gameZ+i-gameProgress) == 41) resetGame();
				else{
					setTile(gameX+6,gameY+4,gameZ+i-gameProgress,1);
					setTile(gameX+6,gameY+5,gameZ+i-gameProgress,1);
				}
			}else{
				if(getTile(gameX+6,gameY+4,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+4,gameZ+i-gameProgress,0);
				if(getTile(gameX+6,gameY+5,gameZ+i-gameProgress) != 41) setTile(gameX+6,gameY+5,gameZ+i-gameProgress,0);
			}
		}
	}
	gameProgress++;
}

function resetGame(){
	if(gameProgress-4 == 5000) clientMessage("§a<VCA v9> Score maximun")
	else clientMessage("§a<VCA v9> Score : " + (gameProgress-4));
	gameProgress = 0;
	gameStarted = 0;
	topBlocks = [];
	bottomBlocks = [];
	generateGame();
	
	var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();     
 	activity.runOnUiThread(new java.lang.Runnable({ run: function() { 
 		try{ 
			for(x = gameX+6;x<=gameX+7;x++){
				for(y = gameY;y<=gameY+6;y++){
					for(z = gameZ-7;z<=gameZ+7;z++){
						setTile(x,y,z,0);
					}
				}
			}
 		}catch(error){ 
 			Toast.makeText(ctx, error, 1).show(); 
 		} 
 	}})); 
}

function random(first,last){
	if(first > last){
		var temp = last;
		last = first;
		first = temp;
	}
	return Math.floor((Math.random() * last) + first); 
}

function onTop(){
	if(random(0,1) == 0){
		return true;
	}else{
		return false;
	} 
}

function separate(){
	if(random(0,4) == 0){
		return false;
	}else{
		return true;
	}
}

/*JavaScript made by MxGoldo*/

var curVersion = 3.0,
X, Z, YAW, redraw = false,
startMapControl = true,
settings = {},
settingsLoaded = false,
map_state = false,
entities = [],
chests = [],
minZoom,
absZoom,
bmpSrc,
bmpSrcCopy,
bmpBorder,
pathBorder;

var canvasBmpSrc = new android.graphics.Canvas(),
canvasBmpSrcCopy = new android.graphics.Canvas(),
matrixMap = new android.graphics.Matrix(),
matrixPointer = new android.graphics.Matrix(),
bmpSrcLock = new java.util.concurrent.Semaphore(1, true),
delayChunksArrLock = new java.util.concurrent.Semaphore(1, true),
delayChunksArr = [];

var pool,
poolTick,
scheduledFutureUpdateMap,
runnableUpdateMap;

var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
mapWindow,
setWindow,
density = context.getResources().getDisplayMetrics().density,
displayHeight = (context.getResources().getDisplayMetrics().widthPixels < context.getResources().getDisplayMetrics().heightPixels) ? context.getResources().getDisplayMetrics().widthPixels: context.getResources().getDisplayMetrics().heightPixels; 

(function() {
    var i, settingsString, d = Math.floor(new Date().getTime() / 1000);
	settings = {
		radius: 4,
		map_type: 1,
		map_zoom: 80,
		map_alpha: 70,
		show_passive: 1,
		show_hostile: 1,
		show_player: 1,
		show_otherPlayer: 1,
		show_chest: 0,
		hide_underground_mob: 1,
		window_rawSize: 35,
		window_size: displayHeight * 0.35,
		window_rawPosition: 2,
		window_gravity: 53,
		window_y: 40 * density,
		style_border: 1,
		style_pointer: 2,
		style_shape: 0,
		show_info: 1,
		show_zoomBtn: 1,
		delay: 20,
		threadCount: 4,
		updateCheck: 1,
		updateCheckTime: 0,
		updateVersion: curVersion,
		version: curVersion
	};
	
    bmpBorder = drawBorderBmp();
    pathBorder = createPath(false, true);
    bmpSrc = android.graphics.Bitmap.createBitmap(((settings.radius + 1) * 2 + 1) * 16, ((settings.radius + 1) * 2 + 1) * 16, android.graphics.Bitmap.Config.ARGB_8888);
    bmpSrcCopy = android.graphics.Bitmap.createBitmap(bmpSrc.getWidth(), bmpSrc.getHeight(), android.graphics.Bitmap.Config.ARGB_8888);
    canvasBmpSrc.setBitmap(bmpSrc);
    canvasBmpSrcCopy.setBitmap(bmpSrcCopy);
    minZoom = settings.window_size / (settings.radius * 2 * 16);
    absZoom = (100 / settings.map_zoom) * minZoom;
    poolTick = java.util.concurrent.Executors.newSingleThreadScheduledExecutor();
    runnableUpdateMap = new java.lang.Runnable(function() {
        try {
            android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
            var xNew = Player.getX(),
            zNew = Player.getZ(),
            yawNew = getYaw(),
            xChunkNew,
            zChunkNew,
            xChunkOld,
            zChunkOld,
            i,
            ix,
            radius = settings.radius * 16;
            if (xNew !== X || zNew !== Z || yawNew !== YAW || redraw) {
                redraw = false;
                xChunkNew = Math.floor(xNew / 16) * 16;
                zChunkNew = Math.floor(zNew / 16) * 16;
                xChunkOld = Math.floor(X / 16) * 16;
                zChunkOld = Math.floor(Z / 16) * 16;
                if (xChunkNew !== xChunkOld || zChunkNew !== zChunkOld) {
                    if (Math.abs(xChunkNew - xChunkOld) <= radius * 2 && Math.abs(zChunkNew - zChunkOld) <= radius * 2) {
                        try {
                            bmpSrcLock.acquire();
                            bmpSrcCopy.eraseColor(0);
                            canvasBmpSrcCopy.drawBitmap(bmpSrc, zChunkNew - zChunkOld, xChunkOld - xChunkNew, null);
                            bmpSrc.eraseColor(0);
                            canvasBmpSrc.drawBitmap(bmpSrcCopy, 0, 0, null);
                        } finally {
                            X = xNew;
                            Z = zNew;
                            bmpSrcLock.release();
                        }
                        if (xChunkNew > xChunkOld) {
                            for (i = radius + 16 - (xChunkNew - xChunkOld); i <= radius; i += 16) {
                                scheduleChunk(xChunkNew + i, zChunkNew, 0);
                                for (ix = 16; ix <= radius; ix += 16) {
                                    scheduleChunk(xChunkNew + i, zChunkNew + ix, 0);
                                    scheduleChunk(xChunkNew + i, zChunkNew - ix, 0);
                                }
                            }
                        } else if (xChunkOld > xChunkNew) {
                            for (i = radius + 16 - (xChunkOld - xChunkNew); i <= radius; i += 16) {
                                scheduleChunk(xChunkNew - i, zChunkNew, 0);
                                for (ix = 16; ix <= radius; ix += 16) {
                                    scheduleChunk(xChunkNew - i, zChunkNew + ix, 0);
                                    scheduleChunk(xChunkNew - i, zChunkNew - ix, 0);
                                }
                            }
                        }
                        if (zChunkNew > zChunkOld) {
                            for (i = radius + 16 - (zChunkNew - zChunkOld); i <= radius; i += 16) {
                                scheduleChunk(xChunkNew, zChunkNew + i, 0);
                                for (ix = 16; ix <= radius; ix += 16) {
                                    scheduleChunk(xChunkNew + ix, zChunkNew + i, 0);
                                    scheduleChunk(xChunkNew - ix, zChunkNew + i, 0);
                                }
                            }
                        } else if (zChunkOld > zChunkNew) {
                            for (i = radius + 16 - (zChunkOld - zChunkNew); i <= radius; i += 16) {
                                scheduleChunk(xChunkNew, zChunkNew - i, 0);
                                for (ix = 16; ix <= radius; ix += 16) {
                                    scheduleChunk(xChunkNew + ix, zChunkNew - i, 0);
                                    scheduleChunk(xChunkNew - ix, zChunkNew - i, 0);
                                }
                            }
                        }
                    } else {
                        X = xNew;
                        Z = zNew;
                        chests = [];
                        bmpSrc.eraseColor(0);
                        scheduleChunk(xChunkNew, zChunkNew, 0);
                        for (i = 16; i <= settings.radius * 16; i += 16) {
                            for (ix = 0; ix < i; ix += 16) {
                                scheduleChunk(xChunkNew + ix + 16, zChunkNew + i, 0);
                                scheduleChunk(xChunkNew + ix, zChunkNew - i, 0);
                                scheduleChunk(xChunkNew - ix, zChunkNew + i, 0);
                                scheduleChunk(xChunkNew - ix - 16, zChunkNew - i, 0);
                                scheduleChunk(xChunkNew + i, zChunkNew + ix, 0);
                                scheduleChunk(xChunkNew + i, zChunkNew - ix - 16, 0);
                                scheduleChunk(xChunkNew - i, zChunkNew + ix + 16, 0);
                                scheduleChunk(xChunkNew - i, zChunkNew - ix, 0);
                            }
                        }
                    }
                } else {
                    X = xNew;
                    Z = zNew;
                }
                YAW = yawNew;
                var zoom = absZoom;
                x0 = xNew - (settings.window_size * 0.5 / zoom),
                z0 = zNew + (settings.window_size * 0.5 / zoom);
                matrixMap.setTranslate(settings.window_size * 0.5 - (bmpSrc.getWidth() * 0.5) - 8 + zNew - zChunkNew, settings.window_size * 0.5 - (bmpSrc.getHeight() * 0.5) + 8 - xNew + xChunkNew);
                matrixMap.postScale(zoom, zoom, settings.window_size * 0.5, settings.window_size * 0.5);
                if (settings.show_info) {
                    mapWindow.setInfo();
                }
                var canvas = mapView.lockCanvas();
                canvas.drawColor(0, android.graphics.PorterDuff.Mode.CLEAR);
                canvas.save(android.graphics.Canvas.CLIP_SAVE_FLAG);
                canvas.clipPath(pathBorder, android.graphics.Region.Op.REPLACE);
                canvas.drawBitmap(bmpSrc, matrixMap, bmpPaint);
                if (settings.show_chest) {
                    i = chests.length;
                    while (i--) {
                        matrixPointer.setTranslate((z0 - chests[i][1]) * zoom, (chests[i][0] - x0) * zoom);
                        matrixPointer.preConcat(pointer[3].matrix);
                        canvas.drawBitmap(pointer[3].bmp, matrixPointer, null);
                    }
                }
                if (settings.show_passive || settings.show_hostile || settings.show_otherPlayer) {
                    redraw = true;
                    i = entities.length;
                    var id;
                    while (i--) {
                        if (!settings.hide_underground_mob || Entity.getY(entities[i]) > 60) {
                            id = Entity.getEntityTypeId(entities[i]);
                            if (id < 32 && settings.show_passive) {
                                matrixPointer.reset();
                                if (pointer[settings.style_pointer].rotate) {
                                    matrixPointer.postRotate(Entity.getYaw(entities[i]) - 90);
                                }
                                matrixPointer.postTranslate((z0 - Entity.getZ(entities[i])) * zoom, (Entity.getX(entities[i]) - x0) * zoom);
                                matrixPointer.preConcat(pointer[settings.style_pointer].matrix);
                                canvas.drawBitmap(pointer[settings.style_pointer].bmp, matrixPointer, pointerPaint.GREEN);
                            } else if (id < 63 && id >= 32 && settings.show_hostile) {
                                matrixPointer.reset();
                                if (pointer[settings.style_pointer].rotate) {
                                    matrixPointer.postRotate(Entity.getYaw(entities[i]) - 90);
                                }
                                matrixPointer.postTranslate((z0 - Entity.getZ(entities[i])) * zoom, (Entity.getX(entities[i]) - x0) * zoom);
                                matrixPointer.preConcat(pointer[settings.style_pointer].matrix);
                                canvas.drawBitmap(pointer[settings.style_pointer].bmp, matrixPointer, pointerPaint.RED);
                            } else if (id === 63 && settings.show_otherPlayer) {
                                matrixPointer.reset();
                                if (pointer[settings.style_pointer].rotate) {
                                    matrixPointer.postRotate(Entity.getYaw(entities[i]) - 90);
                                }
                                matrixPointer.postTranslate((z0 - Entity.getZ(entities[i])) * zoom, (Entity.getX(entities[i]) - x0) * zoom);
                                matrixPointer.preConcat(pointer[settings.style_pointer].matrix);
                                canvas.drawBitmap(pointer[settings.style_pointer].bmp, matrixPointer, null);
                            }
                        }
                    }
                }
                if (settings.show_player && !settings.show_otherPlayer) {
                    matrixPointer.reset();
                    if (pointer[settings.style_pointer].rotate) {
                        matrixPointer.postRotate(yawNew - 90);
                    }
                    matrixPointer.postTranslate(settings.window_size * 0.5, settings.window_size * 0.5);
                    matrixPointer.preConcat(pointer[settings.style_pointer].matrix);
                    canvas.drawBitmap(pointer[settings.style_pointer].bmp, matrixPointer, null);
                }
                canvas.restore();
                if (bmpBorder !== null) {
                    canvas.drawBitmap(bmpBorder, 0, 0, null);
                }
                mapView.unlockCanvasAndPost(canvas);
            }
        } catch(e) {
        }
    });
} ());

var bmpPaint = new android.graphics.Paint(),
mapView = new android.view.TextureView(context),
mapWindow = function() {
    var btnSet = new android.widget.Button(context),
    btnZoomIn,
    btnZoomOut,
    textInfo = new android.widget.TextView(context),
    mapLp = new android.widget.RelativeLayout.LayoutParams(settings.window_size, settings.window_size),
    btnZoomInLp = new android.widget.RelativeLayout.LayoutParams(40 * density, 40 * density),
    btnZoomOutLp = new android.widget.RelativeLayout.LayoutParams(40 * density, 40 * density),
    textInfoLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
    layout = new android.widget.RelativeLayout(context),
    mapWin = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT),
    btnActions = {
        set: function() {
            if (!setWindow) {
                setWindow = settingsUI(["MiniMap Mod Options", "Ok", ["sectionDivider", "Graphics"], ["keyValue", "multipleChoice", "MiniMap type", "map_type", ["basic surface (fast)", "surface", "cave"]], ["keyValue", "slider", "Minimap render distance", "radius", 1, checkRenderDistance() + 4, 1, " chunks"], ["keyValue", "slider", "Zoom", "map_zoom", 10, 100, 1, "%"], ["subScreen", "Icons and Indicators ", ["Icons and Indicators", "Ok", ["sectionDivider", "Entity"], ["keyValue", "multipleChoice", "pointer style", "style_pointer", ["crosshairs", "arrow", "minecraft"]], ["checkBox", "hide_underground_mob", "hide entities below sea level"], ["checkBox", "show_player", "you"], ["checkBox", "show_otherPlayer", "other players"], ["checkBox", "show_passive", "passive mobs"], ["checkBox", "show_hostile", "hostile mobs"], ["sectionDivider", "Icon"], ["checkBox", "show_chest", "chests"]]], ["sectionDivider", "View"], ["keyValue", "multipleChoice", "Position", "window_rawPosition", ["top left", "top left (offset)", "top right", "bottom left", "bottom right"], "window_gravity", [51, 51, 53, 83, 85], "window_y", [0, 40 * density, 40 * density, 0, 0]], ["keyValue", "slider", "Size", "window_rawSize", 5, 100, 5, "%"], ["keyValue", "slider", "Opacity", "map_alpha", 20, 100, 1, "%"], ["checkBox", "show_info", "Coordinates visible"], ["checkBox", "show_zoomBtn", "Zoom Buttons visible"], ["sectionDivider", "Style"], ["keyValue", "multipleChoice", "border style", "style_border", ["none", "simple", "colourful"]], ["keyValue", "multipleChoice", "window shape", "style_shape", ["square", "circle"]], ["sectionDivider", "Other"], ["checkBox", "updateCheck", "Check for updates " + (settings.updateVersion > curVersion ? "(update available)": "")], ["subScreen", "Advanced ", ["Advanced", "Ok", ["keyValue", "slider", "Minimap max frequency", "delay", 1, 40, 1, " fps"], ["keyValue", "slider", "Threads count", "threadCount", 1, 12, 1, ""]]], ["subScreen", "MiniMap Mod info ", ["MiniMap Mod info", "Ok", ["keyValue", "text", "Version ", curVersion.toFixed(1)], ["keyValue", "text", "Made by", "MxGoldo"]]]]).show();
            } else {
                setWindow.show();
            }
        }
    };
    bmpPaint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.SRC));
    mapView.setId(1);
    mapView.setBackgroundColor(settings.style_shape ? 0 : -12303292);
    mapView.setVisibility(android.view.View.GONE);
    mapView.setAlpha(settings.map_alpha / 100);
    mapLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
    mapView.setOnClickListener(function(v) {
        changeMapState();
    });
    mapView.setOnLongClickListener(function(v) {
        return true;
    });
    btnSet.setBackgroundResource(android.R.drawable.ic_menu_mylocation);
    btnSet.setVisibility(android.view.View.VISIBLE);
    btnSet.setLayoutParams(new android.widget.LinearLayout.LayoutParams(40 * density, 40 * density));
    btnSet.setOnClickListener(function(v) {
        changeMapState();
    });
    btnSet.setOnLongClickListener(function(v) { 
        return true;
    });
    textInfo.setId(2);
    textInfo.setVisibility(android.view.View.GONE);
    textInfoLp.addRule(android.widget.RelativeLayout.BELOW, 1);
    textInfoLp.addRule(android.widget.RelativeLayout.ALIGN_LEFT, 1);
    textInfoLp.addRule(android.widget.RelativeLayout.ALIGN_RIGHT, 1);
    textInfo.setTextSize(12);	
    textInfo.setPadding(3 * density, 0, 0, 0);
    textInfo.setBackgroundColor(android.graphics.Color.argb(204, 136, 136, 136));
    textInfo.setTextColor(android.graphics.Color.WHITE);
    btnZoomOut = minecraftButton("-");
    btnZoomOut.setId(3);
    btnZoomOut.setVisibility(android.view.View.GONE);
    btnZoomOutLp.addRule(android.widget.RelativeLayout.BELOW, 2);
    btnZoomOut.setOnClickListener(function(v) {
        if (settings.map_zoom * 1.2 >= 100) {
            settings.map_zoom = 100;
        } else {
            settings.map_zoom = Math.round(settings.map_zoom * 1.2);
        }
        settingsChanged("map_zoom");
        saveSettings();
    });
    btnZoomIn = minecraftButton("+");
    btnZoomIn.setId(4);
    btnZoomIn.setVisibility(android.view.View.GONE);
    btnZoomInLp.addRule(android.widget.RelativeLayout.BELOW, 2);
    btnZoomInLp.addRule(android.widget.RelativeLayout.RIGHT_OF, 3);
    btnZoomIn.setOnClickListener(function(v) {
        if (settings.map_zoom * 0.8 <= 10) {
            settings.map_zoom = 10;
        } else {
            settings.map_zoom = Math.round(settings.map_zoom * 0.8);
        }
        settingsChanged("map_zoom");
        saveSettings();
    });
    layout.addView(btnSet);
    layout.addView(mapView, mapLp);
    layout.addView(btnZoomIn, btnZoomInLp);
    layout.addView(btnZoomOut, btnZoomOutLp);
    layout.addView(textInfo, textInfoLp);
    mapWin.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	
    return {
        setInfo: function() {
            context.runOnUiThread(function() {
                textInfo.setText("X:" + Math.floor(Player.getX()) + " Y:" + Math.floor(Player.getY() - 2) + " Z:" + Math.floor(Player.getZ()));
            });
        },
        resetVisibility: function() {
            context.runOnUiThread(function() {
                var visible = android.view.View.VISIBLE,
                gone = android.view.View.GONE;
                if (map_state) {
                    btnSet.setVisibility(gone);
                    mapView.setVisibility(visible);
                    btnZoomIn.setVisibility(settings.show_zoomBtn ? visible: gone);
                    btnZoomOut.setVisibility(settings.show_zoomBtn ? visible: gone);
                    textInfo.setVisibility(settings.show_info ? visible: gone);
                } else {
                    btnSet.setVisibility(visible);
                    mapView.setVisibility(gone);
                    btnZoomIn.setVisibility(gone);
                    btnZoomOut.setVisibility(gone);
                    textInfo.setVisibility(gone);
                }
            });
        },
        show: function() {
            context.runOnUiThread(function() {
                mapWin.showAtLocation(context.getWindow().getDecorView(), settings.window_gravity, 0, settings.window_y);
            });
        },
        hide: function() {
            context.runOnUiThread(function() {
                mapWin.dismiss();
            });
        }
    };
} ();

function entityRemovedHook(entity) {
    if (Entity.getEntityTypeId(entity) <= 63 && Entity.getEntityTypeId(entity) >= 10) {
        var index = entities.indexOf(entity);
		if (index > -1) {
            entities.splice(index, 1);
        }
    }
}
function minecraftButton(text, width, hight) {
    width = width || 40;
    hight = hight || 40;
    var button = new android.widget.Button(context);
    button.setText(text);
    button.setTextSize(15);
    button.setTextColor(android.graphics.Color.WHITE);
    button.setBackgroundDrawable(drawBtnBack(width * density, hight * density));
    return button;
}
function drawBtnBack(width, height) {
    var bmp = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888),
    canvas = new android.graphics.Canvas(bmp),
    paint = new android.graphics.Paint(),
    drawable;
    paint.setColor(android.graphics.Color.GRAY);
    paint.setMaskFilter(new android.graphics.EmbossMaskFilter([1, 1, 0.3], 0.7, 8, 4 * density));
    canvas.drawRect(0, 0, width, height, paint);
    drawable = new android.graphics.drawable.BitmapDrawable(bmp);
    drawable.setAlpha(204);
    return drawable;
}
function createPool() {
    if (pool != null) {
        pool.shutdownNow();
    }
    pool = java.util.concurrent.Executors.newScheduledThreadPool(settings.threadCount);
    pool.setKeepAliveTime(60, java.util.concurrent.TimeUnit.SECONDS);
    pool.allowCoreThreadTimeOut(true);
}
function scheduleChunk(xChunk, zChunk, delay) {
    pool.schedule(new java.lang.Runnable(function() {
        try {
            android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
            if (Math.abs(Math.floor((Z - zChunk) / 16)) > settings.radius || Math.abs(Math.floor((X - xChunk) / 16)) > settings.radius) {
                return;
            }
            var ix = 16,
            iz = 16,
            x = xChunk + 16,
            z = zChunk - 1,
            mapDotArray = [],
            type = settings.map_type;
            if (Level.getTile(x - 16, 0, z + 16) === 95) {
                return;
            }
            if (!chunkLoaded(x - 16, z + 16)) {
                if (map_state) {
                    scheduleChunk(xChunk, zChunk, 10);
                } else {
                    delayChunksArrLock.acquire();
                    delayChunksArr[delayChunksArr.length] = [xChunk, zChunk];
                    delayChunksArrLock.release();
                }
                return;
            }
            do {
                do {
                    mapDotArray[mapDotArray.length] = mapDot[type](x - ix, z + iz);
                } while ( iz -= 1 );
                iz = 16;
            } while ( ix -= 1 );
            if (java.lang.Thread.interrupted()) {
                return;
            }
            try {
                bmpSrcLock.acquire();
                bmpSrc.setPixels(mapDotArray, 0, 16, ((Math.floor(Z / 16) + settings.radius + 1) * 16) - zChunk, xChunk - ((Math.floor(X / 16) - settings.radius - 1) * 16), 16, 16);
            } finally {
                bmpSrcLock.release();
            }
            redraw = true;
        } catch(e) {
        }
    }), delay, java.util.concurrent.TimeUnit.SECONDS);
}
var pointerPaint = {
    RED: (function() {
        var paint = new android.graphics.Paint();
        paint.setColorFilter(new android.graphics.LightingColorFilter(android.graphics.Color.RED, 0));
        return paint;
    })(),
    GREEN: (function() {
        var paint = new android.graphics.Paint();
        paint.setColorFilter(new android.graphics.LightingColorFilter(android.graphics.Color.GREEN, 0));
        return paint;
    })(),
}
var pointer = [new Pointer((function() {
    var paint = new android.graphics.Paint(),
    bmp = android.graphics.Bitmap.createBitmap(displayHeight * 0.1, displayHeight * 0.1, android.graphics.Bitmap.Config.ARGB_8888),
    canvas = new android.graphics.Canvas(bmp);
    paint.setColor(android.graphics.Color.BLACK);
    canvas.drawLines([0, displayHeight * 0.05, displayHeight * 0.1, displayHeight * 0.05, displayHeight * 0.05, 0, displayHeight * 0.05, displayHeight * 0.1], paint);
    return bmp;
})(), (function() {
    var matrix = new android.graphics.Matrix();
    matrix.setTranslate( - displayHeight * 0.05, -displayHeight * 0.05);
    return matrix;
})(), false), new Pointer((function() {
    var path = new android.graphics.Path(),
    paint = new android.graphics.Paint(),
    bmp = android.graphics.Bitmap.createBitmap(displayHeight * 0.025, displayHeight * 0.025, android.graphics.Bitmap.Config.ARGB_8888),
    canvas = new android.graphics.Canvas(bmp);
    path.moveTo(displayHeight * 0.0125, 0);
    path.lineTo(0, displayHeight * 0.025);
    path.lineTo(displayHeight * 0.0125, displayHeight * 0.015);
    path.lineTo(displayHeight * 0.025, displayHeight * 0.025);
    path.close();
    paint.setColor(android.graphics.Color.WHITE);
    canvas.drawPath(path, paint);
    paint.setColor(android.graphics.Color.BLACK);
    paint.setStyle(android.graphics.Paint.Style.STROKE);
    canvas.drawPath(path, paint);
    return bmp;
})(), (function() {
    var matrix = new android.graphics.Matrix();
    matrix.setTranslate( - displayHeight * 0.0125, 0);
    return matrix;
})(), true), new Pointer(decodeBmp("iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAABHNCSVQICAgIfAhkiAAAAEFJREFUCJltjcENgDAQw0z3HyKj3CjpJOZVIRB+WfEj8OCRdYYkr2AS25rEE2yralsBFz8sgJlh783MAHB9n4HrBiyNJZtxPPDsAAAAAElFTkSuQmCC"), (function() {
    var matrix = new android.graphics.Matrix();
    matrix.setTranslate( - 2.5, -4.5);
    matrix.postScale(displayHeight * 0.005, displayHeight * 0.005);
    return matrix;
})(), true), new Pointer(decodeBmp("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wUeEiAJpGBAngAAAhBJREFUOMtlk7ty1DAUhj9Zsh17SWZDZnMhYaChCSmYVFSpGIZnoU5LydPQUOxjMEC5TYqFZRg2YVA2Xt8lUchxdpPTSB7p/D7/ReLt2alrjGG1QikBcM7RWtt/36+/+gYF8P7MUlU1si0xagOAyyJ/0DBKUi6LnFGSEscRHz6VHmCtocn7y9N5SRSFPN9LAKiqmv0wQMVRD6qstRSLnJ0gIpRtfzD9veDd+ZjJZMLF+Jwnj1MALIpmkRPKlkCACoKAi8x1bZ7r7uYjrl3BcrlkOp3y9ZfhZeTYUQIr427SGCGWqMYYxt8kUgBCdEAleVFz8vMnWmsmfzb4sfBsjW36KbO8RIVS8uZkAEDbWpQKAJj/E1xdXQFwsNXy6pkkiOI1UcdfapSzhsMko7USVs7bqOT7548AnB5G7G0a4M6ZrAbnLEoEkoPddA25XS4QG47Xx3u9+rcVdw7MbwTWFV6DmdZrAEfDIaOqpqrqtTzshwHEETOt0XnobQylZJSkD/5wP0ijJMUApqoZJSnCSKDxGtiq7TNQVH69nwva0rtnvBu2cT4HIpAkW3cTKGCmNUfD4QNqfhKFbEviwQAhKpRzjpnWPqKDrV6DVT1uRbws8p6azjMcDiWEIJLbTK4zuF72SfSXQiIpgJj5TcZ2vEkYqe7FCgQacfzi6W2OCQCL6Pau27sVAgJjQfqsUZQV/wGmEfCfo9F8YgAAAABJRU5ErkJggg=="), (function() {
    var matrix = new android.graphics.Matrix();
    matrix.setTranslate( - 8, -8);
    matrix.postScale(displayHeight * 0.0012, displayHeight * 0.0012);
    return matrix;
})(), false)]
function Pointer(bmp, matrix, rotate) {
    this.bmp = bmp;
    this.matrix = matrix;
    this.rotate = rotate;
}
function decodeBmp(string) {
    string = android.util.Base64.decode(string, 0);
    return android.graphics.BitmapFactory.decodeByteArray(string, 0, string.length);
}
function drawBorderBmp() {
    var bmp = android.graphics.Bitmap.createBitmap(settings.window_size, settings.window_size, android.graphics.Bitmap.Config.ARGB_8888),
    canvas = new android.graphics.Canvas(bmp),
    paint = new android.graphics.Paint();
    paint.setMaskFilter(new android.graphics.EmbossMaskFilter([1, 1, 0.3], 0.7, 8, 3 * density));
    switch (settings.style_border) {
    case 1:
        paint.setColor(android.graphics.Color.rgb(153, 135, 108));
        break;
    case 2:
        paint.setShader(new android.graphics.LinearGradient(0, 0, settings.window_size * 0.5, settings.window_size, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN], null, android.graphics.Shader.TileMode.REPEAT));
        break;
    default:
        return null;
    }
    canvas.drawPath(createPath(true, true), paint);
    return bmp;
}
function createPath(outer, inner) {
    var path = new android.graphics.Path(),
    size = settings.window_size;
    path.setFillType(android.graphics.Path.FillType.EVEN_ODD);
    if (settings.style_shape === 1) {
        if (inner) {
            path.addCircle(size / 2, size / 2, size / 2 - (7 * density), android.graphics.Path.Direction.CW);
        }
        if (outer) {
            path.addCircle(size / 2, size / 2, size / 2, android.graphics.Path.Direction.CW);
        }
        return path;
    } else {
        if (inner) {
            path.addRect(7 * density, 7 * density, size - (7 * density), size - (7 * density), android.graphics.Path.Direction.CW);
        }
        if (outer) {
            path.addRect(0, 0, size, size, android.graphics.Path.Direction.CW);
        }
        return path;
    }
}
function chunkLoaded(ix, iz) {
    var iy = 130;
    do {
        if (Level.getTile(ix, 130 - iy, iz)) {
            return true;
        }
    } while ( iy -= 10 );
    return false;
}
mapDot = [function basicSurfaceMap(ix, iz) {
    var iy = 130,
    deltaY = 10,
    colors = {
        1 : -8487298,
        3 : -7970749,
        4 : -8487298,
        8 : -14000385,
        9 : -14000385,
        10 : -637952,
        11 : -637952,
        12 : -2370656,
        13 : -8618884,
        17 : -10005725,
        18 : -13534192,
        24 : -3817840,
        48 : -10193052,
        78 : -984069,
        79 : -5255937,
        82 : -6314831,
        98 : -8487298,
        99 : -7509421,
        100 : -4774107,
        109 : -8487298,
        110 : -9542807,
        128 : -3817840,
        159 : -2968927,
        161 : -8028101,
        162 : -13293288,
        172 : -6857405,
        174 : -5255937,
        243 : -10797283
    };
    do {
        if (Level.getTile(ix, iy - 10, iz)) {
            if (deltaY === 10) {
                deltaY = 1;
                iy += 10;
            } else {
                return colors[Level.getTile(ix, iy - 10, iz)] || -8540361;
            }
        }
    } while ( iy -= deltaY );
    return 0;
},
function minecraftMap(ix, iz) {
    var color, block, iy = 130,
    deltaY = 10,
    o = android.graphics.Color;
    do {
        if (Level.getTile(ix, iy - 10, iz)) {
            if (deltaY === 10) {
                deltaY = 1;
                iy += 10;
            } else {
                block = Level.getTile(ix, iy - 10, iz);
                switch (block) {
                case 9:
                    if (Level.getTile(ix, iy - 19, iz) === 9) {
                        return - 13882190;
                    }
                    if (Level.getTile(ix, iy - 16, iz) === 9) {
                        return ! (ix % 2) === !((iz + 1) % 2) ? -13882190 : -13224231;
                    }
                    if (Level.getTile(ix, iy - 14, iz) === 9) {
                        return - 13224231;
                    }
                    if (Level.getTile(ix, iy - 12, iz) === 9) {
                        return ! (ix % 2) === !((iz + 1) % 2) ? -13224231 : -12632068;
                    }
                    return - 12632068;
                case 12:
                    if (Level.getData(ix, iy - 10, iz)) {
                        color = 0xd57d32;
                    } else {
                        color = 0xf4e6a1;
                    }
                    break;
                case 35:
                case 159:
                case 171:
                    color = [0xfcf9f2, 0xd57d32, 0xb04bd5, 0x6597d5, 0xe2e232, 0x7dca19, 0xef7da3, 0x4b4b4b, 0x979797, 0x4b7d97, 0x7d3eb0, 0x324bb0, 0x654b32, 0x657d32, 0x973232, 0x191919][Level.getData(ix, iy - 10, iz)];
                    break;
                case 5:
                case 85:
                case 157:
                case 158:
                    color = [0x8d7647, 0x7e5430, 0xf4e6a1, 0x956c4c, 0xd57d32, 0x654b32, 0, 0, 0x8d7647, 0x7e5430, 0xf4e6a1, 0x956c4c, 0xd57d32, 0x654b32, 0, 0][Level.getData(ix, iy - 10, iz)];
                    break;
                case 43:
                case 44:
                    color = [0x6f6f6f, 0xf4e6a1, 0x8d7647, 0x6f6f6f, 0x973232, 0x6f6f6f, 0xfcfcfc, 0x6f0200, 0x6f6f6f, 0xf4e6a1, 0x8d7647, 0x6f6f6f, 0x973232, 0x6f6f6f, 0xfcfcfc, 0x6f0200][Level.getData(ix, iy - 10, iz)];
                    break;
                case 54:
                    chests[chests.length] = [ix + 0.5, iz + 0.5];
                default:
                    color = {
                        2 : 0x7db037,
                        3 : 0x956c4c,
                        6 : 0x007b00,
                        8 : 0x3f3ffc,
                        10 : 0xfc0000,
                        11 : 0xfc0000,
                        17 : 0x8d7647,
                        18 : 0x007b00,
                        19 : 0xe2e232,
                        22 : 0x4981fc,
                        24 : 0xf4e6a1,
                        30 : 0xfcfcfc,
                        31 : 0x007b00,
                        32 : 0x8d7647,
                        37 : 0x007b00,
                        38 : 0x007b00,
                        39 : 0x007b00,
                        40 : 0x007b00,
                        41 : 0xf7eb4c,
                        42 : 0xa5a5a5,
                        45 : 0x973232,
                        46 : 0xfc0000,
                        47 : 0x8d7647,
                        49 : 0x191919,
                        53 : 0x8d7647,
                        54 : 0x8d7647,
                        57 : 0x5bd8d2,
                        59 : 0x007b00,
                        60 : 0x956c4c,
                        78 : 0xfcfcfc,
                        79 : 0x9e9efc,
                        80 : 0xfcfcfc,
                        81 : 0x007b00,
                        82 : 0xa2a6b6,
                        83 : 0x007b00,
                        86 : 0xd57d32,
                        87 : 0x6f0200,
                        91 : 0xd57d32,
                        99 : 0x8d7647,
                        100 : 0x973232,
                        103 : 0x7dca19,
                        104 : 0x007b00,
                        105 : 0x007b00,
                        106 : 0x007b00,
                        107 : 0x8d7647,
                        108 : 0x973232,
                        110 : 0x7d3eb0,
                        111 : 0x007b00,
                        112 : 0x6f0200,
                        114 : 0x6f0200,
                        121 : 0xf4e6a1,
                        128 : 0xf4e6a1,
                        133 : 0x00d639,
                        134 : 0x7e5430,
                        135 : 0xf4e6a1,
                        136 : 0x956c4c,
                        141 : 0x007b00,
                        142 : 0x007b00,
                        152 : 0xfc0000,
                        155 : 0xfcfcfc,
                        156 : 0xfcfcfc,
                        161 : 0x007b00,
                        162 : 0x8d7647,
                        163 : 0xd57d32,
                        164 : 0x654b32,
                        170 : 0xf7eb4c,
                        172 : 0xd57d32,
                        174 : 0x9e9efc,
                        175 : 0x007b00,
                        183 : 0x7e5430,
                        184 : 0xf4e6a1,
                        185 : 0x956c4c,
                        187 : 0xd57d32,
                        186 : 0x654b32,
                        243 : 0x7e5430,
                        244 : 0x007b00
                    };
                    color = color[block] || 0x6f6f6f;
                }
                if (Level.getTile(ix - 1, iy - 9, iz)) {
                    return o.rgb(o.red(color) * (180 / 255), o.green(color) * (180 / 255), o.blue(color) * (180 / 255));
                }
                if (Level.getTile(ix - 1, iy - 10, iz)) {
                    return o.rgb(o.red(color) * (220 / 255), o.green(color) * (220 / 255), o.blue(color) * (220 / 255));
                }
                return o.rgb(o.red(color), o.green(color), o.blue(color));
            }
        }
    } while ( iy -= deltaY );
    return 0;
},
function caveMap(ix, iz) {
    var count = 0,
    block = 1,
    blockNew, iy = 96,
    y, r, g, b, increment = 3;
    do {
        blockNew = Level.getTile(ix, iy - 3, iz);
        switch (blockNew) {
        case 0:
        case 17:
        case 18:
        case 20:
        case 50:
        case 64:
        case 66:
        case 106:
        case 127:
        case 161:
        case 162:
            blockNew = 1;
            break;
        case 8:
        case 9:
            blockNew = 0;
            if (count > 1) {
                r = r || 1;
                g = g || 1;
                b = b || 255;
                blockNew = 1
            }
            break;
        case 10:
        case 11:
            blockNew = 0;
            if (count > 1) {
                r = r || 255;
                g = g || 1;
                b = b || 1;
                blockNew = 1
            }
            break;
        case 4:
        case 48:
            blockNew = 2;
            if (count > 2) {
                r = r || 1;
                g = g || 255;
                b = b || 255
            }
            break;
        case 97:
        case 98:
            blockNew = 2;
            if (count > 2) {
                r = r || 255;
                g = g || 1;
                b = b || 255
            }
            break;
        case 54:
            chests[chests.length] = [ix + 0.5, iz + 0.5];
        default:
            blockNew = 2;
        }
        if (blockNew !== block) {
            count += blockNew;
            y = iy
        }
        if (count === 5) {
            iy += 3;
            increment = 1;
            count = 6;
            blockNew = 1;
        } else if (count === 8) {
            r = r || 150;
            g = g || 255;
            b = b || 0;
            return android.graphics.Color.rgb(r * (0.8 * (y / 127) + 0.2), g * (0.9 * (y / 127) + 0.1), b * (0.9 * (y / 127) + 0.1));
        }
        block = blockNew;
    } while ( iy -= increment );
    y = y || 127;
    r = 255;
    g = 255;
    b = 255;
    return android.graphics.Color.rgb(r * (0.8 * (y / 127) + 0.2), g * (0.8 * (y / 127) + 0.2), b * (0.8 * (y / 127) + 0.2));
}];
function checkRenderDistance() {
    var options = load(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/", "options.txt").split("\n"),
    i;
    if (options != "") {
        for (i = 0; i < options.length; i += 1) {
            options[i] = options[i].split(":");
            if (options[i][0] === "gfx_renderdistance_new") {
                return Math.round(parseInt(options[i][1], 10) / 16);
            }
        }
    }
    return 6;
}
function saveSettings() {
    var settingsString = "",
    p;
    for (p in settings) {
        if (settings.hasOwnProperty(p)) {
            if (settingsString !== "") {
                settingsString += "\n";
            }
            settingsString += p + ":" + settings[p];
        }
    }
    save(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/mods/", "minimap.txt", settingsString);
}
function changeMapState() {
    var i;
    map_state = !map_state;
    mapWindow.resetVisibility();
    if (map_state) {
        delayChunksArrLock.acquire();
        i = delayChunksArr.length;
        while (i--) {
            scheduleChunk(delayChunksArr[i][0], delayChunksArr[i][1], 0);
        }
        delayChunksArr = [];
        delayChunksArrLock.release();
        scheduledFutureUpdateMap = poolTick.scheduleWithFixedDelay(runnableUpdateMap, 1000, Math.round(1000 / settings.delay), java.util.concurrent.TimeUnit.MILLISECONDS);
        scheduleChunk(Math.floor(X / 16) * 16, Math.floor(Z / 16) * 16, 0);
    } else {
        scheduledFutureUpdateMap.cancel(false);
    }
}
function settingsChanged(key) {
    switch (key) {
    case "radius":
        var i, j, widthOld = bmpSrc.getWidth(),
        widthNew = ((settings.radius + 1) * 2 + 1) * 16,
        xChunk = Math.floor(X / 16) * 16,
        zChunk = Math.floor(Z / 16) * 16;
        try {
            bmpSrcLock.acquire();
            bmpSrcCopy = android.graphics.Bitmap.createBitmap(widthNew, widthNew, android.graphics.Bitmap.Config.ARGB_8888);
            canvasBmpSrcCopy.setBitmap(bmpSrcCopy);
            canvasBmpSrcCopy.drawBitmap(bmpSrc, (widthNew - widthOld) / 2, (widthNew - widthOld) / 2, null);
            bmpSrc = android.graphics.Bitmap.createBitmap(widthNew, widthNew, android.graphics.Bitmap.Config.ARGB_8888);
            canvasBmpSrc.setBitmap(bmpSrc);
            canvasBmpSrc.drawBitmap(bmpSrcCopy, 0, 0, null);
        } finally {
            bmpSrcLock.release();
        }
        minZoom = settings.window_size / (settings.radius * 2 * 16);
        absZoom = (100 / settings.map_zoom) * minZoom;
        if (widthNew > widthOld) {
            for (i = (widthOld - 16) / 2; i <= settings.radius * 16; i += 16) {
                for (j = 0; j < i; j += 16) {
                    if (map_state) {
                        scheduleChunk(xChunk + j + 16, zChunk + i, 0);
                        scheduleChunk(xChunk + j, zChunk - i, 0);
                        scheduleChunk(xChunk - j, zChunk + i, 0);
                        scheduleChunk(xChunk - j - 16, zChunk - i, 0);
                        scheduleChunk(xChunk + i, zChunk + j, 0);
                        scheduleChunk(xChunk + i, zChunk - j - 16, 0);
                        scheduleChunk(xChunk - i, zChunk + j + 16, 0);
                        scheduleChunk(xChunk - i, zChunk - j, 0);
                    } else {
                        delayChunksArrLock.acquire();
                        delayChunksArr[delayChunksArr.length] = [xChunk + j + 16, zChunk + i];
                        delayChunksArr[delayChunksArr.length] = [xChunk + j, zChunk - i];
                        delayChunksArr[delayChunksArr.length] = [xChunk - j, zChunk + i];
                        delayChunksArr[delayChunksArr.length] = [xChunk - j - 16, zChunk - i];
                        delayChunksArr[delayChunksArr.length] = [xChunk + i, zChunk + j];
                        delayChunksArr[delayChunksArr.length] = [xChunk + i, zChunk - j - 16];
                        delayChunksArr[delayChunksArr.length] = [xChunk - i, zChunk + j + 16];
                        delayChunksArr[delayChunksArr.length] = [xChunk - i, zChunk - j];
                        delayChunksArrLock.release();
                    }
                }
            }
        }
        redraw = true;
        break;
    case "map_type":
        if (pool.getActiveCount() > 0) {
            createPool();
        }
        X = undefined;
        break;
    case "map_zoom":
        absZoom = (100 / settings.map_zoom) * minZoom;
        redraw = true;
        break;
    case "map_alpha":
        mapView.setAlpha(settings.map_alpha / 100);
        break;
    case "window_rawSize":
        settings.window_size = (settings.window_rawSize / 100) * displayHeight;
        var lp = mapView.getLayoutParams();
        lp.height = settings.window_size;
        lp.width = settings.window_size;
        mapView.setLayoutParams(lp);
        redraw = true;
        bmpBorder = drawBorderBmp();
        if (settings.style_border !== 0) {
            pathBorder = createPath(false, true);
        } else {
            pathBorder = createPath(true, false);
        }
        redraw = true;
        minZoom = settings.window_size / (settings.radius * 2 * 16);
        absZoom = (100 / settings.map_zoom) * minZoom;
        break;
    case "window_rawPosition":
        mapWindow.hide();
        mapWindow.show();
        break;
    case "style_shape":
        if (settings.style_border !== 0) {
            pathBorder = createPath(false, true);
        } else {
            pathBorder = createPath(true, false);
        }
    case "style_border":
        if (settings.style_border !== 0) {
            pathBorder = createPath(false, true);
        } else {
            pathBorder = createPath(true, false);
        }
        bmpBorder = drawBorderBmp();
        redraw = true;
        break;
    case "style_pointer":
        redraw = true;
        break;
    case "show_info":
    case "show_zoomBtn":
        mapWindow.resetVisibility();
        break;
    case "delay":
        scheduledFutureUpdateMap.cancel(false);
        scheduledFutureUpdateMap = poolTick.scheduleWithFixedDelay(runnableUpdateMap, 1000, Math.round(1000 / settings.delay), java.util.concurrent.TimeUnit.MILLISECONDS);
        break;
    case "threadCount":
        pool.setCorePoolSize(settings.threadCount);
        break;
    }
}
function settingsClosed() {
    saveSettings();
}
function settingsUI() {
    var textSize = 17,
    padding = 10,
    context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    alert = new android.app.AlertDialog.Builder(context),
    scroll = new android.widget.ScrollView(context),
    layout = new android.widget.LinearLayout(context),
    i,
    len = arguments[0].length,
    ruler,
    rulerLp = new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 2),
    addOption = {
        checkBox: function(args) {
            var layoutElement = new android.widget.RelativeLayout(context),
            checkBtn = new android.widget.CheckBox(context),
            checkBtnLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
            text = new android.widget.TextView(context),
            textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            text.setTextSize(textSize);
            text.setText(args[2]);
            checkBtn.setId(1);
            checkBtn.setChecked(Boolean(settings[args[1]]));
            checkBtn.setOnCheckedChangeListener(function(buttonView, isChecked) {
                if (isChecked) {
                    settings[args[1]] = 1;
                } else {
                    settings[args[1]] = 0;
                }
                settingsChanged(args[1]);
            });
            checkBtnLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
            checkBtnLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
            textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
            layoutElement.addView(checkBtn, checkBtnLp);
            layoutElement.addView(text, textLp);
            layoutElement.setPadding(padding, padding * 0.5, padding, padding * 0.5);
            return layoutElement;
        },
        subScreen: function(args) {
            var text = new android.widget.TextView(context);
            text.setTextSize(textSize);
            text.setText(args[1] + " >");
            text.setPadding(padding, padding, padding, padding);
            text.setOnClickListener(function(v) {
                settingsUI(args[2]).show();
            });
            return text;
        },
        sectionDivider: function(args) {
            var text = new android.widget.TextView(context);
            text.setTextSize(textSize * 0.9);
            text.setText(args[1]);
            text.setTextColor(android.graphics.Color.WHITE); 
			text.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.rgb(0, 127, 0), android.graphics.Color.rgb(63, 95, 0), android.graphics.Color.rgb(0, 63, 0)]));
            text.setPadding(padding, 0, padding, 0);
            return text;
        },
        keyValue: function(args) {
            var layoutElement = new android.widget.RelativeLayout(context),
            text = new android.widget.TextView(context),
            textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
            textValue = new android.widget.TextView(context),
            textValueLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            text.setTextSize(textSize);
            text.setText(String(args[2]));
            textValue.setTextSize(textSize);
            textValue.setTextColor(android.graphics.Color.rgb(100, 255, 0));
            textValue.setId(1);
            switch (args[1]) {
            case "multipleChoice":
                if (args[4].length <= settings[args[3]]) {
                    settings[args[3]] = 0
                }
                textValue.setText(args[4][settings[args[3]]]);
                textValue.setOnClickListener(function(v) {
                    var alert = new android.app.AlertDialog.Builder(context),
                    listView = new android.widget.ListView(context),
                    adapter = new android.widget.ArrayAdapter(context, android.R.layout.simple_list_item_single_choice, args[4]);
                    listView.setAdapter(adapter);
                    listView.setChoiceMode(android.widget.ListView.CHOICE_MODE_SINGLE);
                    listView.setItemChecked(settings[args[3]], true);
                    listView.setDivider(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN]));
                    listView.setDividerHeight(2);
                    listView.setPadding(padding, padding, padding, padding);
                    listView.setOnItemClickListener(function(parent, view, position, id) {
                        settings[args[3]] = position;
                        for (var i = 5; i < args.length; i += 2) {
                            settings[args[i]] = args[i + 1][position];
                        }
                        textValue.setText(args[4][position]);
                        settingsChanged(args[3]);
                        alert.dismiss();
                    });
                    alert.setView(listView);
                    alert.setTitle(args[2]);
                    alert.setNegativeButton("Cancel",
                    function(dialog, whichButton) {
                        alert.dismiss();
                    });
                    alert = alert.show();
                });
                break;
            case "slider":
                textValue.setText(settings[args[3]] + args[7]);
                textValue.setOnClickListener(function(v) {
                    var alert = new android.app.AlertDialog.Builder(context),
                    seekBar = new android.widget.SeekBar(context);
                    seekBar.setMax((args[5] - args[4]) / args[6]);
                    seekBar.setProgress((settings[args[3]] - args[4]) / args[6]);
                    seekBar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
                        onProgressChanged: function(seekBar, progress, fromUser) {
                            alert.setTitle(args[2] + "  " + (progress * args[6] + args[4]) + args[7]);
                        }
                    }));
                    alert.setView(seekBar);
                    alert.setTitle(args[2] + "  " + settings[args[3]] + args[7]);
                    alert.setPositiveButton("Ok",
                    function(dialog, whichButton) {
                        settings[args[3]] = seekBar.getProgress() * args[6] + args[4];
                        textValue.setText(settings[args[3]] + args[7]);
                        settingsChanged(args[3]);
                        alert.dismiss();
                    });
                    alert.setNegativeButton("Cancel",
                    function(dialog, whichButton) {
                        alert.dismiss();
                    });
                    alert = alert.show();
                });
                break;
            default:
                textValue.setText(String(args[3]));
            }
            textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
            textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
            textValueLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
            textValueLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            layoutElement.addView(textValue, textValueLp);
            layoutElement.addView(text, textLp);
            layoutElement.setPadding(padding, padding, padding, padding);
            return layoutElement;
        }
    };
    padding = padding * context.getResources().getDisplayMetrics().density;
    layout.setOrientation(android.widget.LinearLayout.VERTICAL);
    layout.setPadding(padding, 0, padding, 0);
    for (i = 2; i < len; i += 1) {
        layout.addView(addOption[arguments[0][i][0]](arguments[0][i]));
        if (i + 1 < len) {
            ruler = new android.view.View(context);
            ruler.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN]));
            layout.addView(ruler, rulerLp);
        }
    }
    scroll.addView(layout);
    alert.setView(scroll);
    alert.setTitle(arguments[0][0]);
    alert.setPositiveButton(arguments[0][1],
    function(dialog, whichButton) {
        settingsClosed();
    });
    return alert;
}
function save(path, filename, content) {
    try {
        java.io.File(path).mkdirs();
        var newFile = new java.io.File(path, filename);
        newFile.createNewFile();
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
        outWrite.append(content);
        outWrite.close();
    } catch(e) {
        Toast.makeText(ctx, "save, " + e + " (" + e.fileName + " #" + e.lineNumber + ")", 1).show();
    }
}
function load(path, filename) {
    var content = "";
    if (java.io.File(path + filename).exists()) {
        var file = new java.io.File(path + filename),
        fos = new java.io.FileInputStream(file),
        str = new java.lang.StringBuilder(),
        ch;
        while ((ch = fos.read()) != -1) {
            str.append(java.lang.Character(ch));
        }
        content = String(str.toString());
        fos.close();
    }
    return content;
}
function loadTxtFromUrl(url) {
    try {
        var content = new java.io.ByteArrayOutputStream();
        android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(content);
        content.close();
        return String(content.toString());
    } catch(e) {
        return "";
    }
}

//13 064 Line's of Codes
