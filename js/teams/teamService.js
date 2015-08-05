app.service('teamService', function() {
	var teamInfo = {
		vicigaming: {
			name: "Vici Gaming",
			players: ["Hao", "Super", "iceiceice", "Fenrir", "fy"],
			wins: 6,
			losses: 11	
		},
		evilgeniuses: {
			name: "Evil Geniuses",
			players: ["Fear", "Suma1L", "UNiVeRsE", "Aui_2000", "ppd"],
			wins: 10,
			losses: 4
		},
		teamsecret: {
			name: "Team Secret",
			players: ["Arteezy", "s4", "zai", "KuroKy", "Puppey"],
			wins: 11,
			losses: 3
		},
		invictusgaming: {
			name: "Invictus Gaming",
			players: ["BurNing", "Ferrari_430", "Luo", "ChuaN", "Faith"],
			wins: 5,
			losses: 9
		},
		lgdgaming: {
			name: "LGD Gaming",
			players: ["Sylar", "Maybe", "Yao", "xiao8", "MMY!"],
			wins: 12,
			losses: 2
		},
		cloud9: {
			name: "Cloud9",
			players: ["EternalEnvy", "FATA-", "bOne7", "BigDaddy", "MiSeRy"],
			wins: 7,
			losses: 7
		},
		teamempire: {
			name: "Team Empire",
			players: ["Silent", "Resolut1on", "yoky", "ALOHADANCE", "ALWAYSWANNAFLY"],
			wins: 7,
			losses: 7
		},
		virtuspro: {
			name: "Virtus Pro",
			players: ["Illidan", "God", "DKPhobos", "fng", "Lil"],
			wins: 6,
			losses: 8
		},
		complexity: {
			name: "Complexity Gaming",
			players: ["Zyzzy", "swindlemelonzz", "MoonMeander", "Simbaaa", "Zfreek"],
			wins: 9,
			losses: 5
		},
		newbee: {
			name: "Newbee",
			players: ["Rabbit", "Mu", "June", "Banana", "SanSheng"],
			wins: 6,
			losses: 8
		},
		fnatic: {
			name: "Fnactic",
			players: ["kYxY", "Kecik Imba", "Ohaiyo", "JoHnNy", "Mushi"],
			wins: 4,
			losses: 10
		},
		ehome: {
			name: "EHOME",
			players: ["Yang", "Cty", "rOtK", "LaNm", "DDC"],
			wins: 9,
			losses: 5
		},
		navi: {
			name: "Natus Vincere",
			players: ["XBOCT", "Dendi", "Funn1k", "ArtStyle", "SoNNeikO"],
			wins: 3,
			losses: 11
		},
		cdec: {
			name: "CDEC Gaming",
			players: ["Agressif", "Shiki", "Xz", "Garder", "Q"],
			wins: 9,
			losses: 5
		},
		mvpp: {
			name: "MVP Phoenix",
			players: ["kphoenii", "QO", "March", "Febby", "NutZ"],
			wins: 5,
			losses: 9
		},
		mvph: {
			name: "MVP.Hot6ix",
			players: ["Forev", "MP", "SunBhie", "Heen", "JerAx"],
			wins: 2,
			losses: 12
		}
	}
	this.getTeamData = function(team) {
		return teamInfo[team];
	}
})