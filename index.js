const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

client.on("ready", async () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
    client.user.setStatus("online");
    client.user.setActivity(": Talk with Charlie", {type: "WATCHING"});
})

// Event: message
client.on("message", async (message) => {

    // Vérifications primaires
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;

    // Commande: ping
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send(`:ping_pong: Pong ! ${client.ws.ping}ms`);
    };

    // Commande: clear
    if (message.content.startsWith(`${prefix}clear`)) {
        let args = message.content.split(" ");
        let nbr = args [1];

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Vous n'avez pas la permission requise.");
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Je n'ai pas la permission requise.");
        if (!nbr) return message.channel.send(":x: Vous devez indiquer le nombre de messages à supprimer.");
        if (isNaN(nbr)) return message.channel.send(":x: Vous devez indiquer le nombre de messages à supprimer.");
        if (nbr < 1 || nbr > 100) return message.channel.send(":x: Vous devez indiquer un nombre entre `1` et `100`.");

        message.delete().then(message => {
            message.channel.bulkDelete(nbr, true).then(messages => {
                message.channel.send(`:wastebasket: ${message.author}, vous avez supprimé **${messages.size} message(s)**.`).then(sent => sent.delete({ timeout: 3e3 }));
            });
        });
    };
});










client.on('message', (message) => {
    
    let args = message.content.split(" ");
    let command = args.shift().toLowerCase();

    if(!command.startsWith(prefix)) return;

    if(command === prefix + 'film1') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Voyage d'Arlo__\n\n *Si la catastrophe cataclysmique qui a bouleversé la\n Terre et provoqué l'extinction des dinosaures n'avait\n jamais eu lieu ? Si les dinosaures ne s'étaient jamais\n éteints, et vivaient parmi nous de nos jours ? Arlo,\n jeune Apatosaure au grand coeur, maladroit et\n craintif, qui va faire la rencontre et prendre sous son\n aile un étonnant compagnon : un petit garçon\n sauvage, très dégourdi, prénommé Spot.*\n\n __Catégories: **Enfants/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film2') {
        message.delete({ timeout: 2 })
        message.channel.send("__Vice-versa__\n\n *Au Quartier Général, le centre de contrôle situé dans\n la tête de la petite Riley, 11 ans, cinq émotions sont\n au travail. À leur tête, Joie, débordante d'optimisme et\n de bonne humeur, veille à ce que Riley soit heureuse.\n Peur se charge de la sécurité, Colère s'assure que la\n justice règne, et Dégoût empêche Riley de se faire\n empoisonner la vie - au sens propre comme au figuré.\n Quant à Tristesse, elle n'est pas très sûre de son rôle.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film3') {
        message.delete({ timeout: 2 })
        message.channel.send("__WALL-E__\n\n *Wall E, un petit robot, est le dernier être sur Terre !\n 700 ans plus tôt, l'humanité a déserté notre planète\n en lui laissant le soin de nettoyer la Terre. Mais Wall E\n a développé un petit défaut technique : une forte\n personnalité ! Curieux et indiscret, il est surtout très\n seul. Sa vie va être bouleversée avec l'arrivée d'Eve,\n une petite robote. Wall E va tout mettre en œuvre pour\n la séduire.*\n\n __Catégories: **Enfants/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film4') {
        message.delete({ timeout: 2 })
        message.channel.send("__Monstres & Cie__\n\n *Monstropolis est une petite ville peuplée de monstres\n dont la principale source d'énergie provient des cris\n des enfants. Monstres & Cie est la plus grande usine\n de traitement de cris de la ville. Grâce au nombre\n impressionnant de portes de placards dont dispose\n l'usine, une équipe de monstres d'élite pénètre dans\n le monde des humains pour terrifier durant la nuit les\n enfants et récolter leurs hurlements.*\n\n __Catégories: **Comédie/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film5') {
        message.delete({ timeout: 2 })
        message.channel.send("__Cars__\n\n *Flash McQueen, splendide voiture de course promise\n au succès, doit participer à la prestigieuse Piston\n Cup. À cause d'une déviation, Flash atterrit dans la\n petite ville de Radiator Springs, sur la Route 66. Il va\n alors rencontrer Sally, une élégante Porsche 2002,\n Doc Hudson, une Hudson Hornet 1951 au passé\n mystérieux, et Martin, une dépanneuse rouillée mais à\n qui on peut faire confiance.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film6') {
        message.delete({ timeout: 2 })
        message.channel.send("__Paul__\n\n *Depuis 60 ans, Paul, un extraterrestre, vit sur terre et\n collabore avec le gouvernement américain. Il se\n cache à l'abri des regards dans une base militaire\n ultra secrète. Paul est à l'origine de tout ce qu'on a pu\n imaginer sur les extraterrestres, du `merchandising'\n aux scénarios de `Rencontres du troisième type , E.T.'\n ou encore `X-Files'.*\n\n __Catégories: **Comédie/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film7') {
        message.delete({ timeout: 2 })
        message.channel.send("__Avant toi__\n\n *Louisa Clark, dite Lou, est une jeune fille excentrique\n qui multiplie les petits boulots pour aider sa famille à\n joindre les deux bouts. Sa bonne humeur est mise à\n rude épreuve quand elle devient l'aide-soignante de\n Will Traynor, un jeune et riche banquier paralysé dans\n un accident deux ans plus tôt. Peu à peu, avec l'aide\n de Louisa, Will perd son cynisme et reprend goût à\n la vie.*\n\n __Catégories: **Romance/Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film8') {
        message.delete({ timeout: 2 })
        message.channel.send("__Passengers__\n\n *Alors que 5.000 passagers endormis pour longtemps\n voyagent dans l'espace vers une nouvelle planète,\n deux d'entre eux sont accidentellement tirés de leur\n sommeil artificiel 90 ans trop tôt. Jim et Aurora\n doivent désormais accepter l'idée de passer le reste\n de leur existence à bord du vaisseau spatial. Alors\n qu'ils éprouvent peu à peu une indéniable attirance,\n ils découvrent que le vaisseau court un grave danger.\n La vie des milliers de passagers endormis est entre\n leurs mains.*\n\n __Catégories: **SF/Romance**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film9') {
        message.delete({ timeout: 2 })
        message.channel.send("__Charlie et la Chocolaterie__\n\n *Issu d'une famille modeste, le jeune Charlie doit\n travailler pour aider les siens et doit économiser\n chaque penny durement gagné. Friand de sucreries, il\n décide de participer à un concours organisé par\n l'intimidant Willy Wonka, à la tête de la chocolaterie\n de la ville. Celui ou celle qui trouvera l'un des cinq\n tickets d'or que Willy a dissimulé dans les barres de\n chocolat de sa fabrique remportera l'équivalent d'une\n vie de sucreries !*\n\n __Catégories: **Enfants/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film10') {
        message.delete({ timeout: 2 })
        message.channel.send("__En avant__\n\n *Dans la banlieue d'un univers imaginaire, deux frères\n elfes se lancent dans une quête extraordinaire pour\n découvrir s'il reste encore un peu de magie dans le\n monde.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film11') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Parc des Merveilles__\n\n *June et sa maman ont inventé un parc merveilleux,\n tenu par des animaux, où un grand singe est capable,\n grâce à un crayon magique, de dessiner et donner vie\n à n'importe quelle attraction. Un jour, le parc\n apparaît en ruine, à la merci de singes en peluche\n destructeurs et d'une étrange force maléfique planant\n dans le ciel. Aidée par les animaux, June va tout faire\n pour lui redonner vie.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film12') {
        message.delete({ timeout: 2 })
        message.channel.send("__Dumbo__\n\n *Dumbo est un éléphant de fiction créé par la\n romancière Helen Aberson dans son livre paru en\n 1939. Les illustrations étaient de Harold Perl. Pourvu\n d'oreilles surdimensionnées, il est la risée de ses\n congénères jusqu'au jour où il s'aperçoit qu'elles lui\n permettent de voler.*\n\n __Catégories: **Enfants/Musical**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film13') {
        message.delete({ timeout: 2 })
        message.channel.send("__La Belle et le Clochard__\n\n *Malgré leurs milieux différents, une chienne cocker\n gâtée et un cabot jovial partagent amour et aventures\n dans ce classique. Ces aventures amoureuses sont\n perturbées par tante Sarah et ses deux adorables\n chats siamois, Si et Am, diaboliques et sournois.*\n\n __Catégories: **Enfants/Musical**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film14') {
        message.delete({ timeout: 2 })
        message.channel.send("__Merlin l'Enchanteur__\n\n *Une légende anglaise dit qu'une épée d'or est\n prisonnière d'un bloc de pierre, celui qui parviendra à\n la libérer deviendra le roi. Le jeune écuyer Moustic\n rêve d'accomplir cet exploit. Il rencontre l'enchanteur Merlin\n qui tente de parfaire son éducation.*\n\n __Catégories: **Enfants/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film15') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Livre de la jungle__\n\n *Le retour dans la jungle du tigre Shere Khan inquiète\n les loups. Le félin mangeur d'hommes risque de\n s'attaquer à Mowgli, l'enfant qu'ils ont recueilli et\n élevé. La panthère Bagheera, sa protectrice, décide\n donc de ramener le jeune garçon chez les siens,\n parmi lesquels il sera en sécurité. Mowgli, quant à lui,\n n'a aucune envie de quitter la jungle et suit Bagheera\n à contre-coeur.*\n\n __Catégories: **Enfants/Musical**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film16') {
        message.delete({ timeout: 2 })
        message.channel.send("__Robin des Bois__\n\n *Le prince Jean écrase les bons habitants de\n Nottingham d'impôts, mais il se heurte à l'opposition\n farouche de l'habile Robin des Bois et de ses joyeux\n compagnons.*\n\n __Catégories: **Enfants/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film17') {
        message.delete({ timeout: 2 })
        message.channel.send("__Robin des Bois__\n\n *Rejoignez Winnie, Porcinet, Grand Gourou, Petit\n Gourou, Maître Hibou, Coco Lapin, Tigrou et Jean-\nChristophe pour des aventures amusantes en\n chansons.*\n\n __Catégories: **Musical/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film18') {
        message.delete({ timeout: 2 })
        message.channel.send("__Les Aventures de Bernard et Bianca__\n\n *Dans les sous-sols des Nations-Unis à New York un\n groupe de souris tient conseil. Il s'agit du comité de\n soutien aux personnes en difficulté. Bianca, déléguée\n coquette, choisit Bernard tendre souriceau timide et\n courageux pour voler au secours d'une petite\n orpheline séquestrée, Penny.*\n\n __Catégories: **Enfants/Musical**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film19') {
        message.delete({ timeout: 2 })
        message.channel.send("__Rox et Rouky__\n\n *Rox, un renardeau se lie d'amitié avec Rouky, un\n jeune chiot. Ils passent tout leur temps ensemble,\n jusqu'à ce que Rouky doive partir à la chasse avec\n son maître.*\n\n __Catégories: **Enfants/Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film20') {
        message.delete({ timeout: 2 })
        message.channel.send("__Taram et le Chaudron magique__\n\n *Le jeune Taram doit trouver le chaudron magique\n avant qu'il ne tombe entre les mains du Seigneur des\n Ténèbres qui entend l'utiliser à des fins maléfiques.*\n\n __Catégories: **Enfants/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film21') {
        message.delete({ timeout: 2 })
        message.channel.send("__Basil, détective privé__\n\n *En 1897, à Londres, Basil la souris détective est\n appellé à l'aide par Olivia. En effet, celle-ci a été\n témoin de l'enlèvement de son père, l'inventeur M.\n Flaversham, par une inquiétante chauve souris.\n L'enquêteur comprend alors qu'il s'agit de Fidget, le\n sous-fifre de l'ignoble Ratigan.*\n\n __Catégories: **Enfants/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film22') {
        message.delete({ timeout: 2 })
        message.channel.send("__Qui veut la peau de Roger Rabbit__\n\n *Roger Rabbit est au 36e dessous. Autrefois sacré star\n du cinéma d'animation, le lapin blanc est fortement\n préoccupé pendant les tournages depuis qu'il\n soupçonne sa femme, la sublime Jessica Rabbit, de\n le tromper. Le studio qui emploie Roger décide\n d'engager un privé, Eddie Valliant, pour découvrir ce\n qui se cache derrière cette histoire bien plus\n complexe qu'il n'y paraît.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film23') {
        message.delete({ timeout: 2 })
        message.channel.send("__Aladdin__\n\n *Le jeune et pauvre Aladdin vit avec son singe Abu\n dans les rues et est obligé de voler des aliments pour\n se nourrir. Un jour, il fait la connaissance de la\n princesse Jasmine, fille du Sultan, venue se\n promener incognito dans les quartiers populaires, à la\n recherche d'aventure. Entre les deux jeunes gens, le\n coup de foudre est immédiat. Mais ils sont rapidement\n rattrapés par les gardes du sultan.*\n\n __Catégories: **Musical/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film24') {
        message.delete({ timeout: 2 })
        message.channel.send("__L'Étrange Noël de monsieur Jack__\n\n *Jack est le roi des citrouilles de la ville Halloween. Un\n beau jour, il découvre la ville de Noël et décide\n de célébrer lui-même cette fête étrange. Il décide tout\n simplement de kidnapper le Père Noël et de le\n remplacer par ses amis qui, au contraire du Père\n Noël, sont terrifiants.*\n\n __Catégories: **Enfants/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film25') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Drôle de Noël de Scrooge__\n\n *Parmi tous les marchands de Londres, Ebenezer\n Scrooge est connu comme l'un des plus riches et des\n plus avares. Ce vieillard solitaire et insensible vit dans\n l'obsession de ses livres de comptes. Ni la mort de\n son associé, Marley, ni la pauvre condition de son\n employé, Bob Cratchit, n'ont jamais réussi à\n l'émouvoir.*\n\n __Catégories: **Enfants/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if(command === prefix + 'film26') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Bossu de Notre-Dame__\n\n *À Paris, en 1482, le puissant juge Frollo poursuit de\n sa haine tous les bohémiens qui osent pénétrer dans\n la ville. Plusieurs années auparavant, il a recueilli le\n fils d'une gitane, un bébé bossu qu'il s'apprêtait à tuer.\n Baptisé Quasimodo, l'enfant est le sonneur des\n cloches de la cathédrale Notre-Dame que Frollo lui\n interdit de quitter.*\n\n __Catégories: **Musical/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film27') {
        message.delete({ timeout: 2 })
        message.channel.send("__Tarzan__\n\n *Recueilli et adopté tout bébé par un clan de gorilles,\n Tarzan développe un instinct aussi sûr que celui des\n animaux sauvages. Ses aptitudes physiques et son\n intelligence lui permettent de prendre une place à part\n dans le royaume de la jungle. Quand il rencontre le\n professeur Porter et sa fille Jane, en expédition\n scientifique dans la jungle, Tarzan découvre qu'il\n existe d'autres êtres semblables à lui. Il devra bientôt\n faire un choix entre sa famille d'adoption et ses\n ascendances humaines.*\n\n __Catégories: **Musical/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film28') {
        message.delete({ timeout: 2 })
        message.channel.send("__Dinosaure__\n\n *La Terre, il y a soixante-cinq millions d'années. Une\n colonie de lémuriens menant une existence paisible\n sur une île paradisiaque découvre par hasard un oeuf\n de dinosaure. Lorsque la coquille se fissure, c'est un\n petit iguanodon qui en sort... Les lémuriens le\n recueillent et le baptisent Aladar. Celui-ci grandit\n parmi eux, jusqu'au jour où une météorite détruit l'île\n et contraint tout le monde à l'exil. Ils trouvent refuge\n auprès d'un groupe de dinosaures.*\n\n __Catégories: **Aventure/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film29') {
        message.delete({ timeout: 2 })
        message.channel.send("__Kuzco, l'empereur mégalo__\n\n *Dans un royaume mythique, Kuzco est un jeune\n empereur aussi capricieux que méprisant. Yzma, son\n bras droit congédiée, à cause d'un caprice du jeune\n empereur, tente de le tuer. Echappant\n miraculeusement à la mort, Kuzco se retrouve changé\n en lama.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film30') {
        message.delete({ timeout: 2 })
        message.channel.send("__Lilo et Stitch__\n\n *A l'autre bout de l'univers, un savant quelque peu\n dérangé a donné naissance à Stitch, la créature la\n plus intelligente et la plus destructrice qui ait jamais\n existé. Conscientes de son exceptionnel potentiel\n dévastateur, les autorités de sa planète s'apprêtent à\n l'arrêter, mais le petit monstre prend la poudre\n d'escampette à bord de son vaisseau spatial. Stitch\n échoue sur Terre, en plein Pacifique, sur l'île d'Hawaii.\n Le petit alien est bientôt recueilli par Lilo, une fillette\n de six ans.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film31') {
        message.delete({ timeout: 2 })
        message.channel.send("__Atlantide, l'empire perdu__\n\n *Ce conte animé bourré de séquences d'action suit les\n exploits d'un groupe d'aventuriers qui voyagent sous\n la mer jusqu'au royaume légendaire d'Atlantis.*\n\n __Catégories: **Enfants/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film32') {
        message.delete({ timeout: 2 })
        message.channel.send("__Frère des ours__\n\n *Avide de vengeance, Kenai, un jeune Indien se lance\n à la poursuite du grizzly qui a tué son frère.\n Cependant, alors qu'il achève l'animal, le ciel s'ouvre\n et les esprits de la forêt, furieux, métamorphosent\n Kenai en ours. Pour retrouver sa forme humaine, il va\n lui falloir accomplir un voyage initiatique jusqu'à la\n montagne sacrée, là où la lumière touche la terre.*\n\n __Catégories: **Enfants/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film33') {
        message.delete({ timeout: 2 })
        message.channel.send("__Chicken Little__\n\n *Un jour, un jeune poulet nommé Chicken Little reçoit\n un vrai morceau de ciel sur la tête. Personne ne croit\n Chicken Little quand il avertit la population de\n l'imminence d'une invasion extraterrestre. Il va devoir\n sauver le monde lui-même, avec ses amis !*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film34') {
        message.delete({ timeout: 2 })
        message.channel.send("__Bienvenue chez les Robinson__\n\n *Le jeune Lewis, qui se demande depuis toujours\n pourquoi sa mère l'a donné à l'adoption, pourrait bien\n obtenir une réponse quand Wilbur Robinson\n l'emmène dans le futur.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film35') {
        message.delete({ timeout: 2 })
        message.channel.send("__Il était une fois__\n\n *Gisele, une jeune et belle princesse qui a le don de\n communiquer avec les animaux, est renvoyée de son\n royaume magique par la reine, une femme cruelle qui\n refuse de la voir épouser Edward, son prince\n charmant. Le jour de son mariage, Gisele est chassée\n de son monde et se retrouve à Manhattan où elle se\n transforme en une femme en chair et en os.\n Déboussolée par son nouvel environnement, elle\n réalise à quel point le monde réel manque de magie\n et de beauté.*\n\n __Catégories: **Musical/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film36') {
        message.delete({ timeout: 2 })
        message.channel.send("__Volt, star malgré lui__\n\n *Pour le chien Volt, star d'une série télévisée à succès,\n chaque journée est riche d'aventure, de danger et de\n mystère - du moins devant les caméras. Ce n'est plus\n le cas lorsqu'il se retrouve par erreur loin des studios\n de Hollywood, à New York... Il va alors entamer la\n plus grande et la plus périlleuse de ses aventures -\n dans le monde réel, cette fois. Et il est convaincu que\n ses superpouvoirs et ses actes héroïques sont réels...*\n\n __Catégories: **Enfants/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film37') {
        message.delete({ timeout: 2 })
        message.channel.send("__Les Mondes de Ralph__\n\n *Ralph La Casse est le méchant du jeu vidéo d'arcade\n Fix it Felix Jr. Son but est simple : détruire un\n immeuble pendant que Félix, le héros, le répare grâce\n à son marteau magique. Ralph en a plus qu'assez de\n vivre dans une décharge et d'être détesté par les\n habitants de l'immeuble. Il décide de se confier lors\n d'une réunion des Méchants Anonymes pour trouver\n une solution à son problème.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film38') {
        message.delete({ timeout: 2 })
        message.channel.send("__Frankenweenie__\n\n *Après la mort soudaine de Sparky, son chien adoré, le\n jeune Victor fait appel au pouvoir de la science afin de\n ramener à la vie celui qui était aussi son meilleur ami.\n Il lui apporte au passage quelques modifications de\n son cru. Victor va tenter de cacher la créature qu'il a\n fabriquée mais lorsque Sparky s'échappe, ses\n copains de classe, ses professeurs et la ville tout\n entière vont apprendre que vouloir mettre la vie en\n laisse peut avoir quelques monstrueuses\n conséquences.*\n\n __Catégories: **Horreur/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film39') {
        message.delete({ timeout: 2 })
        message.channel.send("__Planes__\n\n *Dusty est un petit avion de ville, qui pulvérise les\n champs et rêve de voler un jour en compétition au\n milieu des avions les plus rapides au monde. Sauf\n que le pauvre souffre de deux handicaps majeurs : il\n n'est pas construit pour la course, et il est terriblement\n sujet au vertige ! Comme il n'est pas du genre à\n renoncer à ses rêves même les plus fous, Dusty fait\n appel à Skipper, un as de l'aéronavale qui l'aide à\n bien se classer face au redoutable tenant du titre\n Ripslinger.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film40') {
        message.delete({ timeout: 2 })
        message.channel.send("__Raya et le Dernier Dragon__\n\n *Raya et le Dernier Dragon est un film d'animation\n américain de fantasy produit par Walt Disney\n Animation Studios, sorti en 2021.*\n\n __Catégories: **Enfants/Cinéma de fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film41') {
        message.delete({ timeout: 2 })
        message.channel.send("__Soul__\n\n *Qu'est-ce qui fait que vous êtes? VOUS ? Cet\n automne, les studios Pixar Animation présentent le\n film 'Soul, l'histoire d'un modeste prof de musique,\n Joe Gardner (Omar Sy), qui décroche le contrat de sa\n vie dans le meilleur club de jazz de la ville.*\n\n __Catégories: **Enfants/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film42') {
        message.delete({ timeout: 2 })
        message.channel.send("__Dragon Heart__\n\n *En l'an 934, la reine sollicite l'intervention d'un dragon\n pour sauver la vie de son fils Einon. Le dragon fait\n alors l'offrande de la moitie de son coeur au prince.\n Sitot monte sur le trone, Einon se revele etre un tyran*\n\n __Catégories: **SF/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film43') {
        message.delete({ timeout: 2 })
        message.channel.send("__Anastasia__\n\n *Saint-Pétersbourg, 1916. Le Tsar donne une grande\n fête dans son palais mais sa famille est victime d'une\n malédiction lancée par le sorcier Raspoutine. La\n famille impériale est chassée de Russie par la\n révolution et, dans la précipitation, abandonne la\n jeune princesse Anastasia. Plus de 10 ans plus tard,\n Dimitri, un petit escroc, rencontre Anya, une\n charmante amnésique qui ressemble fort\n à la princesse.*\n\n __Catégories: **Musical/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film44') {
        message.delete({ timeout: 2 })
        message.channel.send("__Percy Jackson__\n\n *Un jeune homme découvre qu'il est le descendant\n d'un dieu grec et s'embarque, avec l'aide d'un satyre\n et de la fille d'Athena, dans une dangereuse aventure\n pour résoudre une guerre entre dieux. Sur sa route, il\n devra affronter une horde d'ennemis mythologiques\n bien décidés à le stopper.*\n\n __Catégories: **SF/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film45') {
        message.delete({ timeout: 2 })
        message.channel.send("__Les Animaux Fantastiques__\n\n *Norbert Dragonneau rentre à peine d'un périple à\n travers le monde où il a répertorié un bestiaire\n extraordinaire de créatures fantastiques. Il pense faire\n une courte halte à New York, mais une série\n d'événements et de rencontres inattendues risquent\n de prolonger son séjour. Désormais, le monde de la\n magie est menacé.*\n\n __Catégories: **SF/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film46') {
        message.delete({ timeout: 2 })
        message.channel.send("__Sublimes Créatures__\n\n *Ethan Wate, un jeune lycéen solitaire, mène une vie\n morose dans sa petite ville du sud des Etats-Unis.\n Dans ses rêves récents, apparaît désormais une\n jeune inconnue. Un matin, il reconnaît la fille de ses\n songes en Lena Duchannes, une nouvelle élève du\n lycée. Une arrivée qui coïncide avec d'étranges\n phénomènes. Alors que la ville entière semble exclure\n la jeune femme, Ethan, intrigué, se rapproche d'elle.*\n\n __Catégories: **Romance/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film47') {
        message.delete({ timeout: 2 })
        message.channel.send("__Maléfique__\n\n *Poussée par la vengeance et une volonté farouche de\n protéger les terres qu'elle préside, Maléfique place\n cruellement une malédiction irrévocable sur la\n Princesse Aurore, l'enfant du roi Stéphane et de la\n reine Oriane. À l'aube de ses 16 ans, elle se piquera\n à un fuseau d'un rouet et sera endormie pour\n toujours. Seul un baiser d'un amour sincère la\n délivrera.*\n\n __Catégories: **SF/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film48') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Chaperon Rouge__\n\n *Dans une histoire inspirée d'un célèbre conte de fées,\n Valerie, une adolescente, court un grand danger\n quand son village décide de chasser les loups-garous\n qui terrorisent la population à chaque pleine lune.\n Dans un endroit où tout le monde a un secret et est\n suspect, Valerie va devoir apprendre à suivre son\n coeur et trouver en qui elle peut avoir confiance.*\n\n __Catégories: **Horreur/Romance**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film49') {
        message.delete({ timeout: 2 })
        message.channel.send("__Time Trap__\n\n *Partis à la recherche de leur professeur d'archéologie\n disparu, des étudiants découvrent une grotte où le\n temps ne s'écoule pas au même rythme qu'à la surface.*\n\n __Catégories: **SF/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film50') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Septième Fils__\n\n *Une époque enchantée, où les légendes et la magie\n ne font qu'un. L'unique guerrier survivant d'un ordre\n mystique part en quête d'un héros prophétique doté\n d'incroyables pouvoirs, désigné par la légende\n comme étant le dernier des `Sept Fils'.*\n\n __Catégories: **SF/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film51') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Dernier Chasseur de sorcières__\n\n *Notre monde actuel repose sur un pacte fragile\n régissant la paix entre humains et sorcières. Ces\n dernières sont autorisées à vivre secrètement parmi\n nous tant qu'elles n'ont pas recours à la magie noire.\n Kaulder, membre de la confrérie de la hache et de la\n croix qui garantit ce pacte, chasse les sorcières\n insoumises depuis plus de 800 ans. Lorsque l'un des\n membres de son groupe est assassiné, la guerre est\n sur le point d'éclater et de faire des rues de New York\n un véritable champ de bataille.*\n\n __Catégories: **Action/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film52') {
        message.delete({ timeout: 2 })
        message.channel.send("__Warcraft__\n\n *Le pacifique royaume d'Azeroth est au bord de la\n guerre alors que sa civilisation doit faire face à une\n redoutable race d'envahisseurs : des guerriers Orcs\n fuyant leur monde moribond pour en coloniser un\n autre. Alors qu'un portail s'ouvre pour connecter les\n deux mondes, une armée fait face à la destruction et\n l'autre à l'extinction. De côtés opposés, deux héros\n vont s'affronter et décider du sort de leur famille, de\n leur peuple et de leur patrie.*\n\n __Catégories: **Action/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film53') {
        message.delete({ timeout: 2 })
        message.channel.send("__Eragon__\n\n *Autrefois, la paix et la prospérité régnaient en terre\n d'Alagaësia. Les Dragons avaient alors fait don à\n leurs Dragonniers de pouvoirs magiques, et même de\n l'immortalité. Aucun ennemi ne pouvait les vaincre...\n jusqu'à ce que l'un des leurs, Galbatorix, décide de\n trahir pour s'approprier tous ces pouvoirs et en jouir\n seul en détruisant tous les autres Dragonniers.*\n\n __Catégories: **Fantasy/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film54') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Secret de Terabithia__\n\n *Jess, ado issu d'une famille nombreuse modeste, et\n Leslie, fille unique d'un couple d'écrivains, s'inventent\n un monde imaginaire, Terabithia, pour fuir la difficile\n réalité de leur vie quotidienne. Lorsque cet univers\n magique prend vie, ils se trouvent confrontés à des\n aventures plus périlleuses que ce qu'ils avaient\n imaginé.*\n\n __Catégories: **Enfants/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film55') {
        message.delete({ timeout: 2 })
        message.channel.send("__Jack Reacher__\n\n *Alors qu'elles se trouvent tranquillement dans un\n parc, cinq personnes sont froidement abattues par un\n sniper posté dans un parking leur faisant face. Toutes\n les pistes mènent à James Barr. Les forces de police\n appréhendent le suspect numéro un et le placent\n immédiatement en détention. Alors qu'il est entendu\n par les inspecteurs chargés de l'enquête, Barr\n n'avoue rien, mais écrit sur une feuille : 'Trouvez Jack\n Reacher'...*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film56') {
        message.delete({ timeout: 2 })
        message.channel.send("__Sortilège__\n\n *Un collégien riche et séduisant qui s'amuse à\n ridiculiser ses camarades de classe au physique\n ingrat devient du jour au lendemain hideux après\n qu'une camarade de classe humiliée lui eut jeté un sort.*\n\n __Catégories: **Romance/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film57') {
        message.delete({ timeout: 2 })
        message.channel.send("__The Lucky One__\n\n *Le sergent Logan Thibault du corps des Marines\n rentre chez lui après sa troisième période de services\n en Irak. Il pense qu'une seule chose lui a permis de\n survivre à cet enfer : la photographie d'une femme\n qu'il n'a jamais rencontrée. Il apprend que cette\n femme s'appelle Beth et il va la rencontrer. Bien que\n Beth mène une vie agitée, une histoire d'amour\n commence. Logan espère que Beth sera plus que\n son porte-bonheur.*\n\n __Catégories: **Romance/Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film58') {
        message.delete({ timeout: 2 })
        message.channel.send("__Prince of Persia : Les Sables du Temps__\n\n *Un prince rebelle est contraint d'unir ses forces avec\n une mystérieuse princesse pour affronter ensemble\n les forces du mal et protéger une dague antique\n capable de libérer les Sables du temps, un don de\n dieu qui peut inverser le cours du temps et permettre\n à son possesseur de régner en maître absolu sur le\n monde.*\n\n __Catégories: **Action/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film59') {
        message.delete({ timeout: 2 })
        message.channel.send("__La Momie (2017)__\n\n *Le membre d'élite de l'armée américaine et voleur\n d'objets archéologiques, Nick Morton, est sur les\n traces d'une antiquité avec son partenaire Chris Vail.\n Tandis qu'ils sont en pleine opération en Irak, ils\n découvrent l'étrange tombeau de la princesse\n égyptienne, Ahmanet. Le transport du sarcophage à\n Londres va semé un vent de terreur sur l'île. Le réveil\n de la momie révèle une princesse en furie, qui fut\n momifiée vivante il y a cinq mille ans pour avoir vendu\n son âme au Dieu Seth.*\n\n __Catégories: **Action/Horreur**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film60') {
        message.delete({ timeout: 2 })
        message.channel.send("__Real Steel__\n\n *Dans un futur proche, la boxe a évolué pour devenir\n un sport high-tech. Charlie Kenton, un ancien boxeur,\n a perdu toute chance de remporter le championnat\n depuis que les humains ont été remplacés sur le ring\n par des robots d'acier de 900 kilos et de 2,40 m de\n haut. Lorsque Charlie touche le fond, il accepte à\n contrecoeur de faire équipe avec son fils Max, qu'il a\n perdu de vue depuis des années, pour construire et\n entraîner un champion.*\n\n __Catégories: **Action/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film61') {
        message.delete({ timeout: 2 })
        message.channel.send("__The Giver__\n\n *Dans un futur lointain, les émotions ont été\n éradiquées en supprimant toute trace d'histoire.\n Personne n'est alors en mesure de se souvenir de\n quoi que ce soit. Seul un Giver a la lourde tâche de\n se souvenir du passé, en cas de nécessité. C'est\n alors que le jeune Jonas est sollicité : il doit devenir le\n prochain Giver.*\n\n __Catégories: **SF/Romance**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film62') {
        message.delete({ timeout: 2 })
        message.channel.send("__Seven Sisters__\n\n *2073. La Terre est surpeuplée. Le gouvernement\n décide d'instaurer une politique d'enfant unique,\n appliquée de main de fer par le Bureau d'Allocation\n des Naissances, sous l'égide de Nicolette Cayman.\n Confronté à la naissance de septuplées, Terrence\n Settman décide de garder secrète l'existence de ses\n 7 petites-filles.*\n\n __Catégories: **Action/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film63') {
        message.delete({ timeout: 2 })
        message.channel.send("__Looper__\n\n *En 2044, aux États-Unis, la crise économique a\n favorisé l'essor du crime organisé pendant que\n certaines personnes ont développé des pouvoirs\n surnaturels. C'est dans ce contexte qu'opère Joe,\n tueur à gages pour le compte de la Mafia. Il est\n chargé d'éliminer ceux que la technologie de 2074\n permet d'envoyer dans le passé, là où plus personne\n ne retrouvera leur trace. Un jour, alors qu'il se prépare\n à remplir un nouveau contrat, Joe réalise que\n l'homme envoyé du futur n'est autre que lui-même.*\n\n __Catégories: **Action/SF**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film64') {
        message.delete({ timeout: 2 })
        message.channel.send("__Ferdinand__\n\n *Ferdinand est un taureau au grand coeur. Victime de\n son imposante apparence, il se retrouve\n malencontreusement capturé et arraché à son village\n d'origine. Déterminé à retrouver sa famille et ses\n racines, il se lance alors dans une incroyable\n aventure à travers l'Espagne, accompagné de la plus\n déjantée des équipes.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film65') {
        message.delete({ timeout: 2 })
        message.channel.send("__Dragons__\n\n *L'histoire d'Harold, jeune Viking peu à son aise dans\n sa tribu où combattre les dragons est le sport\n national. Sa vie va être bouleversée par sa rencontre\n avec un dragon qui va peu à peu amener Harold et\n les siens à voir le monde d'un point de vue totalement\n différent.*\n\n __Catégories: **Enfants/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film66') {
        message.delete({ timeout: 2 })
        message.channel.send("__The Island__\n\n *Dans un futur proche, une société produit des clones\n destinés à fournir des organes de substitution à de\n riches commanditaires. Deux d'entre eux apprennent\n la réalité de leurs sorts et s'enfuient. Une chasse aux\n clones commence.*\n\n __Catégories: **SF/Action**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film67') {
        message.delete({ timeout: 2 })
        message.channel.send("__Edge of Tomorrow__\n\n *Dans un futur proche, des hordes d'extraterrestres ont\n livré une bataille acharnée contre la Terre et semblent\n désormais invincibles : aucune armée au monde n'a\n réussi à les vaincre. Le commandant William Cage,\n qui n'a jamais combattu de sa vie, est envoyé, sans la\n moindre explication, dans ce qui ressemble à une\n mission-suicide. Il meurt en l'espace de quelques\n minutes et se retrouve projeté dans une boucle\n temporelle, condamné à revivre le même combat et à\n mourir de nouveau indéfiniment.*\n\n __Catégories: **SF/Action**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film68') {
        message.delete({ timeout: 2 })
        message.channel.send("__Ava__\n\n *Une tueuse d'élite assaillie par le\n doute doit lutter pour sa propre survie\n et celle de sa famille après l'échec d'une dangereuse mission.*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film69') {
        message.delete({ timeout: 2 })
        message.channel.send("__Six Underground__\n\n *Le meilleur avantage d'être mort c'est la liberté qu'elle\n vous procure. Soudainement, vous n'êtes plus obligé\n de répondre à quiconque ou d'obéir aux règles de la\n société. Dans ce film, un mystèrieux milliardaire réunit\n cinq personnes qui ont simulé leur propre mort afin\n d'augmenter leur champ d'action pour accomplir une\n mission. Ils ont pour objectif d'éliminer les plus\n puissants criminels et dictateurs dans le monde.*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film70') {
        message.delete({ timeout: 2 })
        message.channel.send("__The Equalizer__\n\n *McCall a abandonné un passé mystérieux pour se\n refaire une nouvelle vie sans histoire. Lorsque McCall\n rencontre Teri, une jeune femme contrôlée par de\n violents gangsters russes, il doit l'aider. Armé de\n talents cachés, McCall retrouve son désir ardent de\n justice et de vengeance contre ceux qui brutalisent\n les innocents. Si quelqu'un a un problème, si les\n chances s'accumulent contre lui, s'il n'a aucun autre\n recours, McCall sera là. Il est Le justicier.*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film71') {
        message.delete({ timeout: 2 })
        message.channel.send("__Mechanic: Ressurection__\n\n *Arthur Bishop pensait avoir mis son passé de tueur à\n gages derrière lui. Il coulait des jours heureux avec sa\n compagne dans l'anonymat jusqu'à ce que son plus\n redoutable ennemi n'enlève cette dernière, l'obligeant\n à reprendre du service.*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film72') {
        message.delete({ timeout: 2 })
        message.channel.send("__Les Évadés__\n\n *En 1947, Andy Dufresne, un jeune banquier, est\n condamné à la prison à vie pour le meurtre de sa\n femme et de son amant. Ayant beau clamer son\n innocence, il est emprisonné à `Shawshank', le\n pénitencier le plus sévère de l'Etat du Maine. Il y fait\n la rencontre de Red, un homme désabusé, détenu\n depuis 20 ans. Commence alors une grande histoire\n d'amitié entre les deux hommes.*\n\n __Catégories: **Drame/Policier**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film73') {
        message.delete({ timeout: 2 })
        message.channel.send("__John Wick__\n\n *Depuis la mort de sa femme bien-aimée, John Wick\n passe ses journées à retaper sa Ford Mustang de\n 1969, avec pour seule compagnie sa chienne Daisy. Il\n mène une vie sans histoire, jusqu'à ce qu'un malfrat\n sadique nommé Iosef Tarasof remarque sa voiture.\n John refuse de la lui vendre. Iosef n'acceptant pas\n qu'on lui résiste, s'introduit chez John avec deux\n complices pour voler la Mustang.*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film74') {
        message.delete({ timeout: 2 })
        message.channel.send("__Évasion__\n\n *Ray Breslin est un ingénieur spécialisé dans la\n conception de prisons ultrasécurisées. Il teste lui-\nmême l'efficacité de ses bâtiments en se faisant\n enfermer puis en s'évadant. Contacté par une société\n privée souhaitant tester un concept révolutionnaire de\n prison hi-tech, il se retrouve prisonnier.*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film75') {
        message.delete({ timeout: 2 })
        message.channel.send("__Wanted : Choisis ton destin__\n\n *Tyrannisé par sa patronne, trompé par sa fiancée qui\n couche avec son meilleur ami, le jeune comptable\n Wesley Gibson n'a pas une vie très réjouissante.\n Jusqu'au jour où Fox, une ravissante tueuse\n professionnelle, lui apprend que son père, mort la\n veille, était l'un des agents les plus doués d'une secte\n criminelle ultrasecrète. Fox vient recruter Wesley pour\n prendre le relais de son père.*\n\n __Catégories: **Action/Thriller**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film76') {
        message.delete({ timeout: 2 })
        message.channel.send("__Loin de moi, près de toi__\n\n *Traduit de l'anglais-A Whisker Away, connu au Japon\n sous le nom de Nakitai Watashi wa Neko wo Kaburu,\n est un film d'animation japonais 2020 produit par\n Studio Colorido, Toho Animation et Twin Engine.\n Réalisé par Junichi Sato et Tomotaka Shibayama, le\n film est sorti le 18 juin 2020 sur Netflix en japonais.*\n\n __Catégories: **Fantasy/Romance**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film77') {
        message.delete({ timeout: 2 })
        message.channel.send("__Ça : Chapitre 2__\n\n *Tous les 27 ans, une créature maléfique revient\n hanter les rues de Derry, dans le Maine. Près de\n trente ans après les événements du premier opus, les\n membres du Club des Ratés, désormais adultes, se\n retrouvent.*\n\n __Catégories: **Horreur/Surnaturel**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film78') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le voyage de Chihiro__\n\n *La petite Chihiro accompagne ses parents dans une\n promenade sylvestre qui doit les conduire vers leur\n nouvelle maison en banlieue. Alors qu'elle prend un\n raccourci à travers un tunnel peu emprunté, la petite\n famille se retrouve soudain en territoire inconnu. Le\n temps de retrouver leur chemin, ils font une halte\n dans un gigantesque restaurant en plein air,\n totalement déserté.*\n\n __Catégories: **Enfants/Fantasy**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film79') {
        message.delete({ timeout: 2 })
        message.channel.send("__Trilogie des gemmes__\n\n *La Trilogie des gemmes (Liebe geht durch alle Zeiten ou Die Edelstein-Trilogie en allemand) est une série de romans fantastiques romantiques, écrits par l'auteur Kerstin Gier ;*\n\n __Catégories: **Fantasy/Romance**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film80') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Château ambulant__\n\n *Sophie, une orpheline de 18 ans, travaille dur dans la\n boutique de chapelier que lui a laissée son père. Un\n jour, en ville, elle croise Hauru, un magicien très\n séduisant mais faible de caractère. Une sorcière, se\n méprenant sur leurs sentiments, change Sophie en\n une vieille femme de 90 ans. Désespérée, Sophie\n erre dans la campagne quand elle aperçoit un\n étrange château qui se déplace sur d'immenses pattes.*\n\n __Catégories: **Fantasy/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film81') {
        message.delete({ timeout: 2 })
        message.channel.send("__Sherlock Holmes__\n\n *Aucune énigme ne résiste longtemps à Sherlock\n Holmes. Flanqué de son fidèle ami le Docteur John\n Watson, l'intrépide et légendaire détective traque\n sans relâche les criminels de tous poils. Ses armes :\n un sens aigu de l'observation et de la déduction, une\n érudition et une curiosité tous azimuts;\n accessoirement, une droite redoutable.*\n\n __Catégories: **Énigme/Mystère**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film82') {
        message.delete({ timeout: 2 })
        message.channel.send("__Robots__\n\n *Rodney, jeune robot idéaliste et talentueux, quitte son\n Écrouville natal pour la capitale Robotville dans le but\n de présenter son invention à son idole, Bigwel, le plus\n génial inventeur et bienfaiteur de tous les robots.*\n\n __Catégories: **Enfants/Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film83') {
        message.delete({ timeout: 2 })
        message.channel.send("__Mune : Le Gardien de la Lune__\n\n *Depuis le décès de sa mère, Mune, petit faune\n facétieux et maladroit, vit seul avec son père dans un\n monde fabuleux. Cet univers féerique ainsi que tous\n ses habitants frémissent d'impatience alors qu'une\n grande cérémonie va avoir lieu aux arènes. Après 350\n ans de bons et loyaux services, le gardien de la Lune\n et celui du Soleil vont passer le relais à de nouveaux venus.*\n\n __Catégories: **Fantasy/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film84') {
        message.delete({ timeout: 2 })
        message.channel.send("__Mon voisin Totoro__\n\n *Deux petites filles, Mei, 4 ans, et Satsuki, 10 ans,\n s'installent dans une grande maison à la campagne\n avec leur père pour se rapprocher de l'hôpital où\n séjourne leur mère. Elles découvrent la nature tout\n autour de la maison et, surtout, l'existence de\n créatures merveilleuses, les Totoros, avec qui elles\n deviennent très amies.*\n\n __Catégories: **Fantasy/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film85') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le Tombeau des lucioles__\n\n *Japon, été 1945. Les bombardiers américains\n arrosent Kobé de plusieurs milliers de tonnes de\n bombes incendiaires. Un jeune adolescent et sa\n petite soeur perdent leurs parents. Ils se réfugient\n dans leur famille proche mais cruelle. Leur quête\n désespérée d'un monde meilleur les amènera à\n traverser autant les ruines du Japon ensanglanté par\n la fin de cette guerre qu'à affronter l'indifférence et la\n cruauté des adultes...*\n\n __Catégories: **Guerre/Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film86') {
        message.delete({ timeout: 2 })
        message.channel.send("__Princesse Mononoké__\n\n *Ashitaka, un jeune guerrier japonais, affronte un\n sanglier géant et furieux qui attaque son village. Il tue\n la bête, mais se retrouve atteint par un mal\n mystérieux. Sur le conseil des sages, il part vers\n l'Ouest, à la recherche de ce qui a transformé l'animal\n en démon. Au cours de son périple, il rencontre San,\n une jeune fille qui vit avec les loups.*\n\n __Catégories: **Fantasy/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film87') {
        message.delete({ timeout: 2 })
        message.channel.send("__Si tu tends l’oreille__\n\n *Shizuku Tsukichima, une collégienne de 14 ans,\n est une jeune fille rêveuse et passionnée par les romans\n et les contes. Elle emprunte souvent des livres\n à la bibliothèque. Mais un jour, sur les fiches d’emprunt\n des romans, elle remarque qu’un mystérieux Amasawa\n Seiji lit exactement les mêmes ouvrages avant elle.\n Surprise, Shizuku veut en savoir plus sur cet inconnu.*\n\n __Catégories: **Romance/Enfants**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film88') {
        message.delete({ timeout: 2 })
        message.channel.send("__Je veux manger ton pancréas__\n\n *Sakura est une lycéenne populaire et pleine\n de vie. Tout l’opposé d'un de ses camarades solitaires qui,\n tombant par mégarde sur son journal intime, découvre\n qu’elle n’a plus que quelques mois à vivre...\n Unis par ce secret, ils se rapprochent et s'apprivoisent.*\n\n __Catégories: **Romance/Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film89') {
        message.delete({ timeout: 2 })
        message.channel.send("__Big Fish & Begonia__\n\n *Une adolescente est jetée dans une aventure\n fantastique et dangereuse après s'être transformée\n en dauphin. Quand un garçon se sacrifie pour la\n sauver, elle utilise de la magie pour le ramener à la\n vie et découvre qu'il y a un prix à payer.*\n\n __Catégories: **Fantasy/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film90') {
        message.delete({ timeout: 2 })
        message.channel.send("__Your Name__\n\n *Mitsuha, adolescente coincée dans une famille\n traditionnelle, rêve de quitter ses montagnes natales\n pour découvrir la vie trépidante de Tokyo. Elle est loin\n d'imaginer pouvoir vivre l'aventure urbaine dans la\n peau de... Taki, un jeune lycéen vivant à Tokyo. À\n travers ses rêves, Mitsuha se voit littéralement\n propulsée dans la vie du jeune garçon. Quel mystère\n se cache derrière ces rêves étranges qui unissent\n deux destinées que tout oppose et qui ne se sont\n jamais rencontrées ?*\n\n __Catégories: **Fantasy/Romance**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film91') {
        message.delete({ timeout: 2 })
        message.channel.send("__Je peux entendre l’océan__\n\n *Rikako Muto est une lycéenne de Tokyo\n qui vient s'établir à Kochi avec sa mère en cours d'année scolaire.\n Kochi est une ville sur l'île de Shikoku, au sud\n du Japon, très différente de Tokyo. Bien que\n bonne élève et charmante, Rikoku s'habitue mal\n à son nouvel environnement et ne s'intègre pas\n parmi les élèves.*\n\n __Catégories: **Drame/Romance**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film92') {
        message.delete({ timeout: 2 })
        message.channel.send("__The Greatest Showman__\n\n *Dans les années 1870, l'entrepreneur américain\n Phineas Taylor Barnum voit ses affaires se\n développer, notamment grâce aux `freak shows' et\n autres spectacles de cirque. P.T. Barnum est un\n visionnaire parti de rien pour créer un spectacle\n devenu un phénomène planétaire : le cirque Barnum\n & Bailey.*\n\n __Catégories: **Musical/Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film93') {
        message.delete({ timeout: 2 })
        message.channel.send("__Gladiator__\n\n *Le général romain Maximus est le plus fidèle soutien\n de l'empereur Marc Aurèle, qu'il a conduit de victoire\n en victoire. Jaloux du prestige de Maximus, et plus\n encore de l'amour que lui voue l'empereur, le fils de\n Marc Aurèle, Commode, s'arroge brutalement le\n pouvoir, puis ordonne l'arrestation du général et son exécution.*\n\n __Catégories: **Action/Aventure**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film94') {
        message.delete({ timeout: 2 })
        message.channel.send("__We Are Your Friends__\n\n *Cole, un DJ de 23 ans vit dans le milieu de l'électro et\n des nuits californiennes. La journée, il traîne avec ses\n amis d'enfance. La nuit il mixe, dans l'espoir de\n composer le son qui fera danser le monde entier. Son\n rêve semble alors possible lorsqu'il fait la\n connaissance de James, un DJ expérimenté, qui\n décide de le prendre sous son aile.*\n\n __Catégories: **Romance/Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film95') {
        message.delete({ timeout: 2 })
        message.channel.send("__Le paquet__\n\n *Après un regrettable accident survenu dans un\n moment de folie, quatre potes risquent tout, y compris\n leur dignité, pour que leur ami retrouve toute sa\n virilité.*\n\n __Catégorie: **Comédie**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
    if (command === prefix + 'film96') {
        message.delete({ timeout: 2 })
        message.channel.send("__Mon âme sœur__\n\n *Suite à une rupture douloureuse, Omowunmi décide\n d'attendre l'homme idéal. Sa dernière relation lui a fait\n tellement mal qu'elle est prête à attendre l'éternité\n pour trouver celui qui lui convient.*\n\n __Catégorie: **Drame**__").then(sent => sent.delete({ timeout: 25e3 }));
    }
});






client.login(process.env.TOKEN);