'use strict'

//automatic list from coinmarketcap api

var otherCoins = [{
    name: "bitcoin",
    code: "BTC",
    icon: "btc",
    longname: "Bitcoin",
    description: "Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin/"
    },
    rank: "1"
},{
    name: "ripple",
    code: "XRP",
    icon: "xrp",
    longname: "XRP",
    description: "XRP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ripple/"
    },
    rank: "2"
},{
    name: "ethereum",
    code: "ETH",
    icon: "eth",
    longname: "Ethereum",
    description: "Ethereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum/"
    },
    rank: "3"
},{
    name: "stellar",
    code: "XLM",
    icon: "xlm",
    longname: "Stellar",
    description: "Stellar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stellar/"
    },
    rank: "4"
},{
    name: "bitcoin-cash",
    code: "BCH",
    icon: "bch",
    longname: "Bitcoin Cash",
    description: "Bitcoin Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-cash/"
    },
    rank: "5"
},{
    name: "eos",
    code: "EOS",
    icon: "eos",
    longname: "EOS",
    description: "EOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eos/"
    },
    rank: "6"
},{
    name: "litecoin",
    code: "LTC",
    icon: "ltc",
    longname: "Litecoin",
    description: "Litecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin/"
    },
    rank: "7"
},{
    name: "tether",
    code: "USDT",
    icon: "usdt",
    longname: "Tether",
    description: "Tether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tether/"
    },
    rank: "8"
},{
    name: "bitcoin-sv",
    code: "BSV",
    icon: "bsv",
    longname: "Bitcoin SV",
    description: "Bitcoin SV coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-sv/"
    },
    rank: "9"
},{
    name: "cardano",
    code: "ADA",
    icon: "ada",
    longname: "Cardano",
    description: "Cardano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardano/"
    },
    rank: "10"
},{
    name: "tron",
    code: "TRX",
    icon: "trx",
    longname: "TRON",
    description: "TRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tron/"
    },
    rank: "11"
},{
    name: "monero",
    code: "XMR",
    icon: "xmr",
    longname: "Monero",
    description: "Monero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero/"
    },
    rank: "12"
},{
    name: "iota",
    code: "MIOTA",
    icon: "miota",
    longname: "IOTA",
    description: "IOTA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iota/"
    },
    rank: "13"
},{
    name: "binance-coin",
    code: "BNB",
    icon: "bnb",
    longname: "Binance Coin",
    description: "Binance Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/binance-coin/"
    },
    rank: "14"
},{
    name: "dash",
    code: "DASH",
    icon: "dash",
    longname: "Dash",
    description: "Dash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dash/"
    },
    rank: "15"
},{
    name: "nem",
    code: "XEM",
    icon: "xem",
    longname: "NEM",
    description: "NEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nem/"
    },
    rank: "16"
},{
    name: "neo",
    code: "NEO",
    icon: "neo",
    longname: "NEO",
    description: "NEO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neo/"
    },
    rank: "17"
},{
    name: "ethereum-classic",
    code: "ETC",
    icon: "etc",
    longname: "Ethereum Classic",
    description: "Ethereum Classic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-classic/"
    },
    rank: "18"
},{
    name: "zcash",
    code: "ZEC",
    icon: "zec",
    longname: "Zcash",
    description: "Zcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash/"
    },
    rank: "19"
},{
    name: "maker",
    code: "MKR",
    icon: "mkr",
    longname: "Maker",
    description: "Maker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maker/"
    },
    rank: "20"
},{
    name: "bitcoin-gold",
    code: "BTG",
    icon: "btg",
    longname: "Bitcoin Gold",
    description: "Bitcoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-gold/"
    },
    rank: "21"
},{
    name: "dogecoin",
    code: "DOGE",
    icon: "doge",
    longname: "Dogecoin",
    description: "Dogecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dogecoin/"
    },
    rank: "22"
},{
    name: "tezos",
    code: "XTZ",
    icon: "xtz",
    longname: "Tezos",
    description: "Tezos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tezos/"
    },
    rank: "23"
},{
    name: "vechain",
    code: "VET",
    icon: "vet",
    longname: "VeChain",
    description: "VeChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vechain/"
    },
    rank: "24"
},{
    name: "ontology",
    code: "ONT",
    icon: "ont",
    longname: "Ontology",
    description: "Ontology coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ontology/"
    },
    rank: "25"
},{
    name: "omisego",
    code: "OMG",
    icon: "omg",
    longname: "OmiseGO",
    description: "OmiseGO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omisego/"
    },
    rank: "26"
},{
    name: "waves",
    code: "WAVES",
    icon: "waves",
    longname: "Waves",
    description: "Waves coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves/"
    },
    rank: "27"
},{
    name: "0x",
    code: "ZRX",
    icon: "zrx",
    longname: "0x",
    description: "0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0x/"
    },
    rank: "28"
},{
    name: "basic-attention-token",
    code: "BAT",
    icon: "bat",
    longname: "Basic Attention Token",
    description: "Basic Attention Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/basic-attention-token/"
    },
    rank: "29"
},{
    name: "trueusd",
    code: "TUSD",
    icon: "tusd",
    longname: "TrueUSD",
    description: "TrueUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trueusd/"
    },
    rank: "30"
},{
    name: "paxos-standard-token",
    code: "PAX",
    icon: "pax",
    longname: "Paxos Standard Token",
    description: "Paxos Standard Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paxos-standard-token/"
    },
    rank: "31"
},{
    name: "decred",
    code: "DCR",
    icon: "dcr",
    longname: "Decred",
    description: "Decred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decred/"
    },
    rank: "32"
},{
    name: "qtum",
    code: "QTUM",
    icon: "qtum",
    longname: "Qtum",
    description: "Qtum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qtum/"
    },
    rank: "33"
},{
    name: "usd-coin",
    code: "USDC",
    icon: "usdc",
    longname: "USD Coin",
    description: "USD Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/usd-coin/"
    },
    rank: "34"
},{
    name: "lisk",
    code: "LSK",
    icon: "lsk",
    longname: "Lisk",
    description: "Lisk coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lisk/"
    },
    rank: "35"
},{
    name: "bitcoin-diamond",
    code: "BCD",
    icon: "bcd",
    longname: "Bitcoin Diamond",
    description: "Bitcoin Diamond coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-diamond/"
    },
    rank: "36"
},{
    name: "bytecoin-bcn",
    code: "BCN",
    icon: "bcn",
    longname: "Bytecoin",
    description: "Bytecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytecoin-bcn/"
    },
    rank: "37"
},{
    name: "digibyte",
    code: "DGB",
    icon: "dgb",
    longname: "DigiByte",
    description: "DigiByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digibyte/"
    },
    rank: "38"
},{
    name: "zilliqa",
    code: "ZIL",
    icon: "zil",
    longname: "Zilliqa",
    description: "Zilliqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilliqa/"
    },
    rank: "39"
},{
    name: "nano",
    code: "NANO",
    icon: "nano",
    longname: "Nano",
    description: "Nano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nano/"
    },
    rank: "40"
},{
    name: "bitshares",
    code: "BTS",
    icon: "bts",
    longname: "BitShares",
    description: "BitShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitshares/"
    },
    rank: "41"
},{
    name: "icon",
    code: "ICX",
    icon: "icx",
    longname: "ICON",
    description: "ICON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icon/"
    },
    rank: "42"
},{
    name: "aeternity",
    code: "AE",
    icon: "ae",
    longname: "Aeternity",
    description: "Aeternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeternity/"
    },
    rank: "43"
},{
    name: "aurora",
    code: "AOA",
    icon: "aoa",
    longname: "Aurora",
    description: "Aurora coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurora/"
    },
    rank: "44"
},{
    name: "verge",
    code: "XVG",
    icon: "xvg",
    longname: "Verge",
    description: "Verge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verge/"
    },
    rank: "45"
},{
    name: "siacoin",
    code: "SC",
    icon: "sc",
    longname: "Siacoin",
    description: "Siacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/siacoin/"
    },
    rank: "46"
},{
    name: "factom",
    code: "FCT",
    icon: "fct",
    longname: "Factom",
    description: "Factom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/factom/"
    },
    rank: "47"
},{
    name: "pundi-x",
    code: "NPXS",
    icon: "npxs",
    longname: "Pundi X",
    description: "Pundi X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pundi-x/"
    },
    rank: "48"
},{
    name: "chainlink",
    code: "LINK",
    icon: "link",
    longname: "Chainlink",
    description: "Chainlink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chainlink/"
    },
    rank: "49"
},{
    name: "steem",
    code: "STEEM",
    icon: "steem",
    longname: "Steem",
    description: "Steem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steem/"
    },
    rank: "50"
},{
    name: "bytom",
    code: "BTM",
    icon: "btm",
    longname: "Bytom",
    description: "Bytom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytom/"
    },
    rank: "51"
},{
    name: "populous",
    code: "PPT",
    icon: "ppt",
    longname: "Populous",
    description: "Populous coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/populous/"
    },
    rank: "52"
},{
    name: "golem-network-tokens",
    code: "GNT",
    icon: "gnt",
    longname: "Golem",
    description: "Golem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golem-network-tokens/"
    },
    rank: "53"
},{
    name: "stratis",
    code: "STRAT",
    icon: "strat",
    longname: "Stratis",
    description: "Stratis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stratis/"
    },
    rank: "54"
},{
    name: "augur",
    code: "REP",
    icon: "rep",
    longname: "Augur",
    description: "Augur coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/augur/"
    },
    rank: "55"
},{
    name: "komodo",
    code: "KMD",
    icon: "kmd",
    longname: "Komodo",
    description: "Komodo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/komodo/"
    },
    rank: "56"
},{
    name: "qash",
    code: "QASH",
    icon: "qash",
    longname: "QASH",
    description: "QASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qash/"
    },
    rank: "57"
},{
    name: "nexo",
    code: "NEXO",
    icon: "nexo",
    longname: "Nexo",
    description: "Nexo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexo/"
    },
    rank: "58"
},{
    name: "decentraland",
    code: "MANA",
    icon: "mana",
    longname: "Decentraland",
    description: "Decentraland coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decentraland/"
    },
    rank: "59"
},{
    name: "holo",
    code: "HOT",
    icon: "hot",
    longname: "Holo",
    description: "Holo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/holo/"
    },
    rank: "60"
},{
    name: "electroneum",
    code: "ETN",
    icon: "etn",
    longname: "Electroneum",
    description: "Electroneum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electroneum/"
    },
    rank: "61"
},{
    name: "status",
    code: "SNT",
    icon: "snt",
    longname: "Status",
    description: "Status coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/status/"
    },
    rank: "62"
},{
    name: "cryptonex",
    code: "CNX",
    icon: "cnx",
    longname: "Cryptonex",
    description: "Cryptonex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptonex/"
    },
    rank: "63"
},{
    name: "maidsafecoin",
    code: "MAID",
    icon: "maid",
    longname: "MaidSafeCoin",
    description: "MaidSafeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maidsafecoin/"
    },
    rank: "64"
},{
    name: "huobi-token",
    code: "HT",
    icon: "ht",
    longname: "Huobi Token",
    description: "Huobi Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huobi-token/"
    },
    rank: "65"
},{
    name: "dai",
    code: "DAI",
    icon: "dai",
    longname: "Dai",
    description: "Dai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dai/"
    },
    rank: "66"
},{
    name: "revain",
    code: "R",
    icon: "r",
    longname: "Revain",
    description: "Revain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revain/"
    },
    rank: "67"
},{
    name: "ardor",
    code: "ARDR",
    icon: "ardr",
    longname: "Ardor",
    description: "Ardor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ardor/"
    },
    rank: "68"
},{
    name: "dex",
    code: "DEX",
    icon: "dex",
    longname: "DEX",
    description: "DEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dex/"
    },
    rank: "69"
},{
    name: "wax",
    code: "WAX",
    icon: "wax",
    longname: "WAX",
    description: "WAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wax/"
    },
    rank: "70"
},{
    name: "odem",
    code: "ODE",
    icon: "ode",
    longname: "ODEM",
    description: "ODEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/odem/"
    },
    rank: "71"
},{
    name: "iostoken",
    code: "IOST",
    icon: "iost",
    longname: "IOST",
    description: "IOST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iostoken/"
    },
    rank: "72"
},{
    name: "kucoin-shares",
    code: "KCS",
    icon: "kcs",
    longname: "KuCoin Shares",
    description: "KuCoin Shares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kucoin-shares/"
    },
    rank: "73"
},{
    name: "gemini-dollar",
    code: "GUSD",
    icon: "gusd",
    longname: "Gemini Dollar",
    description: "Gemini Dollar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gemini-dollar/"
    },
    rank: "74"
},{
    name: "mobilego",
    code: "MGO",
    icon: "mgo",
    longname: "MobileGo",
    description: "MobileGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobilego/"
    },
    rank: "75"
},{
    name: "theta-token",
    code: "THETA",
    icon: "theta",
    longname: "Theta Token",
    description: "Theta Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/theta-token/"
    },
    rank: "76"
},{
    name: "waltonchain",
    code: "WTC",
    icon: "wtc",
    longname: "Waltonchain",
    description: "Waltonchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waltonchain/"
    },
    rank: "77"
},{
    name: "metaverse",
    code: "ETP",
    icon: "etp",
    longname: "Metaverse ETP",
    description: "Metaverse ETP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metaverse/"
    },
    rank: "78"
},{
    name: "moac",
    code: "MOAC",
    icon: "moac",
    longname: "MOAC",
    description: "MOAC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moac/"
    },
    rank: "79"
},{
    name: "mithril",
    code: "MITH",
    icon: "mith",
    longname: "Mithril",
    description: "Mithril coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mithril/"
    },
    rank: "80"
},{
    name: "wanchain",
    code: "WAN",
    icon: "wan",
    longname: "Wanchain",
    description: "Wanchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wanchain/"
    },
    rank: "81"
},{
    name: "insight-chain",
    code: "INB",
    icon: "inb",
    longname: "Insight Chain",
    description: "Insight Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insight-chain/"
    },
    rank: "82"
},{
    name: "pivx",
    code: "PIVX",
    icon: "pivx",
    longname: "PIVX",
    description: "PIVX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pivx/"
    },
    rank: "83"
},{
    name: "reddcoin",
    code: "RDD",
    icon: "rdd",
    longname: "ReddCoin",
    description: "ReddCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reddcoin/"
    },
    rank: "84"
},{
    name: "ravencoin",
    code: "RVN",
    icon: "rvn",
    longname: "Ravencoin",
    description: "Ravencoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ravencoin/"
    },
    rank: "85"
},{
    name: "elastos",
    code: "ELA",
    icon: "ela",
    longname: "Elastos",
    description: "Elastos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elastos/"
    },
    rank: "86"
},{
    name: "aion",
    code: "AION",
    icon: "aion",
    longname: "Aion",
    description: "Aion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aion/"
    },
    rank: "87"
},{
    name: "ark",
    code: "ARK",
    icon: "ark",
    longname: "Ark",
    description: "Ark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ark/"
    },
    rank: "88"
},{
    name: "gxchain",
    code: "GXS",
    icon: "gxs",
    longname: "GXChain",
    description: "GXChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gxchain/"
    },
    rank: "89"
},{
    name: "bitcoin-private",
    code: "BTCP",
    icon: "btcp",
    longname: "Bitcoin Private",
    description: "Bitcoin Private coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-private/"
    },
    rank: "90"
},{
    name: "monacoin",
    code: "MONA",
    icon: "mona",
    longname: "MonaCoin",
    description: "MonaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacoin/"
    },
    rank: "91"
},{
    name: "bancor",
    code: "BNT",
    icon: "bnt",
    longname: "Bancor",
    description: "Bancor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bancor/"
    },
    rank: "92"
},{
    name: "crypto-com",
    code: "MCO",
    icon: "mco",
    longname: "Crypto.com",
    description: "Crypto.com coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypto-com/"
    },
    rank: "93"
},{
    name: "hypercash",
    code: "HC",
    icon: "hc",
    longname: "HyperCash",
    description: "HyperCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hypercash/"
    },
    rank: "94"
},{
    name: "centrality",
    code: "CENNZ",
    icon: "cennz",
    longname: "Centrality",
    description: "Centrality coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centrality/"
    },
    rank: "95"
},{
    name: "polymath-network",
    code: "POLY",
    icon: "poly",
    longname: "Polymath",
    description: "Polymath coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polymath-network/"
    },
    rank: "96"
},{
    name: "zcoin",
    code: "XZC",
    icon: "xzc",
    longname: "Zcoin",
    description: "Zcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcoin/"
    },
    rank: "97"
},{
    name: "sirin-labs-token",
    code: "SRN",
    icon: "srn",
    longname: "SIRIN LABS Token",
    description: "SIRIN LABS Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sirin-labs-token/"
    },
    rank: "98"
},{
    name: "power-ledger",
    code: "POWR",
    icon: "powr",
    longname: "Power Ledger",
    description: "Power Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/power-ledger/"
    },
    rank: "99"
},{
    name: "aelf",
    code: "ELF",
    icon: "elf",
    longname: "aelf",
    description: "aelf coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aelf/"
    },
    rank: "100"
},{
    name: "mixin",
    code: "XIN",
    icon: "xin",
    longname: "Mixin",
    description: "Mixin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mixin/"
    },
    rank: "101"
},{
    name: "loopring",
    code: "LRC",
    icon: "lrc",
    longname: "Loopring",
    description: "Loopring coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loopring/"
    },
    rank: "102"
},{
    name: "nxt",
    code: "NXT",
    icon: "nxt",
    longname: "Nxt",
    description: "Nxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nxt/"
    },
    rank: "103"
},{
    name: "linkey",
    code: "LKY",
    icon: "lky",
    longname: "Linkey",
    description: "Linkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linkey/"
    },
    rank: "104"
},{
    name: "digixdao",
    code: "DGD",
    icon: "dgd",
    longname: "DigixDAO",
    description: "DigixDAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digixdao/"
    },
    rank: "105"
},{
    name: "quarkchain",
    code: "QKC",
    icon: "qkc",
    longname: "QuarkChain",
    description: "QuarkChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quarkchain/"
    },
    rank: "106"
},{
    name: "gold-bits-coin",
    code: "GBC",
    icon: "gbc",
    longname: "Gold Bits Coin",
    description: "Gold Bits Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gold-bits-coin/"
    },
    rank: "107"
},{
    name: "zencash",
    code: "ZEN",
    icon: "zen",
    longname: "Horizen",
    description: "Horizen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zencash/"
    },
    rank: "108"
},{
    name: "free-coin",
    code: "FREE",
    icon: "free",
    longname: "FREE Coin",
    description: "FREE Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/free-coin/"
    },
    rank: "109"
},{
    name: "cybermiles",
    code: "CMT",
    icon: "cmt",
    longname: "CyberMiles",
    description: "CyberMiles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybermiles/"
    },
    rank: "110"
},{
    name: "nebulas-token",
    code: "NAS",
    icon: "nas",
    longname: "Nebulas",
    description: "Nebulas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nebulas-token/"
    },
    rank: "111"
},{
    name: "loom-network",
    code: "LOOM",
    icon: "loom",
    longname: "Loom Network",
    description: "Loom Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loom-network/"
    },
    rank: "112"
},{
    name: "digitex-futures",
    code: "DGTX",
    icon: "dgtx",
    longname: "Digitex Futures",
    description: "Digitex Futures coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitex-futures/"
    },
    rank: "113"
},{
    name: "stasis-eurs",
    code: "EURS",
    icon: "eurs",
    longname: "STASIS EURS",
    description: "STASIS EURS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stasis-eurs/"
    },
    rank: "114"
},{
    name: "tenx",
    code: "PAY",
    icon: "pay",
    longname: "TenX",
    description: "TenX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tenx/"
    },
    rank: "115"
},{
    name: "veritaseum",
    code: "VERI",
    icon: "veri",
    longname: "Veritaseum",
    description: "Veritaseum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veritaseum/"
    },
    rank: "116"
},{
    name: "endor-protocol",
    code: "EDR",
    icon: "edr",
    longname: "Endor Protocol",
    description: "Endor Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/endor-protocol/"
    },
    rank: "117"
},{
    name: "boscoin",
    code: "BOS",
    icon: "bos",
    longname: "BOScoin",
    description: "BOScoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boscoin/"
    },
    rank: "118"
},{
    name: "smartlands",
    code: "SLT",
    icon: "slt",
    longname: "Smartlands",
    description: "Smartlands coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartlands/"
    },
    rank: "119"
},{
    name: "nasdacoin",
    code: "NSD",
    icon: "nsd",
    longname: "Nasdacoin",
    description: "Nasdacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nasdacoin/"
    },
    rank: "120"
},{
    name: "proximax",
    code: "XPX",
    icon: "xpx",
    longname: "ProximaX",
    description: "ProximaX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proximax/"
    },
    rank: "121"
},{
    name: "dropil",
    code: "DROP",
    icon: "drop",
    longname: "Dropil",
    description: "Dropil coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dropil/"
    },
    rank: "122"
},{
    name: "dentacoin",
    code: "DCN",
    icon: "dcn",
    longname: "Dentacoin",
    description: "Dentacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dentacoin/"
    },
    rank: "123"
},{
    name: "nectar",
    code: "NEC",
    icon: "nec",
    longname: "Nectar",
    description: "Nectar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nectar/"
    },
    rank: "124"
},{
    name: "funfair",
    code: "FUN",
    icon: "fun",
    longname: "FunFair",
    description: "FunFair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/funfair/"
    },
    rank: "125"
},{
    name: "singularitynet",
    code: "AGI",
    icon: "agi",
    longname: "SingularityNET",
    description: "SingularityNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singularitynet/"
    },
    rank: "126"
},{
    name: "dragonchain",
    code: "DRGN",
    icon: "drgn",
    longname: "Dragonchain",
    description: "Dragonchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragonchain/"
    },
    rank: "127"
},{
    name: "kyber-network",
    code: "KNC",
    icon: "knc",
    longname: "Kyber Network",
    description: "Kyber Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kyber-network/"
    },
    rank: "128"
},{
    name: "waykichain",
    code: "WICC",
    icon: "wicc",
    longname: "WaykiChain",
    description: "WaykiChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waykichain/"
    },
    rank: "129"
},{
    name: "bhpcash",
    code: "BHPC",
    icon: "bhpc",
    longname: "BHPCash",
    description: "BHPCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bhpcash/"
    },
    rank: "130"
},{
    name: "gas",
    code: "GAS",
    icon: "gas",
    longname: "Gas",
    description: "Gas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gas/"
    },
    rank: "131"
},{
    name: "kin",
    code: "KIN",
    icon: "kin",
    longname: "Kin",
    description: "Kin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kin/"
    },
    rank: "132"
},{
    name: "syscoin",
    code: "SYS",
    icon: "sys",
    longname: "Syscoin",
    description: "Syscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syscoin/"
    },
    rank: "133"
},{
    name: "storj",
    code: "STORJ",
    icon: "storj",
    longname: "Storj",
    description: "Storj coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storj/"
    },
    rank: "134"
},{
    name: "xyo-network",
    code: "XYO",
    icon: "xyo",
    longname: "XYO Network",
    description: "XYO Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xyo-network/"
    },
    rank: "135"
},{
    name: "eidoo",
    code: "EDO",
    icon: "edo",
    longname: "Eidoo",
    description: "Eidoo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eidoo/"
    },
    rank: "136"
},{
    name: "enigma",
    code: "ENG",
    icon: "eng",
    longname: "Enigma",
    description: "Enigma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enigma/"
    },
    rank: "137"
},{
    name: "thekey",
    code: "TKY",
    icon: "tky",
    longname: "THEKEY",
    description: "THEKEY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thekey/"
    },
    rank: "138"
},{
    name: "bread",
    code: "BRD",
    icon: "brd",
    longname: "Bread",
    description: "Bread coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bread/"
    },
    rank: "139"
},{
    name: "civic",
    code: "CVC",
    icon: "cvc",
    longname: "Civic",
    description: "Civic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/civic/"
    },
    rank: "140"
},{
    name: "enjin-coin",
    code: "ENJ",
    icon: "enj",
    longname: "Enjin Coin",
    description: "Enjin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enjin-coin/"
    },
    rank: "141"
},{
    name: "gochain",
    code: "GO",
    icon: "go",
    longname: "GoChain",
    description: "GoChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gochain/"
    },
    rank: "142"
},{
    name: "bibox-token",
    code: "BIX",
    icon: "bix",
    longname: "Bibox Token",
    description: "Bibox Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bibox-token/"
    },
    rank: "143"
},{
    name: "groestlcoin",
    code: "GRS",
    icon: "grs",
    longname: "Groestlcoin",
    description: "Groestlcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/groestlcoin/"
    },
    rank: "144"
},{
    name: "byteball",
    code: "GBYTE",
    icon: "gbyte",
    longname: "Byteball Bytes",
    description: "Byteball Bytes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/byteball/"
    },
    rank: "145"
},{
    name: "dent",
    code: "DENT",
    icon: "dent",
    longname: "Dent",
    description: "Dent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dent/"
    },
    rank: "146"
},{
    name: "genesis-vision",
    code: "GVT",
    icon: "gvt",
    longname: "Genesis Vision",
    description: "Genesis Vision coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/genesis-vision/"
    },
    rank: "147"
},{
    name: "nuls",
    code: "NULS",
    icon: "nuls",
    longname: "Nuls",
    description: "Nuls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nuls/"
    },
    rank: "148"
},{
    name: "salt",
    code: "SALT",
    icon: "salt",
    longname: "SALT",
    description: "SALT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salt/"
    },
    rank: "149"
},{
    name: "fusion",
    code: "FSN",
    icon: "fsn",
    longname: "Fusion",
    description: "Fusion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fusion/"
    },
    rank: "150"
},{
    name: "pumapay",
    code: "PMA",
    icon: "pma",
    longname: "PumaPay",
    description: "PumaPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pumapay/"
    },
    rank: "151"
},{
    name: "particl",
    code: "PART",
    icon: "part",
    longname: "Particl",
    description: "Particl coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/particl/"
    },
    rank: "152"
},{
    name: "cortex",
    code: "CTXC",
    icon: "ctxc",
    longname: "Cortex",
    description: "Cortex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cortex/"
    },
    rank: "153"
},{
    name: "smartcash",
    code: "SMART",
    icon: "smart",
    longname: "SmartCash",
    description: "SmartCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcash/"
    },
    rank: "154"
},{
    name: "dynamic-trading-rights",
    code: "DTR",
    icon: "dtr",
    longname: "Dynamic Trading Rights",
    description: "Dynamic Trading Rights coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic-trading-rights/"
    },
    rank: "155"
},{
    name: "substratum",
    code: "SUB",
    icon: "sub",
    longname: "Substratum",
    description: "Substratum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/substratum/"
    },
    rank: "156"
},{
    name: "request-network",
    code: "REQ",
    icon: "req",
    longname: "Request Network",
    description: "Request Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/request-network/"
    },
    rank: "157"
},{
    name: "storm",
    code: "STORM",
    icon: "storm",
    longname: "Storm",
    description: "Storm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storm/"
    },
    rank: "158"
},{
    name: "apis",
    code: "APIS",
    icon: "apis",
    longname: "APIS",
    description: "APIS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apis/"
    },
    rank: "159"
},{
    name: "peercoin",
    code: "PPC",
    icon: "ppc",
    longname: "Peercoin",
    description: "Peercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peercoin/"
    },
    rank: "160"
},{
    name: "credo",
    code: "CREDO",
    icon: "credo",
    longname: "Credo",
    description: "Credo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credo/"
    },
    rank: "161"
},{
    name: "rlc",
    code: "RLC",
    icon: "rlc",
    longname: "iExec RLC",
    description: "iExec RLC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rlc/"
    },
    rank: "162"
},{
    name: "iconomi",
    code: "ICN",
    icon: "icn",
    longname: "Iconomi",
    description: "Iconomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconomi/"
    },
    rank: "163"
},{
    name: "cindicator",
    code: "CND",
    icon: "cnd",
    longname: "Cindicator",
    description: "Cindicator coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cindicator/"
    },
    rank: "164"
},{
    name: "odyssey",
    code: "OCN",
    icon: "ocn",
    longname: "Odyssey",
    description: "Odyssey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/odyssey/"
    },
    rank: "165"
},{
    name: "eternal-token",
    code: "XET",
    icon: "xet",
    longname: "ETERNAL TOKEN",
    description: "ETERNAL TOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eternal-token/"
    },
    rank: "166"
},{
    name: "nexus",
    code: "NXS",
    icon: "nxs",
    longname: "Nexus",
    description: "Nexus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexus/"
    },
    rank: "167"
},{
    name: "tokenomy",
    code: "TEN",
    icon: "ten",
    longname: "Tokenomy",
    description: "Tokenomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenomy/"
    },
    rank: "168"
},{
    name: "bezant",
    code: "BZNT",
    icon: "bznt",
    longname: "Bezant",
    description: "Bezant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bezant/"
    },
    rank: "169"
},{
    name: "rchain",
    code: "RHOC",
    icon: "rhoc",
    longname: "RChain",
    description: "RChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rchain/"
    },
    rank: "170"
},{
    name: "everipedia",
    code: "IQ",
    icon: "iq",
    longname: "Everipedia",
    description: "Everipedia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/everipedia/"
    },
    rank: "171"
},{
    name: "prizm",
    code: "PZM",
    icon: "pzm",
    longname: "PRIZM",
    description: "PRIZM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prizm/"
    },
    rank: "172"
},{
    name: "ignis",
    code: "IGNIS",
    icon: "ignis",
    longname: "Ignis",
    description: "Ignis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ignis/"
    },
    rank: "173"
},{
    name: "gifto",
    code: "GTO",
    icon: "gto",
    longname: "Gifto",
    description: "Gifto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gifto/"
    },
    rank: "174"
},{
    name: "moeda-loyalty-points",
    code: "MDA",
    icon: "mda",
    longname: "Moeda Loyalty Points",
    description: "Moeda Loyalty Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moeda-loyalty-points/"
    },
    rank: "175"
},{
    name: "credits",
    code: "CS",
    icon: "cs",
    longname: "Credits",
    description: "Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credits/"
    },
    rank: "176"
},{
    name: "optimal-shelf-availability-token",
    code: "OSA",
    icon: "osa",
    longname: "Optimal Shelf Availability Token",
    description: "Optimal Shelf Availability Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/optimal-shelf-availability-token/"
    },
    rank: "177"
},{
    name: "mainframe",
    code: "MFT",
    icon: "mft",
    longname: "Mainframe",
    description: "Mainframe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mainframe/"
    },
    rank: "178"
},{
    name: "telcoin",
    code: "TEL",
    icon: "tel",
    longname: "Telcoin",
    description: "Telcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/telcoin/"
    },
    rank: "179"
},{
    name: "c20",
    code: "C20",
    icon: "c20",
    longname: "CRYPTO20",
    description: "CRYPTO20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/c20/"
    },
    rank: "180"
},{
    name: "matrix-ai-network",
    code: "MAN",
    icon: "man",
    longname: "Matrix AI Network",
    description: "Matrix AI Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/matrix-ai-network/"
    },
    rank: "181"
},{
    name: "emercoin",
    code: "EMC",
    icon: "emc",
    longname: "Emercoin",
    description: "Emercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emercoin/"
    },
    rank: "182"
},{
    name: "vertcoin",
    code: "VTC",
    icon: "vtc",
    longname: "Vertcoin",
    description: "Vertcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vertcoin/"
    },
    rank: "183"
},{
    name: "neblio",
    code: "NEBL",
    icon: "nebl",
    longname: "Neblio",
    description: "Neblio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neblio/"
    },
    rank: "184"
},{
    name: "einsteinium",
    code: "EMC2",
    icon: "emc2",
    longname: "Einsteinium",
    description: "Einsteinium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/einsteinium/"
    },
    rank: "185"
},{
    name: "pillar",
    code: "PLR",
    icon: "plr",
    longname: "Pillar",
    description: "Pillar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pillar/"
    },
    rank: "186"
},{
    name: "santiment",
    code: "SAN",
    icon: "san",
    longname: "Santiment Network Token",
    description: "Santiment Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/santiment/"
    },
    rank: "187"
},{
    name: "noah-coin",
    code: "NOAH",
    icon: "noah",
    longname: "Noah Coin",
    description: "Noah Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noah-coin/"
    },
    rank: "188"
},{
    name: "vitae",
    code: "VITAE",
    icon: "vitae",
    longname: "Vitae",
    description: "Vitae coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vitae/"
    },
    rank: "189"
},{
    name: "arbitrage",
    code: "ARB",
    icon: "arb",
    longname: "ARBITRAGE",
    description: "ARBITRAGE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbitrage/"
    },
    rank: "190"
},{
    name: "poet",
    code: "POE",
    icon: "poe",
    longname: "Po.et",
    description: "Po.et coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poet/"
    },
    rank: "191"
},{
    name: "gnosis-gno",
    code: "GNO",
    icon: "gno",
    longname: "Gnosis",
    description: "Gnosis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gnosis-gno/"
    },
    rank: "192"
},{
    name: "streamr-datacoin",
    code: "DATA",
    icon: "data",
    longname: "Streamr DATAcoin",
    description: "Streamr DATAcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/streamr-datacoin/"
    },
    rank: "193"
},{
    name: "buggyra-coin-zero",
    code: "BCZERO",
    icon: "bczero",
    longname: "Buggyra Coin Zero",
    description: "Buggyra Coin Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/buggyra-coin-zero/"
    },
    rank: "194"
},{
    name: "quant",
    code: "QNT",
    icon: "qnt",
    longname: "Quant",
    description: "Quant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quant/"
    },
    rank: "195"
},{
    name: "dmarket",
    code: "DMT",
    icon: "dmt",
    longname: "DMarket",
    description: "DMarket coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dmarket/"
    },
    rank: "196"
},{
    name: "tokenpay",
    code: "TPAY",
    icon: "tpay",
    longname: "TokenPay",
    description: "TokenPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenpay/"
    },
    rank: "197"
},{
    name: "wagerr",
    code: "WGR",
    icon: "wgr",
    longname: "Wagerr",
    description: "Wagerr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wagerr/"
    },
    rank: "198"
},{
    name: "raiden-network-token",
    code: "RDN",
    icon: "rdn",
    longname: "Raiden Network Token",
    description: "Raiden Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/raiden-network-token/"
    },
    rank: "199"
},{
    name: "cube",
    code: "AUTO",
    icon: "auto",
    longname: "Cube",
    description: "Cube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cube/"
    },
    rank: "200"
},{
    name: "oneroot-network",
    code: "RNT",
    icon: "rnt",
    longname: "OneRoot Network",
    description: "OneRoot Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oneroot-network/"
    },
    rank: "201"
},{
    name: "amo-coin",
    code: "AMO",
    icon: "amo",
    longname: "AMO Coin",
    description: "AMO Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amo-coin/"
    },
    rank: "202"
},{
    name: "unobtanium",
    code: "UNO",
    icon: "uno",
    longname: "Unobtanium",
    description: "Unobtanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unobtanium/"
    },
    rank: "203"
},{
    name: "energi",
    code: "NRG",
    icon: "nrg",
    longname: "Energi",
    description: "Energi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energi/"
    },
    rank: "204"
},{
    name: "aragon",
    code: "ANT",
    icon: "ant",
    longname: "Aragon",
    description: "Aragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aragon/"
    },
    rank: "205"
},{
    name: "burst",
    code: "BURST",
    icon: "burst",
    longname: "Burst",
    description: "Burst coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/burst/"
    },
    rank: "206"
},{
    name: "bnktothefuture",
    code: "BFT",
    icon: "bft",
    longname: "BnkToTheFuture",
    description: "BnkToTheFuture coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bnktothefuture/"
    },
    rank: "207"
},{
    name: "iotex",
    code: "IOTX",
    icon: "iotx",
    longname: "IoTeX",
    description: "IoTeX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iotex/"
    },
    rank: "208"
},{
    name: "ost",
    code: "OST",
    icon: "ost",
    longname: "OST",
    description: "OST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ost/"
    },
    rank: "209"
},{
    name: "tomochain",
    code: "TOMO",
    icon: "tomo",
    longname: "TomoChain",
    description: "TomoChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tomochain/"
    },
    rank: "210"
},{
    name: "nucleus-vision",
    code: "NCASH",
    icon: "ncash",
    longname: "Nucleus Vision",
    description: "Nucleus Vision coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nucleus-vision/"
    },
    rank: "211"
},{
    name: "skycoin",
    code: "SKY",
    icon: "sky",
    longname: "Skycoin",
    description: "Skycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skycoin/"
    },
    rank: "212"
},{
    name: "republic-protocol",
    code: "REN",
    icon: "ren",
    longname: "Republic Protocol",
    description: "Republic Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/republic-protocol/"
    },
    rank: "213"
},{
    name: "scryinfo",
    code: "DDD",
    icon: "ddd",
    longname: "Scry.info",
    description: "Scry.info coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scryinfo/"
    },
    rank: "214"
},{
    name: "safe-exchange-coin",
    code: "SAFEX",
    icon: "safex",
    longname: "Safe Exchange Coin",
    description: "Safe Exchange Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safe-exchange-coin/"
    },
    rank: "215"
},{
    name: "truechain",
    code: "TRUE",
    icon: "true",
    longname: "TrueChain",
    description: "TrueChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/truechain/"
    },
    rank: "216"
},{
    name: "wowbit",
    code: "WWB",
    icon: "wwb",
    longname: "Wowbit",
    description: "Wowbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wowbit/"
    },
    rank: "217"
},{
    name: "amber",
    code: "AMB",
    icon: "amb",
    longname: "Ambrosus",
    description: "Ambrosus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amber/"
    },
    rank: "218"
},{
    name: "medx",
    code: "MEDX",
    icon: "medx",
    longname: "MediBloc [ERC20]",
    description: "MediBloc [ERC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medx/"
    },
    rank: "219"
},{
    name: "high-performance-blockchain",
    code: "HPB",
    icon: "hpb",
    longname: "High Performance Blockchain",
    description: "High Performance Blockchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/high-performance-blockchain/"
    },
    rank: "220"
},{
    name: "bluzelle",
    code: "BLZ",
    icon: "blz",
    longname: "Bluzelle",
    description: "Bluzelle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluzelle/"
    },
    rank: "221"
},{
    name: "bridgecoin",
    code: "BCO",
    icon: "bco",
    longname: "BridgeCoin",
    description: "BridgeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bridgecoin/"
    },
    rank: "222"
},{
    name: "bitcny",
    code: "BITCNY",
    icon: "bitcny",
    longname: "bitCNY",
    description: "bitCNY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcny/"
    },
    rank: "223"
},{
    name: "box-token",
    code: "BOX",
    icon: "box",
    longname: "BOX Token",
    description: "BOX Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/box-token/"
    },
    rank: "224"
},{
    name: "utrust",
    code: "UTK",
    icon: "utk",
    longname: "UTRUST",
    description: "UTRUST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/utrust/"
    },
    rank: "225"
},{
    name: "quantum-resistant-ledger",
    code: "QRL",
    icon: "qrl",
    longname: "Quantum Resistant Ledger",
    description: "Quantum Resistant Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantum-resistant-ledger/"
    },
    rank: "226"
},{
    name: "ubiq",
    code: "UBQ",
    icon: "ubq",
    longname: "Ubiq",
    description: "Ubiq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubiq/"
    },
    rank: "227"
},{
    name: "nav-coin",
    code: "NAV",
    icon: "nav",
    longname: "NavCoin",
    description: "NavCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nav-coin/"
    },
    rank: "228"
},{
    name: "tokenclub",
    code: "TCT",
    icon: "tct",
    longname: "TokenClub",
    description: "TokenClub coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenclub/"
    },
    rank: "229"
},{
    name: "crypterium",
    code: "CRPT",
    icon: "crpt",
    longname: "Crypterium",
    description: "Crypterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypterium/"
    },
    rank: "230"
},{
    name: "ethos",
    code: "ETHOS",
    icon: "ethos",
    longname: "Ethos",
    description: "Ethos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethos/"
    },
    rank: "231"
},{
    name: "whitecoin",
    code: "XWC",
    icon: "xwc",
    longname: "WhiteCoin",
    description: "WhiteCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whitecoin/"
    },
    rank: "232"
},{
    name: "metal",
    code: "MTL",
    icon: "mtl",
    longname: "Metal",
    description: "Metal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metal/"
    },
    rank: "233"
},{
    name: "quantstamp",
    code: "QSP",
    icon: "qsp",
    longname: "Quantstamp",
    description: "Quantstamp coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantstamp/"
    },
    rank: "234"
},{
    name: "ruff",
    code: "RUFF",
    icon: "ruff",
    longname: "Ruff",
    description: "Ruff coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ruff/"
    },
    rank: "235"
},{
    name: "swarm-fund",
    code: "SWM",
    icon: "swm",
    longname: "Swarm",
    description: "Swarm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-fund/"
    },
    rank: "236"
},{
    name: "salus",
    code: "SLS",
    icon: "sls",
    longname: "SaluS",
    description: "SaluS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salus/"
    },
    rank: "237"
},{
    name: "blocknet",
    code: "BLOCK",
    icon: "block",
    longname: "Blocknet",
    description: "Blocknet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocknet/"
    },
    rank: "238"
},{
    name: "jibrel-network",
    code: "JNT",
    icon: "jnt",
    longname: "Jibrel Network",
    description: "Jibrel Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jibrel-network/"
    },
    rank: "239"
},{
    name: "steem-dollars",
    code: "SBD",
    icon: "sbd",
    longname: "Steem Dollars",
    description: "Steem Dollars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steem-dollars/"
    },
    rank: "240"
},{
    name: "libra-credit",
    code: "LBA",
    icon: "lba",
    longname: "Cred",
    description: "Cred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/libra-credit/"
    },
    rank: "241"
},{
    name: "smartmesh",
    code: "SMT",
    icon: "smt",
    longname: "SmartMesh",
    description: "SmartMesh coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartmesh/"
    },
    rank: "242"
},{
    name: "darcio-ecosystem-coin",
    code: "DEC",
    icon: "dec",
    longname: "Darico Ecosystem Coin",
    description: "Darico Ecosystem Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darcio-ecosystem-coin/"
    },
    rank: "243"
},{
    name: "time-new-bank",
    code: "TNB",
    icon: "tnb",
    longname: "Time New Bank",
    description: "Time New Bank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/time-new-bank/"
    },
    rank: "244"
},{
    name: "ethlend",
    code: "LEND",
    icon: "lend",
    longname: "ETHLend",
    description: "ETHLend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethlend/"
    },
    rank: "245"
},{
    name: "gulden",
    code: "NLG",
    icon: "nlg",
    longname: "Gulden",
    description: "Gulden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gulden/"
    },
    rank: "246"
},{
    name: "digitalnote",
    code: "XDN",
    icon: "xdn",
    longname: "DigitalNote",
    description: "DigitalNote coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalnote/"
    },
    rank: "247"
},{
    name: "cryptaur",
    code: "CPT",
    icon: "cpt",
    longname: "Cryptaur",
    description: "Cryptaur coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptaur/"
    },
    rank: "248"
},{
    name: "ecoreal-estate",
    code: "ECOREAL",
    icon: "ecoreal",
    longname: "Ecoreal Estate",
    description: "Ecoreal Estate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecoreal-estate/"
    },
    rank: "249"
},{
    name: "e-dinar-coin",
    code: "EDR-1",
    icon: "edr-1",
    longname: "E-Dinar Coin",
    description: "E-Dinar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-dinar-coin/"
    },
    rank: "250"
},{
    name: "breezecoin",
    code: "BRZC",
    icon: "brzc",
    longname: "Breezecoin",
    description: "Breezecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breezecoin/"
    },
    rank: "251"
},{
    name: "zip",
    code: "ZIP",
    icon: "zip",
    longname: "Zipper",
    description: "Zipper coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zip/"
    },
    rank: "252"
},{
    name: "babb",
    code: "BAX",
    icon: "bax",
    longname: "BABB",
    description: "BABB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/babb/"
    },
    rank: "253"
},{
    name: "bitbay",
    code: "BAY",
    icon: "bay",
    longname: "BitBay",
    description: "BitBay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbay/"
    },
    rank: "254"
},{
    name: "own",
    code: "CHX",
    icon: "chx",
    longname: "Own",
    description: "Own coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/own/"
    },
    rank: "255"
},{
    name: "tronclassic",
    code: "TRXC",
    icon: "trxc",
    longname: "TRONCLASSIC",
    description: "TRONCLASSIC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tronclassic/"
    },
    rank: "256"
},{
    name: "loki",
    code: "LOKI",
    icon: "loki",
    longname: "Loki",
    description: "Loki coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loki/"
    },
    rank: "257"
},{
    name: "nix",
    code: "NIX",
    icon: "nix",
    longname: "NIX",
    description: "NIX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nix/"
    },
    rank: "258"
},{
    name: "cosmo-coin",
    code: "COSM",
    icon: "cosm",
    longname: "Cosmo Coin",
    description: "Cosmo Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cosmo-coin/"
    },
    rank: "259"
},{
    name: "zrcoin",
    code: "ZRC",
    icon: "zrc",
    longname: "ZrCoin",
    description: "ZrCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zrcoin/"
    },
    rank: "260"
},{
    name: "sonm",
    code: "SNM",
    icon: "snm",
    longname: "SONM",
    description: "SONM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sonm/"
    },
    rank: "261"
},{
    name: "leocoin",
    code: "LEO",
    icon: "leo",
    longname: "LEOcoin",
    description: "LEOcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leocoin/"
    },
    rank: "262"
},{
    name: "cybervein",
    code: "CVT",
    icon: "cvt",
    longname: "CyberVein",
    description: "CyberVein coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybervein/"
    },
    rank: "263"
},{
    name: "nexty",
    code: "NTY",
    icon: "nty",
    longname: "Nexty",
    description: "Nexty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexty/"
    },
    rank: "264"
},{
    name: "adx-net",
    code: "ADX",
    icon: "adx",
    longname: "AdEx",
    description: "AdEx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adx-net/"
    },
    rank: "265"
},{
    name: "ttc-protocol",
    code: "TTC",
    icon: "ttc",
    longname: "TTC Protocol",
    description: "TTC Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ttc-protocol/"
    },
    rank: "266"
},{
    name: "wings",
    code: "WINGS",
    icon: "wings",
    longname: "Wings",
    description: "Wings coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wings/"
    },
    rank: "267"
},{
    name: "propy",
    code: "PRO",
    icon: "pro",
    longname: "Propy",
    description: "Propy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/propy/"
    },
    rank: "268"
},{
    name: "wabi",
    code: "WABI",
    icon: "wabi",
    longname: "WaBi",
    description: "WaBi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wabi/"
    },
    rank: "269"
},{
    name: "moss-coin",
    code: "MOC",
    icon: "moc",
    longname: "Moss Coin",
    description: "Moss Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moss-coin/"
    },
    rank: "270"
},{
    name: "red-pulse",
    code: "PHX",
    icon: "phx",
    longname: "Red Pulse Phoenix",
    description: "Red Pulse Phoenix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/red-pulse/"
    },
    rank: "271"
},{
    name: "data",
    code: "DTA",
    icon: "dta",
    longname: "DATA",
    description: "DATA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/data/"
    },
    rank: "272"
},{
    name: "tripio",
    code: "TRIO",
    icon: "trio",
    longname: "Tripio",
    description: "Tripio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tripio/"
    },
    rank: "273"
},{
    name: "apollo-currency",
    code: "APL",
    icon: "apl",
    longname: "Apollo Currency",
    description: "Apollo Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apollo-currency/"
    },
    rank: "274"
},{
    name: "casinocoin",
    code: "CSC",
    icon: "csc",
    longname: "CasinoCoin",
    description: "CasinoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/casinocoin/"
    },
    rank: "275"
},{
    name: "medibloc",
    code: "MED",
    icon: "med",
    longname: "MediBloc [QRC20]",
    description: "MediBloc [QRC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medibloc/"
    },
    rank: "276"
},{
    name: "wepower",
    code: "WPR",
    icon: "wpr",
    longname: "WePower",
    description: "WePower coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wepower/"
    },
    rank: "277"
},{
    name: "loopring-neo",
    code: "LRN",
    icon: "lrn",
    longname: "Loopring [NEO]",
    description: "Loopring [NEO] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loopring-neo/"
    },
    rank: "278"
},{
    name: "blockv",
    code: "VEE",
    icon: "vee",
    longname: "BLOCKv",
    description: "BLOCKv coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockv/"
    },
    rank: "279"
},{
    name: "naga",
    code: "NGC",
    icon: "ngc",
    longname: "NAGA",
    description: "NAGA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/naga/"
    },
    rank: "280"
},{
    name: "ripio-credit-network",
    code: "RCN",
    icon: "rcn",
    longname: "Ripio Credit Network",
    description: "Ripio Credit Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ripio-credit-network/"
    },
    rank: "281"
},{
    name: "rotharium",
    code: "RTH",
    icon: "rth",
    longname: "Rotharium",
    description: "Rotharium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rotharium/"
    },
    rank: "282"
},{
    name: "aston",
    code: "ATX",
    icon: "atx",
    longname: "Aston",
    description: "Aston coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aston/"
    },
    rank: "283"
},{
    name: "poa-network",
    code: "POA",
    icon: "poa",
    longname: "POA Network",
    description: "POA Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poa-network/"
    },
    rank: "284"
},{
    name: "viacoin",
    code: "VIA",
    icon: "via",
    longname: "Viacoin",
    description: "Viacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viacoin/"
    },
    rank: "285"
},{
    name: "modum",
    code: "MOD",
    icon: "mod",
    longname: "Modum",
    description: "Modum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/modum/"
    },
    rank: "286"
},{
    name: "stakenet",
    code: "XSN",
    icon: "xsn",
    longname: "Stakenet",
    description: "Stakenet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stakenet/"
    },
    rank: "287"
},{
    name: "insolar",
    code: "INS",
    icon: "ins",
    longname: "Insolar",
    description: "Insolar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insolar/"
    },
    rank: "288"
},{
    name: "storiqa",
    code: "STQ",
    icon: "stq",
    longname: "Storiqa",
    description: "Storiqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storiqa/"
    },
    rank: "289"
},{
    name: "singulardtv",
    code: "SNGLS",
    icon: "sngls",
    longname: "SingularDTV",
    description: "SingularDTV coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singulardtv/"
    },
    rank: "290"
},{
    name: "vibe",
    code: "VIBE",
    icon: "vibe",
    longname: "VIBE",
    description: "VIBE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vibe/"
    },
    rank: "291"
},{
    name: "arcblock",
    code: "ABT",
    icon: "abt",
    longname: "Arcblock",
    description: "Arcblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcblock/"
    },
    rank: "292"
},{
    name: "dew",
    code: "DEW",
    icon: "dew",
    longname: "DEW",
    description: "DEW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dew/"
    },
    rank: "293"
},{
    name: "quanta-utility-token",
    code: "QNTU",
    icon: "qntu",
    longname: "Quanta Utility Token",
    description: "Quanta Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quanta-utility-token/"
    },
    rank: "294"
},{
    name: "tokencard",
    code: "TKN",
    icon: "tkn",
    longname: "TokenCard",
    description: "TokenCard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokencard/"
    },
    rank: "295"
},{
    name: "spankchain",
    code: "SPANK",
    icon: "spank",
    longname: "SpankChain",
    description: "SpankChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spankchain/"
    },
    rank: "296"
},{
    name: "selfkey",
    code: "KEY",
    icon: "key",
    longname: "Selfkey",
    description: "Selfkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfkey/"
    },
    rank: "297"
},{
    name: "iot-chain",
    code: "ITC",
    icon: "itc",
    longname: "IoT Chain",
    description: "IoT Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iot-chain/"
    },
    rank: "298"
},{
    name: "fantom",
    code: "FTM",
    icon: "ftm",
    longname: "Fantom",
    description: "Fantom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantom/"
    },
    rank: "299"
},{
    name: "litecoin-cash",
    code: "LCC",
    icon: "lcc",
    longname: "Litecoin Cash",
    description: "Litecoin Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-cash/"
    },
    rank: "300"
},{
    name: "cashaa",
    code: "CAS",
    icon: "cas",
    longname: "Cashaa",
    description: "Cashaa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashaa/"
    },
    rank: "301"
},{
    name: "covesting",
    code: "COV",
    icon: "cov",
    longname: "Covesting",
    description: "Covesting coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/covesting/"
    },
    rank: "302"
},{
    name: "truedeck",
    code: "TDP",
    icon: "tdp",
    longname: "TrueDeck",
    description: "TrueDeck coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/truedeck/"
    },
    rank: "303"
},{
    name: "xtrabytes",
    code: "XBY",
    icon: "xby",
    longname: "XTRABYTES",
    description: "XTRABYTES coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xtrabytes/"
    },
    rank: "304"
},{
    name: "mobius",
    code: "MOBI",
    icon: "mobi",
    longname: "Mobius",
    description: "Mobius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobius/"
    },
    rank: "305"
},{
    name: "xinfin-network",
    code: "XDCE",
    icon: "xdce",
    longname: "XinFin Network",
    description: "XinFin Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xinfin-network/"
    },
    rank: "306"
},{
    name: "metronome",
    code: "MET",
    icon: "met",
    longname: "Metronome",
    description: "Metronome coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metronome/"
    },
    rank: "307"
},{
    name: "origintrail",
    code: "TRAC",
    icon: "trac",
    longname: "OriginTrail",
    description: "OriginTrail coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origintrail/"
    },
    rank: "308"
},{
    name: "zclassic",
    code: "ZCL",
    icon: "zcl",
    longname: "ZClassic",
    description: "ZClassic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zclassic/"
    },
    rank: "309"
},{
    name: "boolberry",
    code: "BBR",
    icon: "bbr",
    longname: "Boolberry",
    description: "Boolberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boolberry/"
    },
    rank: "310"
},{
    name: "district0x",
    code: "DNT",
    icon: "dnt",
    longname: "district0x",
    description: "district0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/district0x/"
    },
    rank: "311"
},{
    name: "bitcoin-interest",
    code: "BCI",
    icon: "bci",
    longname: "Bitcoin Interest",
    description: "Bitcoin Interest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-interest/"
    },
    rank: "312"
},{
    name: "napoleonx",
    code: "NPX",
    icon: "npx",
    longname: "NaPoleonX",
    description: "NaPoleonX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/napoleonx/"
    },
    rank: "313"
},{
    name: "scroll",
    code: "SCRL",
    icon: "scrl",
    longname: "SCRL",
    description: "SCRL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scroll/"
    },
    rank: "314"
},{
    name: "edgeless",
    code: "EDG",
    icon: "edg",
    longname: "Edgeless",
    description: "Edgeless coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/edgeless/"
    },
    rank: "315"
},{
    name: "lockchain",
    code: "LOC",
    icon: "loc",
    longname: "LockTrip",
    description: "LockTrip coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lockchain/"
    },
    rank: "316"
},{
    name: "cloakcoin",
    code: "CLOAK",
    icon: "cloak",
    longname: "CloakCoin",
    description: "CloakCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cloakcoin/"
    },
    rank: "317"
},{
    name: "genaro-network",
    code: "GNX",
    icon: "gnx",
    longname: "Genaro Network",
    description: "Genaro Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/genaro-network/"
    },
    rank: "318"
},{
    name: "achain",
    code: "ACT",
    icon: "act",
    longname: "Achain",
    description: "Achain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/achain/"
    },
    rank: "319"
},{
    name: "coss",
    code: "COSS",
    icon: "coss",
    longname: "COSS",
    description: "COSS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coss/"
    },
    rank: "320"
},{
    name: "loyalcoin",
    code: "LYL",
    icon: "lyl",
    longname: "LoyalCoin",
    description: "LoyalCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loyalcoin/"
    },
    rank: "321"
},{
    name: "content-neutrality-network",
    code: "CNN",
    icon: "cnn",
    longname: "Content Neutrality Network",
    description: "Content Neutrality Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/content-neutrality-network/"
    },
    rank: "322"
},{
    name: "timicoin",
    code: "TMC",
    icon: "tmc",
    longname: "Timicoin",
    description: "Timicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/timicoin/"
    },
    rank: "323"
},{
    name: "gincoin",
    code: "GIN",
    icon: "gin",
    longname: "GINcoin",
    description: "GINcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gincoin/"
    },
    rank: "324"
},{
    name: "aurumcoin",
    code: "AU",
    icon: "au",
    longname: "AurumCoin",
    description: "AurumCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurumcoin/"
    },
    rank: "325"
},{
    name: "electra",
    code: "ECA",
    icon: "eca",
    longname: "Electra",
    description: "Electra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electra/"
    },
    rank: "326"
},{
    name: "namecoin",
    code: "NMC",
    icon: "nmc",
    longname: "Namecoin",
    description: "Namecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/namecoin/"
    },
    rank: "327"
},{
    name: "tierion",
    code: "TNT",
    icon: "tnt",
    longname: "Tierion",
    description: "Tierion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tierion/"
    },
    rank: "328"
},{
    name: "clams",
    code: "CLAM",
    icon: "clam",
    longname: "Clams",
    description: "Clams coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clams/"
    },
    rank: "329"
},{
    name: "vite",
    code: "VITE",
    icon: "vite",
    longname: "VITE",
    description: "VITE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vite/"
    },
    rank: "330"
},{
    name: "qlink",
    code: "QLC",
    icon: "qlc",
    longname: "QLC Chain",
    description: "QLC Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qlink/"
    },
    rank: "331"
},{
    name: "bitusd",
    code: "BITUSD",
    icon: "bitusd",
    longname: "bitUSD",
    description: "bitUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitusd/"
    },
    rank: "332"
},{
    name: "all-sports",
    code: "SOC",
    icon: "soc",
    longname: "All Sports",
    description: "All Sports coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/all-sports/"
    },
    rank: "333"
},{
    name: "blox",
    code: "CDT",
    icon: "cdt",
    longname: "Blox",
    description: "Blox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blox/"
    },
    rank: "334"
},{
    name: "medishares",
    code: "MDS",
    icon: "mds",
    longname: "MediShares",
    description: "MediShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medishares/"
    },
    rank: "335"
},{
    name: "pchain",
    code: "PAI",
    icon: "pai",
    longname: "PCHAIN",
    description: "PCHAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pchain/"
    },
    rank: "336"
},{
    name: "metadium",
    code: "META",
    icon: "meta",
    longname: "Metadium",
    description: "Metadium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metadium/"
    },
    rank: "337"
},{
    name: "mercury",
    code: "MER",
    icon: "mer",
    longname: "Mercury",
    description: "Mercury coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mercury/"
    },
    rank: "338"
},{
    name: "refereum",
    code: "RFR",
    icon: "rfr",
    longname: "Refereum",
    description: "Refereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/refereum/"
    },
    rank: "339"
},{
    name: "counterparty",
    code: "XCP",
    icon: "xcp",
    longname: "Counterparty",
    description: "Counterparty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/counterparty/"
    },
    rank: "340"
},{
    name: "hydrogen",
    code: "HYDRO",
    icon: "hydro",
    longname: "Hydro",
    description: "Hydro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hydrogen/"
    },
    rank: "341"
},{
    name: "parkingo",
    code: "GOT",
    icon: "got",
    longname: "ParkinGo",
    description: "ParkinGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkingo/"
    },
    rank: "342"
},{
    name: "dignity",
    code: "DIG",
    icon: "dig",
    longname: "Dignity",
    description: "Dignity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dignity/"
    },
    rank: "343"
},{
    name: "repo",
    code: "REPO",
    icon: "repo",
    longname: "REPO",
    description: "REPO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/repo/"
    },
    rank: "344"
},{
    name: "horuspay",
    code: "HORUS",
    icon: "horus",
    longname: "HorusPay",
    description: "HorusPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/horuspay/"
    },
    rank: "345"
},{
    name: "pascal-coin",
    code: "PASC",
    icon: "pasc",
    longname: "Pascal Coin",
    description: "Pascal Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pascal-coin/"
    },
    rank: "346"
},{
    name: "bitkan",
    code: "KAN",
    icon: "kan",
    longname: "BitKan",
    description: "BitKan coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitkan/"
    },
    rank: "347"
},{
    name: "asch",
    code: "XAS",
    icon: "xas",
    longname: "Asch",
    description: "Asch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asch/"
    },
    rank: "348"
},{
    name: "patron",
    code: "PAT",
    icon: "pat",
    longname: "Patron",
    description: "Patron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/patron/"
    },
    rank: "349"
},{
    name: "legolas-exchange",
    code: "LGO",
    icon: "lgo",
    longname: "LGO Exchange",
    description: "LGO Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/legolas-exchange/"
    },
    rank: "350"
},{
    name: "internet-node-token",
    code: "INT",
    icon: "int",
    longname: "Internet Node Token",
    description: "Internet Node Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-node-token/"
    },
    rank: "351"
},{
    name: "haven-protocol",
    code: "XHV",
    icon: "xhv",
    longname: "Haven Protocol",
    description: "Haven Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/haven-protocol/"
    },
    rank: "352"
},{
    name: "airswap",
    code: "AST",
    icon: "ast",
    longname: "AirSwap",
    description: "AirSwap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airswap/"
    },
    rank: "353"
},{
    name: "b2bx",
    code: "B2B",
    icon: "b2b",
    longname: "B2BX",
    description: "B2BX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b2bx/"
    },
    rank: "354"
},{
    name: "doc-com-token",
    code: "MTC",
    icon: "mtc",
    longname: "doc.com Token",
    description: "doc.com Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/doc-com-token/"
    },
    rank: "355"
},{
    name: "primecoin",
    code: "XPM",
    icon: "xpm",
    longname: "Primecoin",
    description: "Primecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primecoin/"
    },
    rank: "356"
},{
    name: "blocktix",
    code: "TIX",
    icon: "tix",
    longname: "Blocktix",
    description: "Blocktix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocktix/"
    },
    rank: "357"
},{
    name: "iht-real-estate-protocol",
    code: "IHT",
    icon: "iht",
    longname: "IHT Real Estate Protocol",
    description: "IHT Real Estate Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iht-real-estate-protocol/"
    },
    rank: "358"
},{
    name: "humanscape",
    code: "HUM",
    icon: "hum",
    longname: "Humanscape",
    description: "Humanscape coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/humanscape/"
    },
    rank: "359"
},{
    name: "fortuna",
    code: "FOTA",
    icon: "fota",
    longname: "Fortuna",
    description: "Fortuna coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fortuna/"
    },
    rank: "360"
},{
    name: "restart-energy-mwat",
    code: "MWAT",
    icon: "mwat",
    longname: "Restart Energy MWAT",
    description: "Restart Energy MWAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/restart-energy-mwat/"
    },
    rank: "361"
},{
    name: "faircoin",
    code: "FAIR",
    icon: "fair",
    longname: "FairCoin",
    description: "FairCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/faircoin/"
    },
    rank: "362"
},{
    name: "lympo",
    code: "LYM",
    icon: "lym",
    longname: "Lympo",
    description: "Lympo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lympo/"
    },
    rank: "363"
},{
    name: "apex",
    code: "CPX",
    icon: "cpx",
    longname: "Apex",
    description: "Apex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apex/"
    },
    rank: "364"
},{
    name: "dero",
    code: "DERO",
    icon: "dero",
    longname: "Dero",
    description: "Dero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dero/"
    },
    rank: "365"
},{
    name: "deepbrain-chain",
    code: "DBC",
    icon: "dbc",
    longname: "DeepBrain Chain",
    description: "DeepBrain Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deepbrain-chain/"
    },
    rank: "366"
},{
    name: "sophiatx",
    code: "SPHTX",
    icon: "sphtx",
    longname: "SophiaTX",
    description: "SophiaTX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sophiatx/"
    },
    rank: "367"
},{
    name: "happycoin",
    code: "HPC",
    icon: "hpc",
    longname: "Happycoin",
    description: "Happycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/happycoin/"
    },
    rank: "368"
},{
    name: "bitcore",
    code: "BTX",
    icon: "btx",
    longname: "Bitcore",
    description: "Bitcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcore/"
    },
    rank: "369"
},{
    name: "mothership",
    code: "MSP",
    icon: "msp",
    longname: "Mothership",
    description: "Mothership coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mothership/"
    },
    rank: "370"
},{
    name: "everex",
    code: "EVX",
    icon: "evx",
    longname: "Everex",
    description: "Everex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/everex/"
    },
    rank: "371"
},{
    name: "linda",
    code: "LINDA",
    icon: "linda",
    longname: "Linda",
    description: "Linda coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linda/"
    },
    rank: "372"
},{
    name: "peerplays-ppy",
    code: "PPY",
    icon: "ppy",
    longname: "Peerplays",
    description: "Peerplays coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peerplays-ppy/"
    },
    rank: "373"
},{
    name: "etherparty",
    code: "FUEL",
    icon: "fuel",
    longname: "Etherparty",
    description: "Etherparty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etherparty/"
    },
    rank: "374"
},{
    name: "game",
    code: "GTC",
    icon: "gtc",
    longname: "Game.com",
    description: "Game.com coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/game/"
    },
    rank: "375"
},{
    name: "eosdac",
    code: "EOSDAC",
    icon: "eosdac",
    longname: "eosDAC",
    description: "eosDAC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eosdac/"
    },
    rank: "376"
},{
    name: "bottos",
    code: "BTO",
    icon: "bto",
    longname: "Bottos",
    description: "Bottos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bottos/"
    },
    rank: "377"
},{
    name: "bulwark",
    code: "BWK",
    icon: "bwk",
    longname: "Bulwark",
    description: "Bulwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bulwark/"
    },
    rank: "378"
},{
    name: "dock",
    code: "DOCK",
    icon: "dock",
    longname: "Dock",
    description: "Dock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dock/"
    },
    rank: "379"
},{
    name: "alqo",
    code: "XLQ",
    icon: "xlq",
    longname: "ALQO",
    description: "ALQO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alqo/"
    },
    rank: "380"
},{
    name: "yoyow",
    code: "YOYOW",
    icon: "yoyow",
    longname: "YOYOW",
    description: "YOYOW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yoyow/"
    },
    rank: "381"
},{
    name: "presearch",
    code: "PRE",
    icon: "pre",
    longname: "Presearch",
    description: "Presearch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/presearch/"
    },
    rank: "382"
},{
    name: "universa",
    code: "UTNP",
    icon: "utnp",
    longname: "Universa",
    description: "Universa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universa/"
    },
    rank: "383"
},{
    name: "appcoins",
    code: "APPC",
    icon: "appc",
    longname: "AppCoins",
    description: "AppCoins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/appcoins/"
    },
    rank: "384"
},{
    name: "ion",
    code: "ION",
    icon: "ion",
    longname: "ION",
    description: "ION coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ion/"
    },
    rank: "385"
},{
    name: "bitnewchain",
    code: "BTN",
    icon: "btn",
    longname: "BitNewChain",
    description: "BitNewChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitnewchain/"
    },
    rank: "386"
},{
    name: "gamecredits",
    code: "GAME",
    icon: "game",
    longname: "GameCredits",
    description: "GameCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamecredits/"
    },
    rank: "387"
},{
    name: "melon",
    code: "MLN",
    icon: "mln",
    longname: "Melon",
    description: "Melon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/melon/"
    },
    rank: "388"
},{
    name: "spindle",
    code: "SPD",
    icon: "spd",
    longname: "SPINDLE",
    description: "SPINDLE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spindle/"
    },
    rank: "389"
},{
    name: "envion",
    code: "EVN",
    icon: "evn",
    longname: "Envion",
    description: "Envion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/envion/"
    },
    rank: "390"
},{
    name: "bitcoin-green",
    code: "BITG",
    icon: "bitg",
    longname: "Bitcoin Green",
    description: "Bitcoin Green coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-green/"
    },
    rank: "391"
},{
    name: "primalbase",
    code: "PBT",
    icon: "pbt",
    longname: "Primalbase Token",
    description: "Primalbase Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primalbase/"
    },
    rank: "392"
},{
    name: "robotina",
    code: "ROX",
    icon: "rox",
    longname: "Robotina",
    description: "Robotina coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/robotina/"
    },
    rank: "393"
},{
    name: "realtract",
    code: "RET",
    icon: "ret",
    longname: "RealTract",
    description: "RealTract coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/realtract/"
    },
    rank: "394"
},{
    name: "decent",
    code: "DCT",
    icon: "dct",
    longname: "DECENT",
    description: "DECENT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent/"
    },
    rank: "395"
},{
    name: "monetha",
    code: "MTH",
    icon: "mth",
    longname: "Monetha",
    description: "Monetha coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monetha/"
    },
    rank: "396"
},{
    name: "bitcoin-atom",
    code: "BCA",
    icon: "bca",
    longname: "Bitcoin Atom",
    description: "Bitcoin Atom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-atom/"
    },
    rank: "397"
},{
    name: "seele",
    code: "SEELE",
    icon: "seele",
    longname: "Seele",
    description: "Seele coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/seele/"
    },
    rank: "398"
},{
    name: "playgroundz",
    code: "IOG",
    icon: "iog",
    longname: "Playgroundz",
    description: "Playgroundz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playgroundz/"
    },
    rank: "399"
},{
    name: "travala",
    code: "AVA",
    icon: "ava",
    longname: "Travala",
    description: "Travala coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/travala/"
    },
    rank: "400"
},{
    name: "aeon",
    code: "AEON",
    icon: "aeon",
    longname: "Aeon",
    description: "Aeon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeon/"
    },
    rank: "401"
},{
    name: "nkn",
    code: "NKN",
    icon: "nkn",
    longname: "NKN",
    description: "NKN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nkn/"
    },
    rank: "402"
},{
    name: "polybius",
    code: "PLBT",
    icon: "plbt",
    longname: "Polybius",
    description: "Polybius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polybius/"
    },
    rank: "403"
},{
    name: "feathercoin",
    code: "FTC",
    icon: "ftc",
    longname: "Feathercoin",
    description: "Feathercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/feathercoin/"
    },
    rank: "404"
},{
    name: "sentinel-protocol",
    code: "UPP",
    icon: "upp",
    longname: "Sentinel Protocol",
    description: "Sentinel Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sentinel-protocol/"
    },
    rank: "405"
},{
    name: "0chain",
    code: "ZCN",
    icon: "zcn",
    longname: "0chain",
    description: "0chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0chain/"
    },
    rank: "406"
},{
    name: "ino-coin",
    code: "INO",
    icon: "ino",
    longname: "INO COIN",
    description: "INO COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ino-coin/"
    },
    rank: "407"
},{
    name: "cobinhood",
    code: "COB",
    icon: "cob",
    longname: "Cobinhood",
    description: "Cobinhood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cobinhood/"
    },
    rank: "408"
},{
    name: "ternio",
    code: "TERN",
    icon: "tern",
    longname: "Ternio",
    description: "Ternio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ternio/"
    },
    rank: "409"
},{
    name: "viberate",
    code: "VIB",
    icon: "vib",
    longname: "Viberate",
    description: "Viberate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viberate/"
    },
    rank: "410"
},{
    name: "library-credit",
    code: "LBC",
    icon: "lbc",
    longname: "LBRY Credits",
    description: "LBRY Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/library-credit/"
    },
    rank: "411"
},{
    name: "lunyr",
    code: "LUN",
    icon: "lun",
    longname: "Lunyr",
    description: "Lunyr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lunyr/"
    },
    rank: "412"
},{
    name: "daps-token",
    code: "DAPS",
    icon: "daps",
    longname: "DAPS Token",
    description: "DAPS Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daps-token/"
    },
    rank: "413"
},{
    name: "numeraire",
    code: "NMR",
    icon: "nmr",
    longname: "Numeraire",
    description: "Numeraire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numeraire/"
    },
    rank: "414"
},{
    name: "primas",
    code: "PST",
    icon: "pst",
    longname: "Primas",
    description: "Primas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primas/"
    },
    rank: "415"
},{
    name: "adtoken",
    code: "ADT",
    icon: "adt",
    longname: "adToken",
    description: "adToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adtoken/"
    },
    rank: "416"
},{
    name: "rublix",
    code: "RBLX",
    icon: "rblx",
    longname: "Rublix",
    description: "Rublix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rublix/"
    },
    rank: "417"
},{
    name: "cpchain",
    code: "CPC",
    icon: "cpc",
    longname: "CPChain",
    description: "CPChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cpchain/"
    },
    rank: "418"
},{
    name: "paccoin",
    code: "$PAC",
    icon: "$pac",
    longname: "PACcoin",
    description: "PACcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paccoin/"
    },
    rank: "419"
},{
    name: "minexcoin",
    code: "MNX",
    icon: "mnx",
    longname: "MinexCoin",
    description: "MinexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minexcoin/"
    },
    rank: "420"
},{
    name: "vipstar-coin",
    code: "VIPS",
    icon: "vips",
    longname: "Vipstar Coin",
    description: "Vipstar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vipstar-coin/"
    },
    rank: "421"
},{
    name: "te-food",
    code: "TFD",
    icon: "tfd",
    longname: "TE-FOOD",
    description: "TE-FOOD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/te-food/"
    },
    rank: "422"
},{
    name: "bit-z-token",
    code: "BZ",
    icon: "bz",
    longname: "Bit-Z Token",
    description: "Bit-Z Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit-z-token/"
    },
    rank: "423"
},{
    name: "paragon",
    code: "PRG",
    icon: "prg",
    longname: "Paragon",
    description: "Paragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paragon/"
    },
    rank: "424"
},{
    name: "bankex",
    code: "BKX",
    icon: "bkx",
    longname: "BANKEX",
    description: "BANKEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bankex/"
    },
    rank: "425"
},{
    name: "atn",
    code: "ATN",
    icon: "atn",
    longname: "ATN",
    description: "ATN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atn/"
    },
    rank: "426"
},{
    name: "kickico",
    code: "KICK",
    icon: "kick",
    longname: "KickCoin",
    description: "KickCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kickico/"
    },
    rank: "427"
},{
    name: "moneytoken",
    code: "IMT",
    icon: "imt",
    longname: "Moneytoken",
    description: "Moneytoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moneytoken/"
    },
    rank: "428"
},{
    name: "latoken",
    code: "LA",
    icon: "la",
    longname: "LATOKEN",
    description: "LATOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/latoken/"
    },
    rank: "429"
},{
    name: "sakura-bloom",
    code: "SKB",
    icon: "skb",
    longname: "Sakura Bloom",
    description: "Sakura Bloom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sakura-bloom/"
    },
    rank: "430"
},{
    name: "toacoin",
    code: "TOA",
    icon: "toa",
    longname: "ToaCoin",
    description: "ToaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/toacoin/"
    },
    rank: "431"
},{
    name: "aeron",
    code: "ARN",
    icon: "arn",
    longname: "Aeron",
    description: "Aeron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeron/"
    },
    rank: "432"
},{
    name: "zen-protocol",
    code: "ZP",
    icon: "zp",
    longname: "Zen Protocol",
    description: "Zen Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zen-protocol/"
    },
    rank: "433"
},{
    name: "agrello-delta",
    code: "DLT",
    icon: "dlt",
    longname: "Agrello",
    description: "Agrello coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/agrello-delta/"
    },
    rank: "434"
},{
    name: "tv-two",
    code: "TTV",
    icon: "ttv",
    longname: "TV-TWO",
    description: "TV-TWO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tv-two/"
    },
    rank: "435"
},{
    name: "pepe-cash",
    code: "PEPECASH",
    icon: "pepecash",
    longname: "Pepe Cash",
    description: "Pepe Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pepe-cash/"
    },
    rank: "436"
},{
    name: "swftcoin",
    code: "SWFTC",
    icon: "swftc",
    longname: "SwftCoin",
    description: "SwftCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swftcoin/"
    },
    rank: "437"
},{
    name: "tatatu",
    code: "TTU",
    icon: "ttu",
    longname: "TaTaTu",
    description: "TaTaTu coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tatatu/"
    },
    rank: "438"
},{
    name: "diamond",
    code: "DMD",
    icon: "dmd",
    longname: "Diamond",
    description: "Diamond coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/diamond/"
    },
    rank: "439"
},{
    name: "unikoin-gold",
    code: "UKG",
    icon: "ukg",
    longname: "Unikoin Gold",
    description: "Unikoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unikoin-gold/"
    },
    rank: "440"
},{
    name: "zeepin",
    code: "ZPT",
    icon: "zpt",
    longname: "Zeepin",
    description: "Zeepin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeepin/"
    },
    rank: "441"
},{
    name: "bismuth",
    code: "BIS",
    icon: "bis",
    longname: "Bismuth",
    description: "Bismuth coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bismuth/"
    },
    rank: "442"
},{
    name: "blockmason",
    code: "BCPT",
    icon: "bcpt",
    longname: "BlockMason Credit Protocol",
    description: "BlockMason Credit Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockmason/"
    },
    rank: "443"
},{
    name: "html-coin",
    code: "HTML",
    icon: "html",
    longname: "HTMLCOIN",
    description: "HTMLCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/html-coin/"
    },
    rank: "444"
},{
    name: "bean-cash",
    code: "BITB",
    icon: "bitb",
    longname: "Bean Cash",
    description: "Bean Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bean-cash/"
    },
    rank: "445"
},{
    name: "bit-tube",
    code: "TUBE",
    icon: "tube",
    longname: "BitTube",
    description: "BitTube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit-tube/"
    },
    rank: "446"
},{
    name: "safeinsure",
    code: "SINS",
    icon: "sins",
    longname: "SafeInsure",
    description: "SafeInsure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safeinsure/"
    },
    rank: "447"
},{
    name: "revolutionvr",
    code: "RVR",
    icon: "rvr",
    longname: "RevolutionVR",
    description: "RevolutionVR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revolutionvr/"
    },
    rank: "448"
},{
    name: "ice-rock-mining",
    code: "ROCK2",
    icon: "rock2",
    longname: "ICE ROCK MINING",
    description: "ICE ROCK MINING coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ice-rock-mining/"
    },
    rank: "449"
},{
    name: "swissborg",
    code: "CHSB",
    icon: "chsb",
    longname: "SwissBorg",
    description: "SwissBorg coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swissborg/"
    },
    rank: "450"
},{
    name: "xaurum",
    code: "XAUR",
    icon: "xaur",
    longname: "Xaurum",
    description: "Xaurum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xaurum/"
    },
    rank: "451"
},{
    name: "winding-tree",
    code: "LIF",
    icon: "lif",
    longname: "Winding Tree",
    description: "Winding Tree coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/winding-tree/"
    },
    rank: "452"
},{
    name: "nanjcoin",
    code: "NANJ",
    icon: "nanj",
    longname: "NANJCOIN",
    description: "NANJCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nanjcoin/"
    },
    rank: "453"
},{
    name: "flo",
    code: "FLO",
    icon: "flo",
    longname: "FLO",
    description: "FLO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flo/"
    },
    rank: "454"
},{
    name: "global-currency-reserve",
    code: "GCR",
    icon: "gcr",
    longname: "Global Currency Reserve",
    description: "Global Currency Reserve coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-currency-reserve/"
    },
    rank: "455"
},{
    name: "weshow-token",
    code: "WET",
    icon: "wet",
    longname: "WeShow Token",
    description: "WeShow Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/weshow-token/"
    },
    rank: "456"
},{
    name: "shift",
    code: "SHIFT",
    icon: "shift",
    longname: "Shift",
    description: "Shift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shift/"
    },
    rank: "457"
},{
    name: "callisto-network",
    code: "CLO",
    icon: "clo",
    longname: "Callisto Network",
    description: "Callisto Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/callisto-network/"
    },
    rank: "458"
},{
    name: "scorum-coins",
    code: "SCR",
    icon: "scr",
    longname: "Scorum Coins",
    description: "Scorum Coins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scorum-coins/"
    },
    rank: "459"
},{
    name: "six-domain-chain",
    code: "SDA",
    icon: "sda",
    longname: "Six Domain Chain",
    description: "Six Domain Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/six-domain-chain/"
    },
    rank: "460"
},{
    name: "switcheo",
    code: "SWTH",
    icon: "swth",
    longname: "Switcheo",
    description: "Switcheo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/switcheo/"
    },
    rank: "461"
},{
    name: "everus",
    code: "EVR",
    icon: "evr",
    longname: "Everus",
    description: "Everus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/everus/"
    },
    rank: "462"
},{
    name: "hiveterminal-token",
    code: "HVN",
    icon: "hvn",
    longname: "Hiveterminal Token",
    description: "Hiveterminal Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hiveterminal-token/"
    },
    rank: "463"
},{
    name: "spacechain",
    code: "SPC",
    icon: "spc",
    longname: "SpaceChain",
    description: "SpaceChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spacechain/"
    },
    rank: "464"
},{
    name: "crown",
    code: "CRW",
    icon: "crw",
    longname: "Crown",
    description: "Crown coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crown/"
    },
    rank: "465"
},{
    name: "online",
    code: "OIO",
    icon: "oio",
    longname: "Online",
    description: "Online coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/online/"
    },
    rank: "466"
},{
    name: "divi",
    code: "DIVI",
    icon: "divi",
    longname: "Divi",
    description: "Divi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/divi/"
    },
    rank: "467"
},{
    name: "xel",
    code: "XEL",
    icon: "xel",
    longname: "XEL",
    description: "XEL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xel/"
    },
    rank: "468"
},{
    name: "sureremit",
    code: "RMT",
    icon: "rmt",
    longname: "SureRemit",
    description: "SureRemit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sureremit/"
    },
    rank: "469"
},{
    name: "graft",
    code: "GRFT",
    icon: "grft",
    longname: "Graft",
    description: "Graft coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/graft/"
    },
    rank: "470"
},{
    name: "lamden",
    code: "TAU",
    icon: "tau",
    longname: "Lamden",
    description: "Lamden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lamden/"
    },
    rank: "471"
},{
    name: "mass-vehicle-ledger",
    code: "MVL",
    icon: "mvl",
    longname: "Mass Vehicle Ledger",
    description: "Mass Vehicle Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mass-vehicle-ledger/"
    },
    rank: "472"
},{
    name: "phore",
    code: "PHR",
    icon: "phr",
    longname: "Phore",
    description: "Phore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phore/"
    },
    rank: "473"
},{
    name: "digix-gold-token",
    code: "DGX",
    icon: "dgx",
    longname: "Digix Gold Token",
    description: "Digix Gold Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digix-gold-token/"
    },
    rank: "474"
},{
    name: "blackmoon",
    code: "BMC",
    icon: "bmc",
    longname: "Blackmoon",
    description: "Blackmoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackmoon/"
    },
    rank: "475"
},{
    name: "firstblood",
    code: "1ST",
    icon: "1st",
    longname: "FirstBlood",
    description: "FirstBlood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstblood/"
    },
    rank: "476"
},{
    name: "hi-mutual-society",
    code: "HMC",
    icon: "hmc",
    longname: "Hi Mutual Society",
    description: "Hi Mutual Society coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hi-mutual-society/"
    },
    rank: "477"
},{
    name: "qunqun",
    code: "QUN",
    icon: "qun",
    longname: "QunQun",
    description: "QunQun coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qunqun/"
    },
    rank: "478"
},{
    name: "decent-bet",
    code: "DBET",
    icon: "dbet",
    longname: "DecentBet",
    description: "DecentBet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent-bet/"
    },
    rank: "479"
},{
    name: "soarcoin",
    code: "SOAR",
    icon: "soar",
    longname: "Soarcoin",
    description: "Soarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soarcoin/"
    },
    rank: "480"
},{
    name: "bloomtoken",
    code: "BLT",
    icon: "blt",
    longname: "Bloom",
    description: "Bloom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bloomtoken/"
    },
    rank: "481"
},{
    name: "ceek-vr",
    code: "CEEK",
    icon: "ceek",
    longname: "CEEK VR",
    description: "CEEK VR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ceek-vr/"
    },
    rank: "482"
},{
    name: "blackcoin",
    code: "BLK",
    icon: "blk",
    longname: "BlackCoin",
    description: "BlackCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackcoin/"
    },
    rank: "483"
},{
    name: "ink",
    code: "INK",
    icon: "ink",
    longname: "Ink",
    description: "Ink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ink/"
    },
    rank: "484"
},{
    name: "havven",
    code: "HAV",
    icon: "hav",
    longname: "Havven",
    description: "Havven coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/havven/"
    },
    rank: "485"
},{
    name: "halalchain",
    code: "HLC",
    icon: "hlc",
    longname: "HalalChain",
    description: "HalalChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halalchain/"
    },
    rank: "486"
},{
    name: "business-credit-alliance-chain",
    code: "BCAC",
    icon: "bcac",
    longname: "Business Credit Alliance Chain",
    description: "Business Credit Alliance Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/business-credit-alliance-chain/"
    },
    rank: "487"
},{
    name: "distributed-credit-chain",
    code: "DCC",
    icon: "dcc",
    longname: "Distributed Credit Chain",
    description: "Distributed Credit Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/distributed-credit-chain/"
    },
    rank: "488"
},{
    name: "brahmaos",
    code: "BRM",
    icon: "brm",
    longname: "BrahmaOS",
    description: "BrahmaOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brahmaos/"
    },
    rank: "489"
},{
    name: "dadi",
    code: "DADI",
    icon: "dadi",
    longname: "DADI",
    description: "DADI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dadi/"
    },
    rank: "490"
},{
    name: "mark-space",
    code: "MRK",
    icon: "mrk",
    longname: "MARK.SPACE",
    description: "MARK.SPACE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mark-space/"
    },
    rank: "491"
},{
    name: "consensus",
    code: "SEN",
    icon: "sen",
    longname: "Consensus",
    description: "Consensus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/consensus/"
    },
    rank: "492"
},{
    name: "dxchain-token",
    code: "DX",
    icon: "dx",
    longname: "DxChain Token",
    description: "DxChain Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dxchain-token/"
    },
    rank: "493"
},{
    name: "electrifyasia",
    code: "ELEC",
    icon: "elec",
    longname: "Electrify.Asia",
    description: "Electrify.Asia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electrifyasia/"
    },
    rank: "494"
},{
    name: "insureum",
    code: "ISR",
    icon: "isr",
    longname: "Insureum",
    description: "Insureum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insureum/"
    },
    rank: "495"
},{
    name: "fuzex",
    code: "FXT",
    icon: "fxt",
    longname: "FuzeX",
    description: "FuzeX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fuzex/"
    },
    rank: "496"
},{
    name: "eccoin",
    code: "ECC",
    icon: "ecc",
    longname: "ECC",
    description: "ECC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eccoin/"
    },
    rank: "497"
},{
    name: "waves-community-token",
    code: "WCT",
    icon: "wct",
    longname: "Waves Community Token",
    description: "Waves Community Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves-community-token/"
    },
    rank: "498"
},{
    name: "polyswarm",
    code: "NCT",
    icon: "nct",
    longname: "PolySwarm",
    description: "PolySwarm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polyswarm/"
    },
    rank: "499"
},{
    name: "ebcoin",
    code: "EBC",
    icon: "ebc",
    longname: "EBCoin",
    description: "EBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebcoin/"
    },
    rank: "500"
},{
    name: "dimecoin",
    code: "DIME",
    icon: "dime",
    longname: "Dimecoin",
    description: "Dimecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dimecoin/"
    },
    rank: "501"
},{
    name: "polis",
    code: "POLIS",
    icon: "polis",
    longname: "Polis",
    description: "Polis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polis/"
    },
    rank: "502"
},{
    name: "zebi",
    code: "ZCO",
    icon: "zco",
    longname: "Zebi",
    description: "Zebi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zebi/"
    },
    rank: "503"
},{
    name: "fanstime",
    code: "FTI",
    icon: "fti",
    longname: "FansTime",
    description: "FansTime coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fanstime/"
    },
    rank: "504"
},{
    name: "delphy",
    code: "DPY",
    icon: "dpy",
    longname: "Delphy",
    description: "Delphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delphy/"
    },
    rank: "505"
},{
    name: "yeed",
    code: "YEED",
    icon: "yeed",
    longname: "YGGDRASH",
    description: "YGGDRASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yeed/"
    },
    rank: "506"
},{
    name: "experience-points",
    code: "XP",
    icon: "xp",
    longname: "Experience Points",
    description: "Experience Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experience-points/"
    },
    rank: "507"
},{
    name: "decision-token",
    code: "HST",
    icon: "hst",
    longname: "Decision Token",
    description: "Decision Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decision-token/"
    },
    rank: "508"
},{
    name: "flash",
    code: "FLASH",
    icon: "flash",
    longname: "Flash",
    description: "Flash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flash/"
    },
    rank: "509"
},{
    name: "educare",
    code: "EKT",
    icon: "ekt",
    longname: "EDUCare",
    description: "EDUCare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/educare/"
    },
    rank: "510"
},{
    name: "myriad",
    code: "XMY",
    icon: "xmy",
    longname: "Myriad",
    description: "Myriad coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/myriad/"
    },
    rank: "511"
},{
    name: "olympus-labs",
    code: "MOT",
    icon: "mot",
    longname: "Olympus Labs",
    description: "Olympus Labs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/olympus-labs/"
    },
    rank: "512"
},{
    name: "sentinel",
    code: "SENT",
    icon: "sent",
    longname: "Sentinel",
    description: "Sentinel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sentinel/"
    },
    rank: "513"
},{
    name: "lendingblock",
    code: "LND",
    icon: "lnd",
    longname: "Lendingblock",
    description: "Lendingblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lendingblock/"
    },
    rank: "514"
},{
    name: "blockport",
    code: "BPT",
    icon: "bpt",
    longname: "Blockport",
    description: "Blockport coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockport/"
    },
    rank: "515"
},{
    name: "oax",
    code: "OAX",
    icon: "oax",
    longname: "OAX",
    description: "OAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oax/"
    },
    rank: "516"
},{
    name: "potcoin",
    code: "POT",
    icon: "pot",
    longname: "PotCoin",
    description: "PotCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/potcoin/"
    },
    rank: "517"
},{
    name: "rise",
    code: "RISE",
    icon: "rise",
    longname: "Rise",
    description: "Rise coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rise/"
    },
    rank: "518"
},{
    name: "thorecoin",
    code: "THR",
    icon: "thr",
    longname: "ThoreCoin",
    description: "ThoreCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thorecoin/"
    },
    rank: "519"
},{
    name: "espers",
    code: "ESP",
    icon: "esp",
    longname: "Espers",
    description: "Espers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/espers/"
    },
    rank: "520"
},{
    name: "blocktrade-token",
    code: "BTT",
    icon: "btt",
    longname: "Blocktrade Token",
    description: "Blocktrade Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocktrade-token/"
    },
    rank: "521"
},{
    name: "xmax",
    code: "XMX",
    icon: "xmx",
    longname: "XMax",
    description: "XMax coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xmax/"
    },
    rank: "522"
},{
    name: "bezop",
    code: "BEZ",
    icon: "bez",
    longname: "Bezop",
    description: "Bezop coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bezop/"
    },
    rank: "523"
},{
    name: "u-network",
    code: "UUU",
    icon: "uuu",
    longname: "U Network",
    description: "U Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/u-network/"
    },
    rank: "524"
},{
    name: "luxcoin",
    code: "LUX",
    icon: "lux",
    longname: "LUXCoin",
    description: "LUXCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luxcoin/"
    },
    rank: "525"
},{
    name: "peculium",
    code: "PCL",
    icon: "pcl",
    longname: "Peculium",
    description: "Peculium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peculium/"
    },
    rank: "526"
},{
    name: "etheroll",
    code: "DICE",
    icon: "dice",
    longname: "Etheroll",
    description: "Etheroll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheroll/"
    },
    rank: "527"
},{
    name: "blue-whale-token",
    code: "BWX",
    icon: "bwx",
    longname: "Blue Whale Token",
    description: "Blue Whale Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blue-whale-token/"
    },
    rank: "528"
},{
    name: "aurora-dao",
    code: "AURA",
    icon: "aura",
    longname: "Aurora DAO",
    description: "Aurora DAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurora-dao/"
    },
    rank: "529"
},{
    name: "skrumble-network",
    code: "SKM",
    icon: "skm",
    longname: "Skrumble Network",
    description: "Skrumble Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skrumble-network/"
    },
    rank: "530"
},{
    name: "colossusxt",
    code: "COLX",
    icon: "colx",
    longname: "ColossusXT",
    description: "ColossusXT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/colossusxt/"
    },
    rank: "531"
},{
    name: "pandacoin-pnd",
    code: "PND",
    icon: "pnd",
    longname: "Pandacoin",
    description: "Pandacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pandacoin-pnd/"
    },
    rank: "532"
},{
    name: "ivy",
    code: "IVY",
    icon: "ivy",
    longname: "Ivy",
    description: "Ivy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ivy/"
    },
    rank: "533"
},{
    name: "hempcoin",
    code: "THC",
    icon: "thc",
    longname: "HempCoin",
    description: "HempCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hempcoin/"
    },
    rank: "534"
},{
    name: "brickblock",
    code: "BBK",
    icon: "bbk",
    longname: "Brickblock",
    description: "Brickblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brickblock/"
    },
    rank: "535"
},{
    name: "yee",
    code: "YEE",
    icon: "yee",
    longname: "YEE",
    description: "YEE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yee/"
    },
    rank: "536"
},{
    name: "monetaryunit",
    code: "MUE",
    icon: "mue",
    longname: "MonetaryUnit",
    description: "MonetaryUnit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monetaryunit/"
    },
    rank: "537"
},{
    name: "iocoin",
    code: "IOC",
    icon: "ioc",
    longname: "I/O Coin",
    description: "I/O Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iocoin/"
    },
    rank: "538"
},{
    name: "semux",
    code: "SEM",
    icon: "sem",
    longname: "Semux",
    description: "Semux coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/semux/"
    },
    rank: "539"
},{
    name: "get-protocol",
    code: "GET",
    icon: "get",
    longname: "GET Protocol",
    description: "GET Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/get-protocol/"
    },
    rank: "540"
},{
    name: "local-coin-swap",
    code: "LCS",
    icon: "lcs",
    longname: "LocalCoinSwap",
    description: "LocalCoinSwap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/local-coin-swap/"
    },
    rank: "541"
},{
    name: "birake",
    code: "BIR",
    icon: "bir",
    longname: "Birake",
    description: "Birake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/birake/"
    },
    rank: "542"
},{
    name: "radium",
    code: "RADS",
    icon: "rads",
    longname: "Radium",
    description: "Radium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/radium/"
    },
    rank: "543"
},{
    name: "chatcoin",
    code: "CHAT",
    icon: "chat",
    longname: "ChatCoin",
    description: "ChatCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chatcoin/"
    },
    rank: "544"
},{
    name: "change",
    code: "CAG",
    icon: "cag",
    longname: "Change",
    description: "Change coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/change/"
    },
    rank: "545"
},{
    name: "carvertical",
    code: "CV",
    icon: "cv",
    longname: "carVertical",
    description: "carVertical coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carvertical/"
    },
    rank: "546"
},{
    name: "dimcoin",
    code: "DIM",
    icon: "dim",
    longname: "DIMCOIN",
    description: "DIMCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dimcoin/"
    },
    rank: "547"
},{
    name: "atc-coin",
    code: "ATCC",
    icon: "atcc",
    longname: "ATC Coin",
    description: "ATC Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atc-coin/"
    },
    rank: "548"
},{
    name: "pal-network",
    code: "PAL",
    icon: "pal",
    longname: "Pal Network",
    description: "Pal Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pal-network/"
    },
    rank: "549"
},{
    name: "remme",
    code: "REM",
    icon: "rem",
    longname: "Remme",
    description: "Remme coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/remme/"
    },
    rank: "550"
},{
    name: "zper",
    code: "ZPR",
    icon: "zpr",
    longname: "ZPER",
    description: "ZPER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zper/"
    },
    rank: "551"
},{
    name: "hydro-protocol",
    code: "HOT-1",
    icon: "hot-1",
    longname: "Hydro Protocol",
    description: "Hydro Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hydro-protocol/"
    },
    rank: "552"
},{
    name: "massgrid",
    code: "MGD",
    icon: "mgd",
    longname: "MassGrid",
    description: "MassGrid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/massgrid/"
    },
    rank: "553"
},{
    name: "niobium-coin",
    code: "NBC",
    icon: "nbc",
    longname: "Niobium Coin",
    description: "Niobium Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/niobium-coin/"
    },
    rank: "554"
},{
    name: "eden",
    code: "EDN",
    icon: "edn",
    longname: "Eden",
    description: "Eden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eden/"
    },
    rank: "555"
},{
    name: "popchain",
    code: "PCH",
    icon: "pch",
    longname: "POPCHAIN",
    description: "POPCHAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/popchain/"
    },
    rank: "556"
},{
    name: "gridcoin",
    code: "GRC",
    icon: "grc",
    longname: "GridCoin",
    description: "GridCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gridcoin/"
    },
    rank: "557"
},{
    name: "owndata",
    code: "OWN",
    icon: "own",
    longname: "OWNDATA",
    description: "OWNDATA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/owndata/"
    },
    rank: "558"
},{
    name: "datx",
    code: "DATX",
    icon: "datx",
    longname: "DATx",
    description: "DATx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datx/"
    },
    rank: "559"
},{
    name: "yocoin",
    code: "YOC",
    icon: "yoc",
    longname: "Yocoin",
    description: "Yocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yocoin/"
    },
    rank: "560"
},{
    name: "ulord",
    code: "UT",
    icon: "ut",
    longname: "Ulord",
    description: "Ulord coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ulord/"
    },
    rank: "561"
},{
    name: "lina",
    code: "LINA",
    icon: "lina",
    longname: "Lina",
    description: "Lina coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lina/"
    },
    rank: "562"
},{
    name: "howdoo",
    code: "UDOO",
    icon: "udoo",
    longname: "Howdoo",
    description: "Howdoo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/howdoo/"
    },
    rank: "563"
},{
    name: "cvcoin",
    code: "CVN",
    icon: "cvn",
    longname: "CVCoin",
    description: "CVCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cvcoin/"
    },
    rank: "564"
},{
    name: "uptoken",
    code: "UP",
    icon: "up",
    longname: "UpToken",
    description: "UpToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uptoken/"
    },
    rank: "565"
},{
    name: "linkeye",
    code: "LET",
    icon: "let",
    longname: "LinkEye",
    description: "LinkEye coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linkeye/"
    },
    rank: "566"
},{
    name: "axpire",
    code: "AXPR",
    icon: "axpr",
    longname: "aXpire",
    description: "aXpire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/axpire/"
    },
    rank: "567"
},{
    name: "global-social-chain",
    code: "GSC",
    icon: "gsc",
    longname: "Global Social Chain",
    description: "Global Social Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-social-chain/"
    },
    rank: "568"
},{
    name: "incent",
    code: "INCNT",
    icon: "incnt",
    longname: "Incent",
    description: "Incent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incent/"
    },
    rank: "569"
},{
    name: "eximchain",
    code: "EXC",
    icon: "exc",
    longname: "Eximchain",
    description: "Eximchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eximchain/"
    },
    rank: "570"
},{
    name: "omnitude",
    code: "ECOM",
    icon: "ecom",
    longname: "Omnitude",
    description: "Omnitude coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omnitude/"
    },
    rank: "571"
},{
    name: "bitdice",
    code: "CSNO",
    icon: "csno",
    longname: "BitDice",
    description: "BitDice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdice/"
    },
    rank: "572"
},{
    name: "dacsee",
    code: "DACS",
    icon: "dacs",
    longname: "DACSEE",
    description: "DACSEE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dacsee/"
    },
    rank: "573"
},{
    name: "spectrecoin",
    code: "XSPEC",
    icon: "xspec",
    longname: "Spectrecoin",
    description: "Spectrecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectrecoin/"
    },
    rank: "574"
},{
    name: "snetwork",
    code: "SNET",
    icon: "snet",
    longname: "Snetwork",
    description: "Snetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snetwork/"
    },
    rank: "575"
},{
    name: "new-power-coin",
    code: "NPW",
    icon: "npw",
    longname: "New Power Coin",
    description: "New Power Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/new-power-coin/"
    },
    rank: "576"
},{
    name: "neurochain",
    code: "NCC",
    icon: "ncc",
    longname: "NeuroChain",
    description: "NeuroChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neurochain/"
    },
    rank: "577"
},{
    name: "pura",
    code: "PURA",
    icon: "pura",
    longname: "Pura",
    description: "Pura coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pura/"
    },
    rank: "578"
},{
    name: "cargox",
    code: "CXO",
    icon: "cxo",
    longname: "CargoX",
    description: "CargoX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cargox/"
    },
    rank: "579"
},{
    name: "hollywoodcoin",
    code: "HWC",
    icon: "hwc",
    longname: "HollyWoodCoin",
    description: "HollyWoodCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hollywoodcoin/"
    },
    rank: "580"
},{
    name: "mktcoin",
    code: "MLM",
    icon: "mlm",
    longname: "MktCoin",
    description: "MktCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mktcoin/"
    },
    rank: "581"
},{
    name: "six",
    code: "SIX",
    icon: "six",
    longname: "SIX",
    description: "SIX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/six/"
    },
    rank: "582"
},{
    name: "suqa",
    code: "SUQA",
    icon: "suqa",
    longname: "SUQA",
    description: "SUQA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suqa/"
    },
    rank: "583"
},{
    name: "traxia",
    code: "TMT",
    icon: "tmt",
    longname: "TRAXIA",
    description: "TRAXIA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/traxia/"
    },
    rank: "584"
},{
    name: "nimiq",
    code: "NIM",
    icon: "nim",
    longname: "Nimiq",
    description: "Nimiq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nimiq/"
    },
    rank: "585"
},{
    name: "deeponion",
    code: "ONION",
    icon: "onion",
    longname: "DeepOnion",
    description: "DeepOnion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deeponion/"
    },
    rank: "586"
},{
    name: "phantasma",
    code: "SOUL",
    icon: "soul",
    longname: "Phantasma",
    description: "Phantasma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phantasma/"
    },
    rank: "587"
},{
    name: "aidoc",
    code: "AIDOC",
    icon: "aidoc",
    longname: "AI Doctor",
    description: "AI Doctor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidoc/"
    },
    rank: "588"
},{
    name: "karma",
    code: "KRM",
    icon: "krm",
    longname: "Karma",
    description: "Karma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karma/"
    },
    rank: "589"
},{
    name: "cardstack",
    code: "CARD",
    icon: "card",
    longname: "Cardstack",
    description: "Cardstack coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardstack/"
    },
    rank: "590"
},{
    name: "cononchain",
    code: "CZR",
    icon: "czr",
    longname: "CanonChain",
    description: "CanonChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cononchain/"
    },
    rank: "591"
},{
    name: "bitcoin-incognito",
    code: "XBI",
    icon: "xbi",
    longname: "Bitcoin Incognito",
    description: "Bitcoin Incognito coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-incognito/"
    },
    rank: "592"
},{
    name: "liquidity-network",
    code: "LQD",
    icon: "lqd",
    longname: "Liquidity Network",
    description: "Liquidity Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/liquidity-network/"
    },
    rank: "593"
},{
    name: "vericoin",
    code: "VRC",
    icon: "vrc",
    longname: "VeriCoin",
    description: "VeriCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vericoin/"
    },
    rank: "594"
},{
    name: "xriba",
    code: "XRA",
    icon: "xra",
    longname: "Xriba",
    description: "Xriba coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xriba/"
    },
    rank: "595"
},{
    name: "contentbox",
    code: "BOX-1",
    icon: "box-1",
    longname: "ContentBox",
    description: "ContentBox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/contentbox/"
    },
    rank: "596"
},{
    name: "tolar",
    code: "TOL",
    icon: "tol",
    longname: "Tolar",
    description: "Tolar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tolar/"
    },
    rank: "597"
},{
    name: "mintcoin",
    code: "MINT",
    icon: "mint",
    longname: "MintCoin",
    description: "MintCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mintcoin/"
    },
    rank: "598"
},{
    name: "energitoken",
    code: "ETK",
    icon: "etk",
    longname: "EnergiToken",
    description: "EnergiToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energitoken/"
    },
    rank: "599"
},{
    name: "crowd-machine",
    code: "CMCT",
    icon: "cmct",
    longname: "Crowd Machine",
    description: "Crowd Machine coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowd-machine/"
    },
    rank: "600"
},{
    name: "bdt-token",
    code: "BDT",
    icon: "bdt",
    longname: "BDT Token",
    description: "BDT Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bdt-token/"
    },
    rank: "601"
},{
    name: "stealth",
    code: "XST",
    icon: "xst",
    longname: "Stealth",
    description: "Stealth coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stealth/"
    },
    rank: "602"
},{
    name: "zelcash",
    code: "ZEL",
    icon: "zel",
    longname: "ZelCash",
    description: "ZelCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zelcash/"
    },
    rank: "603"
},{
    name: "stk",
    code: "STK",
    icon: "stk",
    longname: "STK",
    description: "STK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stk/"
    },
    rank: "604"
},{
    name: "hashcoin",
    code: "HSC",
    icon: "hsc",
    longname: "HashCoin",
    description: "HashCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hashcoin/"
    },
    rank: "605"
},{
    name: "dotcoin",
    code: "DOT",
    icon: "dot",
    longname: "Dotcoin",
    description: "Dotcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dotcoin/"
    },
    rank: "606"
},{
    name: "humaniq",
    code: "HMQ",
    icon: "hmq",
    longname: "Humaniq",
    description: "Humaniq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/humaniq/"
    },
    rank: "607"
},{
    name: "domraider",
    code: "DRT",
    icon: "drt",
    longname: "DomRaider",
    description: "DomRaider coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/domraider/"
    },
    rank: "608"
},{
    name: "ubex",
    code: "UBEX",
    icon: "ubex",
    longname: "Ubex",
    description: "Ubex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubex/"
    },
    rank: "609"
},{
    name: "kcash",
    code: "KCASH",
    icon: "kcash",
    longname: "Kcash",
    description: "Kcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kcash/"
    },
    rank: "610"
},{
    name: "unibright",
    code: "UBT",
    icon: "ubt",
    longname: "Unibright",
    description: "Unibright coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unibright/"
    },
    rank: "611"
},{
    name: "cashbet-coin",
    code: "CBC",
    icon: "cbc",
    longname: "CashBet Coin",
    description: "CashBet Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashbet-coin/"
    },
    rank: "612"
},{
    name: "banca",
    code: "BANCA",
    icon: "banca",
    longname: "Banca",
    description: "Banca coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/banca/"
    },
    rank: "613"
},{
    name: "auroracoin",
    code: "AUR",
    icon: "aur",
    longname: "Auroracoin",
    description: "Auroracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auroracoin/"
    },
    rank: "614"
},{
    name: "paycent",
    code: "PYN",
    icon: "pyn",
    longname: "PAYCENT",
    description: "PAYCENT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paycent/"
    },
    rank: "615"
},{
    name: "sharder",
    code: "SS",
    icon: "ss",
    longname: "Sharder",
    description: "Sharder coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharder/"
    },
    rank: "616"
},{
    name: "gonetwork",
    code: "GOT-1",
    icon: "got-1",
    longname: "GoNetwork",
    description: "GoNetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gonetwork/"
    },
    rank: "617"
},{
    name: "ixledger",
    code: "IXT",
    icon: "ixt",
    longname: "IXT",
    description: "IXT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixledger/"
    },
    rank: "618"
},{
    name: "pedity",
    code: "PEDI",
    icon: "pedi",
    longname: "Pedity",
    description: "Pedity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pedity/"
    },
    rank: "619"
},{
    name: "paypex",
    code: "PAYX",
    icon: "payx",
    longname: "Paypex",
    description: "Paypex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paypex/"
    },
    rank: "620"
},{
    name: "synereo",
    code: "AMP",
    icon: "amp",
    longname: "HyperSpace",
    description: "HyperSpace coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synereo/"
    },
    rank: "621"
},{
    name: "circuits-of-value",
    code: "COVAL",
    icon: "coval",
    longname: "Circuits of Value",
    description: "Circuits of Value coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/circuits-of-value/"
    },
    rank: "622"
},{
    name: "oraclechain",
    code: "OCT",
    icon: "oct",
    longname: "OracleChain",
    description: "OracleChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oraclechain/"
    },
    rank: "623"
},{
    name: "suncontract",
    code: "SNC",
    icon: "snc",
    longname: "SunContract",
    description: "SunContract coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suncontract/"
    },
    rank: "624"
},{
    name: "musicoin",
    code: "MUSIC",
    icon: "music",
    longname: "Musicoin",
    description: "Musicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/musicoin/"
    },
    rank: "625"
},{
    name: "midasprotocol",
    code: "MAS",
    icon: "mas",
    longname: "MidasProtocol",
    description: "MidasProtocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/midasprotocol/"
    },
    rank: "626"
},{
    name: "bodhi",
    code: "BOT",
    icon: "bot",
    longname: "Bodhi",
    description: "Bodhi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bodhi/"
    },
    rank: "627"
},{
    name: "amlt",
    code: "AMLT",
    icon: "amlt",
    longname: "AMLT",
    description: "AMLT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amlt/"
    },
    rank: "628"
},{
    name: "wearesatoshi",
    code: "WSX",
    icon: "wsx",
    longname: "WeAreSatoshi",
    description: "WeAreSatoshi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wearesatoshi/"
    },
    rank: "629"
},{
    name: "databits",
    code: "DTB",
    icon: "dtb",
    longname: "Databits",
    description: "Databits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/databits/"
    },
    rank: "630"
},{
    name: "morpheus-network",
    code: "MRPH",
    icon: "mrph",
    longname: "Morpheus.Network",
    description: "Morpheus.Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/morpheus-network/"
    },
    rank: "631"
},{
    name: "vetri",
    code: "VLD",
    icon: "vld",
    longname: "Vetri",
    description: "Vetri coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vetri/"
    },
    rank: "632"
},{
    name: "dav-coin",
    code: "DAV",
    icon: "dav",
    longname: "DAV Coin",
    description: "DAV Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dav-coin/"
    },
    rank: "633"
},{
    name: "eroscoin",
    code: "ERO",
    icon: "ero",
    longname: "Eroscoin",
    description: "Eroscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eroscoin/"
    },
    rank: "634"
},{
    name: "vinchain",
    code: "VIN",
    icon: "vin",
    longname: "VINchain",
    description: "VINchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vinchain/"
    },
    rank: "635"
},{
    name: "bitmart-token",
    code: "BMX",
    icon: "bmx",
    longname: "BitMart Token",
    description: "BitMart Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitmart-token/"
    },
    rank: "636"
},{
    name: "zeusshield",
    code: "ZSC",
    icon: "zsc",
    longname: "Zeusshield",
    description: "Zeusshield coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeusshield/"
    },
    rank: "637"
},{
    name: "gambit",
    code: "GAM",
    icon: "gam",
    longname: "Gambit",
    description: "Gambit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gambit/"
    },
    rank: "638"
},{
    name: "zmine",
    code: "ZMN",
    icon: "zmn",
    longname: "ZMINE",
    description: "ZMINE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zmine/"
    },
    rank: "639"
},{
    name: "omni",
    code: "OMNI",
    icon: "omni",
    longname: "Omni",
    description: "Omni coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omni/"
    },
    rank: "640"
},{
    name: "hacken",
    code: "HKN",
    icon: "hkn",
    longname: "Hacken",
    description: "Hacken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hacken/"
    },
    rank: "641"
},{
    name: "zephyr",
    code: "ZEPH",
    icon: "zeph",
    longname: "Zephyr",
    description: "Zephyr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zephyr/"
    },
    rank: "642"
},{
    name: "masari",
    code: "MSR",
    icon: "msr",
    longname: "Masari",
    description: "Masari coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masari/"
    },
    rank: "643"
},{
    name: "constellation",
    code: "DAG",
    icon: "dag",
    longname: "Constellation",
    description: "Constellation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/constellation/"
    },
    rank: "644"
},{
    name: "medical-chain",
    code: "MTN",
    icon: "mtn",
    longname: "Medicalchain",
    description: "Medicalchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medical-chain/"
    },
    rank: "645"
},{
    name: "robet",
    code: "ROBET",
    icon: "robet",
    longname: "RoBET",
    description: "RoBET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/robet/"
    },
    rank: "646"
},{
    name: "spectre-utility",
    code: "SXUT",
    icon: "sxut",
    longname: "Spectre.ai Utility Token",
    description: "Spectre.ai Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-utility/"
    },
    rank: "647"
},{
    name: "ifoods-chain",
    code: "IFOOD",
    icon: "ifood",
    longname: "Ifoods Chain",
    description: "Ifoods Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ifoods-chain/"
    },
    rank: "648"
},{
    name: "shivom",
    code: "OMX",
    icon: "omx",
    longname: "Shivom",
    description: "Shivom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shivom/"
    },
    rank: "649"
},{
    name: "mysterium",
    code: "MYST",
    icon: "myst",
    longname: "Mysterium",
    description: "Mysterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mysterium/"
    },
    rank: "650"
},{
    name: "indahash",
    code: "IDH",
    icon: "idh",
    longname: "indaHash",
    description: "indaHash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indahash/"
    },
    rank: "651"
},{
    name: "starta",
    code: "STA",
    icon: "sta",
    longname: "Starta",
    description: "Starta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starta/"
    },
    rank: "652"
},{
    name: "daex",
    code: "DAX",
    icon: "dax",
    longname: "DAEX",
    description: "DAEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daex/"
    },
    rank: "653"
},{
    name: "ink-protocol",
    code: "XNK",
    icon: "xnk",
    longname: "Ink Protocol",
    description: "Ink Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ink-protocol/"
    },
    rank: "654"
},{
    name: "ucash",
    code: "UCASH",
    icon: "ucash",
    longname: "UNIVERSAL CASH",
    description: "UNIVERSAL CASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ucash/"
    },
    rank: "655"
},{
    name: "trueflip",
    code: "TFL",
    icon: "tfl",
    longname: "TrueFlip",
    description: "TrueFlip coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trueflip/"
    },
    rank: "656"
},{
    name: "smartshare",
    code: "SSP",
    icon: "ssp",
    longname: "Smartshare",
    description: "Smartshare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartshare/"
    },
    rank: "657"
},{
    name: "deviantcoin",
    code: "DEV",
    icon: "dev",
    longname: "DeviantCoin",
    description: "DeviantCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deviantcoin/"
    },
    rank: "658"
},{
    name: "solaris",
    code: "XLR",
    icon: "xlr",
    longname: "Solaris",
    description: "Solaris coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solaris/"
    },
    rank: "659"
},{
    name: "cappasity",
    code: "CAPP",
    icon: "capp",
    longname: "Cappasity",
    description: "Cappasity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cappasity/"
    },
    rank: "660"
},{
    name: "molecule",
    code: "MOL",
    icon: "mol",
    longname: "Molecule",
    description: "Molecule coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/molecule/"
    },
    rank: "661"
},{
    name: "gems-protocol",
    code: "GEM",
    icon: "gem",
    longname: "Gems ",
    description: "Gems  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gems-protocol/"
    },
    rank: "662"
},{
    name: "litex",
    code: "LXT",
    icon: "lxt",
    longname: "Litex",
    description: "Litex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litex/"
    },
    rank: "663"
},{
    name: "b2bcoin",
    code: "BBC",
    icon: "bbc",
    longname: "TraDove B2BCoin",
    description: "TraDove B2BCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b2bcoin/"
    },
    rank: "664"
},{
    name: "ormeus-coin",
    code: "ORME",
    icon: "orme",
    longname: "Ormeus Coin",
    description: "Ormeus Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ormeus-coin/"
    },
    rank: "665"
},{
    name: "exrnchain",
    code: "EXRN",
    icon: "exrn",
    longname: "EXRNchain",
    description: "EXRNchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exrnchain/"
    },
    rank: "666"
},{
    name: "banyan-network",
    code: "BBN",
    icon: "bbn",
    longname: "Banyan Network",
    description: "Banyan Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/banyan-network/"
    },
    rank: "667"
},{
    name: "nebula-ai",
    code: "NBAI",
    icon: "nbai",
    longname: "Nebula AI",
    description: "Nebula AI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nebula-ai/"
    },
    rank: "668"
},{
    name: "ethersocial",
    code: "ESN",
    icon: "esn",
    longname: "Ethersocial",
    description: "Ethersocial coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethersocial/"
    },
    rank: "669"
},{
    name: "prasm",
    code: "PSM",
    icon: "psm",
    longname: "PRASM",
    description: "PRASM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prasm/"
    },
    rank: "670"
},{
    name: "egretia",
    code: "EGT",
    icon: "egt",
    longname: "Egretia",
    description: "Egretia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/egretia/"
    },
    rank: "671"
},{
    name: "bitsend",
    code: "BSD",
    icon: "bsd",
    longname: "BitSend",
    description: "BitSend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsend/"
    },
    rank: "672"
},{
    name: "airbloc",
    code: "ABL",
    icon: "abl",
    longname: "Airbloc",
    description: "Airbloc coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airbloc/"
    },
    rank: "673"
},{
    name: "real",
    code: "REAL",
    icon: "real",
    longname: "REAL",
    description: "REAL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/real/"
    },
    rank: "674"
},{
    name: "stellite",
    code: "XTL",
    icon: "xtl",
    longname: "Stellite",
    description: "Stellite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stellite/"
    },
    rank: "675"
},{
    name: "guppy",
    code: "GUP",
    icon: "gup",
    longname: "Matchpool",
    description: "Matchpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guppy/"
    },
    rank: "676"
},{
    name: "trustnote",
    code: "TTT",
    icon: "ttt",
    longname: "TrustNote",
    description: "TrustNote coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trustnote/"
    },
    rank: "677"
},{
    name: "solarcoin",
    code: "SLR",
    icon: "slr",
    longname: "SolarCoin",
    description: "SolarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solarcoin/"
    },
    rank: "678"
},{
    name: "experty",
    code: "EXY",
    icon: "exy",
    longname: "Experty",
    description: "Experty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experty/"
    },
    rank: "679"
},{
    name: "rightmesh",
    code: "RMESH",
    icon: "rmesh",
    longname: "RightMesh",
    description: "RightMesh coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rightmesh/"
    },
    rank: "680"
},{
    name: "neurotoken",
    code: "NTK",
    icon: "ntk",
    longname: "Neurotoken",
    description: "Neurotoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neurotoken/"
    },
    rank: "681"
},{
    name: "gene-source-code-chain",
    code: "GENE",
    icon: "gene",
    longname: "Gene Source Code Chain",
    description: "Gene Source Code Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gene-source-code-chain/"
    },
    rank: "682"
},{
    name: "flixxo",
    code: "FLIXX",
    icon: "flixx",
    longname: "Flixxo",
    description: "Flixxo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flixxo/"
    },
    rank: "683"
},{
    name: "vexanium",
    code: "VEX",
    icon: "vex",
    longname: "Vexanium",
    description: "Vexanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vexanium/"
    },
    rank: "684"
},{
    name: "on-live",
    code: "ONL",
    icon: "onl",
    longname: "On.Live",
    description: "On.Live coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/on-live/"
    },
    rank: "685"
},{
    name: "newyorkcoin",
    code: "NYC",
    icon: "nyc",
    longname: "NewYorkCoin",
    description: "NewYorkCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newyorkcoin/"
    },
    rank: "686"
},{
    name: "qwark",
    code: "QWARK",
    icon: "qwark",
    longname: "Qwark",
    description: "Qwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qwark/"
    },
    rank: "687"
},{
    name: "trinity-network-credit",
    code: "TNC",
    icon: "tnc",
    longname: "Trinity Network Credit",
    description: "Trinity Network Credit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trinity-network-credit/"
    },
    rank: "688"
},{
    name: "chronobank",
    code: "TIME",
    icon: "time",
    longname: "Chronobank",
    description: "Chronobank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronobank/"
    },
    rank: "689"
},{
    name: "xpa",
    code: "XPA",
    icon: "xpa",
    longname: "XPA",
    description: "XPA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xpa/"
    },
    rank: "690"
},{
    name: "helium",
    code: "HLM",
    icon: "hlm",
    longname: "Helium",
    description: "Helium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helium/"
    },
    rank: "691"
},{
    name: "dubaicoin-dbix",
    code: "DBIX",
    icon: "dbix",
    longname: "DubaiCoin",
    description: "DubaiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dubaicoin-dbix/"
    },
    rank: "692"
},{
    name: "gobyte",
    code: "GBX",
    icon: "gbx",
    longname: "GoByte",
    description: "GoByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gobyte/"
    },
    rank: "693"
},{
    name: "geocoin",
    code: "GEO",
    icon: "geo",
    longname: "GeoCoin",
    description: "GeoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/geocoin/"
    },
    rank: "694"
},{
    name: "welltrado",
    code: "WTL",
    icon: "wtl",
    longname: "Welltrado",
    description: "Welltrado coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/welltrado/"
    },
    rank: "695"
},{
    name: "novacoin",
    code: "NVC",
    icon: "nvc",
    longname: "Novacoin",
    description: "Novacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/novacoin/"
    },
    rank: "696"
},{
    name: "gentarium",
    code: "GTM",
    icon: "gtm",
    longname: "Gentarium",
    description: "Gentarium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gentarium/"
    },
    rank: "697"
},{
    name: "turtlecoin",
    code: "TRTL",
    icon: "trtl",
    longname: "Turtlecoin",
    description: "Turtlecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/turtlecoin/"
    },
    rank: "698"
},{
    name: "echolink",
    code: "EKO",
    icon: "eko",
    longname: "EchoLink",
    description: "EchoLink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/echolink/"
    },
    rank: "699"
},{
    name: "boxx-token-blockparty",
    code: "BOXX",
    icon: "boxx",
    longname: "BOXX Token [Blockparty]",
    description: "BOXX Token [Blockparty] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boxx-token-blockparty/"
    },
    rank: "700"
},{
    name: "mib-coin",
    code: "MIB",
    icon: "mib",
    longname: "MIB Coin",
    description: "MIB Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mib-coin/"
    },
    rank: "701"
},{
    name: "rivetz",
    code: "RVT",
    icon: "rvt",
    longname: "Rivetz",
    description: "Rivetz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rivetz/"
    },
    rank: "702"
},{
    name: "patientory",
    code: "PTOY",
    icon: "ptoy",
    longname: "Patientory",
    description: "Patientory coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/patientory/"
    },
    rank: "703"
},{
    name: "encrypgen",
    code: "DNA",
    icon: "dna",
    longname: "EncrypGen",
    description: "EncrypGen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encrypgen/"
    },
    rank: "704"
},{
    name: "daostack",
    code: "GEN",
    icon: "gen",
    longname: "DAOstack",
    description: "DAOstack coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daostack/"
    },
    rank: "705"
},{
    name: "nolimitcoin",
    code: "NLC2",
    icon: "nlc2",
    longname: "NoLimitCoin",
    description: "NoLimitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nolimitcoin/"
    },
    rank: "706"
},{
    name: "selfsell",
    code: "SSC",
    icon: "ssc",
    longname: "SelfSell",
    description: "SelfSell coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfsell/"
    },
    rank: "707"
},{
    name: "wabnetwork",
    code: "WAB",
    icon: "wab",
    longname: "WABnetwork",
    description: "WABnetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wabnetwork/"
    },
    rank: "708"
},{
    name: "formosa-financial",
    code: "FMF",
    icon: "fmf",
    longname: "Formosa Financial",
    description: "Formosa Financial coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/formosa-financial/"
    },
    rank: "709"
},{
    name: "1world",
    code: "1WO",
    icon: "1wo",
    longname: "1World",
    description: "1World coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1world/"
    },
    rank: "710"
},{
    name: "menlo-one",
    code: "ONE",
    icon: "one",
    longname: "Menlo One",
    description: "Menlo One coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/menlo-one/"
    },
    rank: "711"
},{
    name: "farmatrust",
    code: "FTT",
    icon: "ftt",
    longname: "FarmaTrust",
    description: "FarmaTrust coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/farmatrust/"
    },
    rank: "712"
},{
    name: "ugchain",
    code: "UGC",
    icon: "ugc",
    longname: "ugChain",
    description: "ugChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ugchain/"
    },
    rank: "713"
},{
    name: "morpheus-labs",
    code: "MITX",
    icon: "mitx",
    longname: "Morpheus Labs",
    description: "Morpheus Labs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/morpheus-labs/"
    },
    rank: "714"
},{
    name: "dovu",
    code: "DOV",
    icon: "dov",
    longname: "Dovu",
    description: "Dovu coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dovu/"
    },
    rank: "715"
},{
    name: "cryptosolartech",
    code: "CST",
    icon: "cst",
    longname: "Cryptosolartech",
    description: "Cryptosolartech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptosolartech/"
    },
    rank: "716"
},{
    name: "oneledger",
    code: "OLT",
    icon: "olt",
    longname: "OneLedger",
    description: "OneLedger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oneledger/"
    },
    rank: "717"
},{
    name: "okcash",
    code: "OK",
    icon: "ok",
    longname: "OKCash",
    description: "OKCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/okcash/"
    },
    rank: "718"
},{
    name: "commerceblock",
    code: "CBT",
    icon: "cbt",
    longname: "CommerceBlock",
    description: "CommerceBlock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commerceblock/"
    },
    rank: "719"
},{
    name: "lightpaycoin",
    code: "LPC",
    icon: "lpc",
    longname: "Lightpaycoin",
    description: "Lightpaycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lightpaycoin/"
    },
    rank: "720"
},{
    name: "coinpoker",
    code: "CHP",
    icon: "chp",
    longname: "CoinPoker",
    description: "CoinPoker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinpoker/"
    },
    rank: "721"
},{
    name: "the-abyss",
    code: "ABYSS",
    icon: "abyss",
    longname: "The Abyss",
    description: "The Abyss coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-abyss/"
    },
    rank: "722"
},{
    name: "hashgard",
    code: "GARD",
    icon: "gard",
    longname: "Hashgard",
    description: "Hashgard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hashgard/"
    },
    rank: "723"
},{
    name: "nusd",
    code: "NUSD",
    icon: "nusd",
    longname: "nUSD",
    description: "nUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nusd/"
    },
    rank: "724"
},{
    name: "cyclean",
    code: "CCL",
    icon: "ccl",
    longname: "CYCLEAN",
    description: "CYCLEAN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cyclean/"
    },
    rank: "725"
},{
    name: "expanse",
    code: "EXP",
    icon: "exp",
    longname: "Expanse",
    description: "Expanse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/expanse/"
    },
    rank: "726"
},{
    name: "aventus",
    code: "AVT",
    icon: "avt",
    longname: "Aventus",
    description: "Aventus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aventus/"
    },
    rank: "727"
},{
    name: "dnotes",
    code: "NOTE",
    icon: "note",
    longname: "DNotes",
    description: "DNotes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dnotes/"
    },
    rank: "728"
},{
    name: "trust",
    code: "TRST",
    icon: "trst",
    longname: "WeTrust",
    description: "WeTrust coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trust/"
    },
    rank: "729"
},{
    name: "red",
    code: "RED",
    icon: "red",
    longname: "RED",
    description: "RED coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/red/"
    },
    rank: "730"
},{
    name: "syndicate",
    code: "SYNX",
    icon: "synx",
    longname: "Syndicate",
    description: "Syndicate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syndicate/"
    },
    rank: "731"
},{
    name: "olive",
    code: "OLE",
    icon: "ole",
    longname: "Olive",
    description: "Olive coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/olive/"
    },
    rank: "732"
},{
    name: "debitum-network",
    code: "DEB",
    icon: "deb",
    longname: "Debitum",
    description: "Debitum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/debitum-network/"
    },
    rank: "733"
},{
    name: "vites",
    code: "VITES",
    icon: "vites",
    longname: "Vites",
    description: "Vites coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vites/"
    },
    rank: "734"
},{
    name: "airwire",
    code: "WIRE",
    icon: "wire",
    longname: "AirWire",
    description: "AirWire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airwire/"
    },
    rank: "735"
},{
    name: "arbidex",
    code: "ABX",
    icon: "abx",
    longname: "Arbidex",
    description: "Arbidex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbidex/"
    },
    rank: "736"
},{
    name: "merculet",
    code: "MVP",
    icon: "mvp",
    longname: "Merculet",
    description: "Merculet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/merculet/"
    },
    rank: "737"
},{
    name: "bitshares-music",
    code: "XSD",
    icon: "xsd",
    longname: "SounDAC",
    description: "SounDAC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitshares-music/"
    },
    rank: "738"
},{
    name: "zap",
    code: "ZAP",
    icon: "zap",
    longname: "Zap",
    description: "Zap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zap/"
    },
    rank: "739"
},{
    name: "savedroid",
    code: "SVD",
    icon: "svd",
    longname: "savedroid",
    description: "savedroid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/savedroid/"
    },
    rank: "740"
},{
    name: "qbao",
    code: "QBT",
    icon: "qbt",
    longname: "Qbao",
    description: "Qbao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbao/"
    },
    rank: "741"
},{
    name: "flip",
    code: "FLP",
    icon: "flp",
    longname: "FLIP",
    description: "FLIP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flip/"
    },
    rank: "742"
},{
    name: "0xbtc",
    code: "0xBTC",
    icon: "0xbtc",
    longname: "0xBitcoin",
    description: "0xBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0xbtc/"
    },
    rank: "743"
},{
    name: "copytrack",
    code: "CPY",
    icon: "cpy",
    longname: "COPYTRACK",
    description: "COPYTRACK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/copytrack/"
    },
    rank: "744"
},{
    name: "effect-ai",
    code: "EFX",
    icon: "efx",
    longname: "Effect.AI",
    description: "Effect.AI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/effect-ai/"
    },
    rank: "745"
},{
    name: "silent-notary",
    code: "SNTR",
    icon: "sntr",
    longname: "Silent Notary",
    description: "Silent Notary coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/silent-notary/"
    },
    rank: "746"
},{
    name: "friends",
    code: "FDZ",
    icon: "fdz",
    longname: "Friendz",
    description: "Friendz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/friends/"
    },
    rank: "747"
},{
    name: "nework",
    code: "NKC",
    icon: "nkc",
    longname: "Nework",
    description: "Nework coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nework/"
    },
    rank: "748"
},{
    name: "sphere",
    code: "SPHR",
    icon: "sphr",
    longname: "Sphere",
    description: "Sphere coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sphere/"
    },
    rank: "749"
},{
    name: "adshares",
    code: "ADST",
    icon: "adst",
    longname: "AdShares",
    description: "AdShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adshares/"
    },
    rank: "750"
},{
    name: "swarm-city",
    code: "SWT",
    icon: "swt",
    longname: "Swarm City",
    description: "Swarm City coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-city/"
    },
    rank: "751"
},{
    name: "measurable-data-token",
    code: "MDT",
    icon: "mdt",
    longname: "Measurable Data Token",
    description: "Measurable Data Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/measurable-data-token/"
    },
    rank: "752"
},{
    name: "capricoin",
    code: "CPC-1",
    icon: "cpc-1",
    longname: "Capricoin",
    description: "Capricoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/capricoin/"
    },
    rank: "753"
},{
    name: "1337coin",
    code: "1337",
    icon: "1337",
    longname: "Elite",
    description: "Elite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1337coin/"
    },
    rank: "754"
},{
    name: "datawallet",
    code: "DXT",
    icon: "dxt",
    longname: "Datawallet",
    description: "Datawallet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datawallet/"
    },
    rank: "755"
},{
    name: "autonio",
    code: "NIO",
    icon: "nio",
    longname: "Autonio",
    description: "Autonio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/autonio/"
    },
    rank: "756"
},{
    name: "pirl",
    code: "PIRL",
    icon: "pirl",
    longname: "Pirl",
    description: "Pirl coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pirl/"
    },
    rank: "757"
},{
    name: "starbase",
    code: "STAR",
    icon: "star",
    longname: "Starbase",
    description: "Starbase coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starbase/"
    },
    rank: "758"
},{
    name: "sharpe-platform-token",
    code: "SHP",
    icon: "shp",
    longname: "Sharpe Platform Token",
    description: "Sharpe Platform Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharpe-platform-token/"
    },
    rank: "759"
},{
    name: "shield-xsh",
    code: "XSH",
    icon: "xsh",
    longname: "SHIELD",
    description: "SHIELD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shield-xsh/"
    },
    rank: "760"
},{
    name: "sibcoin",
    code: "SIB",
    icon: "sib",
    longname: "SIBCoin",
    description: "SIBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sibcoin/"
    },
    rank: "761"
},{
    name: "golos",
    code: "GOLOS",
    icon: "golos",
    longname: "Golos",
    description: "Golos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golos/"
    },
    rank: "762"
},{
    name: "food",
    code: "FOOD",
    icon: "food",
    longname: "FoodCoin",
    description: "FoodCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/food/"
    },
    rank: "763"
},{
    name: "forkcoin",
    code: "FORK",
    icon: "fork",
    longname: "Forkcoin",
    description: "Forkcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/forkcoin/"
    },
    rank: "764"
},{
    name: "foldingcoin",
    code: "FLDC",
    icon: "fldc",
    longname: "FoldingCoin",
    description: "FoldingCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/foldingcoin/"
    },
    rank: "765"
},{
    name: "b3coin",
    code: "KB3",
    icon: "kb3",
    longname: "B3Coin",
    description: "B3Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b3coin/"
    },
    rank: "766"
},{
    name: "datum",
    code: "DAT",
    icon: "dat",
    longname: "Datum",
    description: "Datum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datum/"
    },
    rank: "767"
},{
    name: "curecoin",
    code: "CURE",
    icon: "cure",
    longname: "Curecoin",
    description: "Curecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/curecoin/"
    },
    rank: "768"
},{
    name: "aidcoin",
    code: "AID",
    icon: "aid",
    longname: "AidCoin",
    description: "AidCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidcoin/"
    },
    rank: "769"
},{
    name: "insights-network",
    code: "INSTAR",
    icon: "instar",
    longname: "Insights Network",
    description: "Insights Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insights-network/"
    },
    rank: "770"
},{
    name: "artbyte",
    code: "ABY",
    icon: "aby",
    longname: "ArtByte",
    description: "ArtByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/artbyte/"
    },
    rank: "771"
},{
    name: "shipchain",
    code: "SHIP",
    icon: "ship",
    longname: "ShipChain",
    description: "ShipChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shipchain/"
    },
    rank: "772"
},{
    name: "energo",
    code: "TSL",
    icon: "tsl",
    longname: "Energo",
    description: "Energo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energo/"
    },
    rank: "773"
},{
    name: "uquid-coin",
    code: "UQC",
    icon: "uqc",
    longname: "Uquid Coin",
    description: "Uquid Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uquid-coin/"
    },
    rank: "774"
},{
    name: "siacashcoin",
    code: "SCC",
    icon: "scc",
    longname: "SiaCashCoin",
    description: "SiaCashCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/siacashcoin/"
    },
    rank: "775"
},{
    name: "swisscoin",
    code: "SIC",
    icon: "sic",
    longname: "Swisscoin",
    description: "Swisscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swisscoin/"
    },
    rank: "776"
},{
    name: "goldcoin",
    code: "GLD",
    icon: "gld",
    longname: "GoldCoin",
    description: "GoldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldcoin/"
    },
    rank: "777"
},{
    name: "atmos",
    code: "ATMOS",
    icon: "atmos",
    longname: "Atmos",
    description: "Atmos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atmos/"
    },
    rank: "778"
},{
    name: "snovio",
    code: "SNOV",
    icon: "snov",
    longname: "Snovian.Space",
    description: "Snovian.Space coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snovio/"
    },
    rank: "779"
},{
    name: "insurepal",
    code: "IPL",
    icon: "ipl",
    longname: "VouchForMe",
    description: "VouchForMe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insurepal/"
    },
    rank: "780"
},{
    name: "atonomi",
    code: "ATMI",
    icon: "atmi",
    longname: "Atonomi",
    description: "Atonomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atonomi/"
    },
    rank: "781"
},{
    name: "tokes",
    code: "TKS",
    icon: "tks",
    longname: "Tokes",
    description: "Tokes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokes/"
    },
    rank: "782"
},{
    name: "heronode",
    code: "HER",
    icon: "her",
    longname: "HeroNode",
    description: "HeroNode coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heronode/"
    },
    rank: "783"
},{
    name: "acute-angle-cloud",
    code: "AAC",
    icon: "aac",
    longname: "Acute Angle Cloud",
    description: "Acute Angle Cloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acute-angle-cloud/"
    },
    rank: "784"
},{
    name: "hoqu",
    code: "HQX",
    icon: "hqx",
    longname: "HOQU",
    description: "HOQU coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hoqu/"
    },
    rank: "785"
},{
    name: "pinkcoin",
    code: "PINK",
    icon: "pink",
    longname: "PinkCoin",
    description: "PinkCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pinkcoin/"
    },
    rank: "786"
},{
    name: "dynamic",
    code: "DYN",
    icon: "dyn",
    longname: "Dynamic",
    description: "Dynamic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic/"
    },
    rank: "787"
},{
    name: "relex",
    code: "RLX",
    icon: "rlx",
    longname: "Relex",
    description: "Relex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/relex/"
    },
    rank: "788"
},{
    name: "neoscoin",
    code: "NEOS",
    icon: "neos",
    longname: "NeosCoin",
    description: "NeosCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neoscoin/"
    },
    rank: "789"
},{
    name: "life",
    code: "LIFE",
    icon: "life",
    longname: "LIFE",
    description: "LIFE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/life/"
    },
    rank: "790"
},{
    name: "exclusivecoin",
    code: "EXCL",
    icon: "excl",
    longname: "ExclusiveCoin",
    description: "ExclusiveCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exclusivecoin/"
    },
    rank: "791"
},{
    name: "canyacoin",
    code: "CAN",
    icon: "can",
    longname: "CanYaCoin",
    description: "CanYaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/canyacoin/"
    },
    rank: "792"
},{
    name: "fox-trading",
    code: "FOXT",
    icon: "foxt",
    longname: "Fox Trading",
    description: "Fox Trading coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fox-trading/"
    },
    rank: "793"
},{
    name: "bee-token",
    code: "BEE",
    icon: "bee",
    longname: "Bee Token",
    description: "Bee Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bee-token/"
    },
    rank: "794"
},{
    name: "bitrent",
    code: "RNTB",
    icon: "rntb",
    longname: "BitRent",
    description: "BitRent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitrent/"
    },
    rank: "795"
},{
    name: "evencoin",
    code: "EVN-1",
    icon: "evn-1",
    longname: "EvenCoin",
    description: "EvenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evencoin/"
    },
    rank: "796"
},{
    name: "alphacat",
    code: "ACAT",
    icon: "acat",
    longname: "Alphacat",
    description: "Alphacat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alphacat/"
    },
    rank: "797"
},{
    name: "arionum",
    code: "ARO",
    icon: "aro",
    longname: "Arionum",
    description: "Arionum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arionum/"
    },
    rank: "798"
},{
    name: "coinsuper-ecosystem-network",
    code: "CEN",
    icon: "cen",
    longname: "Coinsuper Ecosystem Network",
    description: "Coinsuper Ecosystem Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinsuper-ecosystem-network/"
    },
    rank: "799"
},{
    name: "hicoin",
    code: "XHI",
    icon: "xhi",
    longname: "HiCoin",
    description: "HiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hicoin/"
    },
    rank: "800"
},{
    name: "mybit",
    code: "MYB",
    icon: "myb",
    longname: "MyBit",
    description: "MyBit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mybit/"
    },
    rank: "801"
},{
    name: "clearpoll",
    code: "POLL",
    icon: "poll",
    longname: "ClearPoll",
    description: "ClearPoll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearpoll/"
    },
    rank: "802"
},{
    name: "alax",
    code: "ALX",
    icon: "alx",
    longname: "ALAX",
    description: "ALAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alax/"
    },
    rank: "803"
},{
    name: "ac3",
    code: "AC3",
    icon: "ac3",
    longname: "AC3",
    description: "AC3 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ac3/"
    },
    rank: "804"
},{
    name: "rate3",
    code: "RTE",
    icon: "rte",
    longname: "Rate3",
    description: "Rate3 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rate3/"
    },
    rank: "805"
},{
    name: "ailink-token",
    code: "ALI",
    icon: "ali",
    longname: "AiLink Token",
    description: "AiLink Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ailink-token/"
    },
    rank: "806"
},{
    name: "atlant",
    code: "ATL",
    icon: "atl",
    longname: "ATLANT",
    description: "ATLANT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atlant/"
    },
    rank: "807"
},{
    name: "qchi",
    code: "QCH",
    icon: "qch",
    longname: "QChi",
    description: "QChi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qchi/"
    },
    rank: "808"
},{
    name: "education-ecosystem",
    code: "LEDU",
    icon: "ledu",
    longname: "Education Ecosystem",
    description: "Education Ecosystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/education-ecosystem/"
    },
    rank: "809"
},{
    name: "2give",
    code: "2GIVE",
    icon: "2give",
    longname: "2GIVE",
    description: "2GIVE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/2give/"
    },
    rank: "810"
},{
    name: "korecoin",
    code: "KORE",
    icon: "kore",
    longname: "Kore",
    description: "Kore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/korecoin/"
    },
    rank: "811"
},{
    name: "bitcoinz",
    code: "BTCZ",
    icon: "btcz",
    longname: "BitcoinZ",
    description: "BitcoinZ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinz/"
    },
    rank: "812"
},{
    name: "upfiring",
    code: "UFR",
    icon: "ufr",
    longname: "Upfiring",
    description: "Upfiring coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/upfiring/"
    },
    rank: "813"
},{
    name: "global-awards-token",
    code: "GAT",
    icon: "gat",
    longname: "Global Awards Token",
    description: "Global Awards Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-awards-token/"
    },
    rank: "814"
},{
    name: "sense",
    code: "SENSE",
    icon: "sense",
    longname: "Sense",
    description: "Sense coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sense/"
    },
    rank: "815"
},{
    name: "bitscreener-token",
    code: "BITX",
    icon: "bitx",
    longname: "BitScreener Token",
    description: "BitScreener Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitscreener-token/"
    },
    rank: "816"
},{
    name: "kleros",
    code: "PNK",
    icon: "pnk",
    longname: "Kleros",
    description: "Kleros coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kleros/"
    },
    rank: "817"
},{
    name: "miners-reward-token",
    code: "MRT",
    icon: "mrt",
    longname: "Miners' Reward Token",
    description: "Miners' Reward Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/miners-reward-token/"
    },
    rank: "818"
},{
    name: "stronghands",
    code: "SHND",
    icon: "shnd",
    longname: "StrongHands",
    description: "StrongHands coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stronghands/"
    },
    rank: "819"
},{
    name: "bettex-coin",
    code: "BTXC",
    icon: "btxc",
    longname: "Bettex Coin",
    description: "Bettex Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bettex-coin/"
    },
    rank: "820"
},{
    name: "stox",
    code: "STX",
    icon: "stx",
    longname: "Stox",
    description: "Stox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stox/"
    },
    rank: "821"
},{
    name: "ip-exchange",
    code: "IPSX",
    icon: "ipsx",
    longname: "IP Exchange",
    description: "IP Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ip-exchange/"
    },
    rank: "822"
},{
    name: "digital-asset-guarantee-token",
    code: "DAGT",
    icon: "dagt",
    longname: "Digital Asset Guarantee Token",
    description: "Digital Asset Guarantee Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-asset-guarantee-token/"
    },
    rank: "823"
},{
    name: "cpollo",
    code: "CPLO",
    icon: "cplo",
    longname: "Cpollo",
    description: "Cpollo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cpollo/"
    },
    rank: "824"
},{
    name: "mallcoin",
    code: "MLC",
    icon: "mlc",
    longname: "Mallcoin",
    description: "Mallcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mallcoin/"
    },
    rank: "825"
},{
    name: "colu-local-network",
    code: "CLN",
    icon: "cln",
    longname: "Colu Local Network",
    description: "Colu Local Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/colu-local-network/"
    },
    rank: "826"
},{
    name: "internet-of-people",
    code: "IOP",
    icon: "iop",
    longname: "Internet of People",
    description: "Internet of People coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-of-people/"
    },
    rank: "827"
},{
    name: "4new",
    code: "KWATT",
    icon: "kwatt",
    longname: "4NEW",
    description: "4NEW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/4new/"
    },
    rank: "828"
},{
    name: "fintrux-network",
    code: "FTX",
    icon: "ftx",
    longname: "FintruX Network",
    description: "FintruX Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fintrux-network/"
    },
    rank: "829"
},{
    name: "intercrone",
    code: "ICR",
    icon: "icr",
    longname: "InterCrone",
    description: "InterCrone coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intercrone/"
    },
    rank: "830"
},{
    name: "latiumx",
    code: "LATX",
    icon: "latx",
    longname: "LatiumX",
    description: "LatiumX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/latiumx/"
    },
    rank: "831"
},{
    name: "aichain",
    code: "AIT",
    icon: "ait",
    longname: "AICHAIN",
    description: "AICHAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aichain/"
    },
    rank: "832"
},{
    name: "bethereum",
    code: "BETHER",
    icon: "bether",
    longname: "Bethereum",
    description: "Bethereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bethereum/"
    },
    rank: "833"
},{
    name: "bitcoin-plus",
    code: "XBC",
    icon: "xbc",
    longname: "Bitcoin Plus",
    description: "Bitcoin Plus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-plus/"
    },
    rank: "834"
},{
    name: "nper",
    code: "NPER",
    icon: "nper",
    longname: "NPER",
    description: "NPER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nper/"
    },
    rank: "835"
},{
    name: "woodcoin",
    code: "LOG",
    icon: "log",
    longname: "Woodcoin",
    description: "Woodcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/woodcoin/"
    },
    rank: "836"
},{
    name: "zero",
    code: "ZER",
    icon: "zer",
    longname: "Zero",
    description: "Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zero/"
    },
    rank: "837"
},{
    name: "devery",
    code: "EVE",
    icon: "eve",
    longname: "Devery",
    description: "Devery coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/devery/"
    },
    rank: "838"
},{
    name: "playkey",
    code: "PKT",
    icon: "pkt",
    longname: "Playkey",
    description: "Playkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playkey/"
    },
    rank: "839"
},{
    name: "invacio",
    code: "INV",
    icon: "inv",
    longname: "Invacio",
    description: "Invacio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/invacio/"
    },
    rank: "840"
},{
    name: "sprouts",
    code: "SPRTS",
    icon: "sprts",
    longname: "Sprouts",
    description: "Sprouts coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sprouts/"
    },
    rank: "841"
},{
    name: "adbank",
    code: "ADB",
    icon: "adb",
    longname: "adbank",
    description: "adbank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adbank/"
    },
    rank: "842"
},{
    name: "dowcoin",
    code: "DOW",
    icon: "dow",
    longname: "DOWCOIN",
    description: "DOWCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dowcoin/"
    },
    rank: "843"
},{
    name: "internxt",
    code: "INXT",
    icon: "inxt",
    longname: "Internxt",
    description: "Internxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internxt/"
    },
    rank: "844"
},{
    name: "cruisebit",
    code: "CRBT",
    icon: "crbt",
    longname: "Cruisebit",
    description: "Cruisebit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cruisebit/"
    },
    rank: "845"
},{
    name: "level-up",
    code: "LUC",
    icon: "luc",
    longname: "Level Up Coin",
    description: "Level Up Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/level-up/"
    },
    rank: "846"
},{
    name: "hexx",
    code: "HXX",
    icon: "hxx",
    longname: "Hexx",
    description: "Hexx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hexx/"
    },
    rank: "847"
},{
    name: "uchain",
    code: "UCN",
    icon: "ucn",
    longname: "UChain",
    description: "UChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uchain/"
    },
    rank: "848"
},{
    name: "jsecoin",
    code: "JSE",
    icon: "jse",
    longname: "JSECOIN",
    description: "JSECOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jsecoin/"
    },
    rank: "849"
},{
    name: "optitoken",
    code: "OPTI",
    icon: "opti",
    longname: "OptiToken",
    description: "OptiToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/optitoken/"
    },
    rank: "850"
},{
    name: "veros",
    code: "VRS",
    icon: "vrs",
    longname: "Veros",
    description: "Veros coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veros/"
    },
    rank: "851"
},{
    name: "niobio-cash",
    code: "NBR",
    icon: "nbr",
    longname: "Niobio Cash",
    description: "Niobio Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/niobio-cash/"
    },
    rank: "852"
},{
    name: "ergo",
    code: "EFYT",
    icon: "efyt",
    longname: "Ergo",
    description: "Ergo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ergo/"
    },
    rank: "853"
},{
    name: "obits",
    code: "OBITS",
    icon: "obits",
    longname: "OBITS",
    description: "OBITS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obits/"
    },
    rank: "854"
},{
    name: "etheera",
    code: "ETA",
    icon: "eta",
    longname: "Etheera",
    description: "Etheera coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheera/"
    },
    rank: "855"
},{
    name: "daneel",
    code: "DAN",
    icon: "dan",
    longname: "Daneel",
    description: "Daneel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daneel/"
    },
    rank: "856"
},{
    name: "zilla",
    code: "ZLA",
    icon: "zla",
    longname: "Zilla",
    description: "Zilla coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilla/"
    },
    rank: "857"
},{
    name: "jet8",
    code: "J8T",
    icon: "j8t",
    longname: "JET8",
    description: "JET8 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jet8/"
    },
    rank: "858"
},{
    name: "eventchain",
    code: "EVC",
    icon: "evc",
    longname: "EventChain",
    description: "EventChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eventchain/"
    },
    rank: "859"
},{
    name: "privatix",
    code: "PRIX",
    icon: "prix",
    longname: "Privatix",
    description: "Privatix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/privatix/"
    },
    rank: "860"
},{
    name: "ryo-currency",
    code: "RYO",
    icon: "ryo",
    longname: "Ryo Currency",
    description: "Ryo Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ryo-currency/"
    },
    rank: "861"
},{
    name: "prochain",
    code: "PRA",
    icon: "pra",
    longname: "ProChain",
    description: "ProChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prochain/"
    },
    rank: "862"
},{
    name: "cashbery-coin",
    code: "CBC-1",
    icon: "cbc-1",
    longname: "Cashbery Coin",
    description: "Cashbery Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashbery-coin/"
    },
    rank: "863"
},{
    name: "global-cryptocurrency",
    code: "GCC",
    icon: "gcc",
    longname: "Global Cryptocurrency",
    description: "Global Cryptocurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-cryptocurrency/"
    },
    rank: "864"
},{
    name: "worldcore",
    code: "WRC",
    icon: "wrc",
    longname: "Worldcore",
    description: "Worldcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcore/"
    },
    rank: "865"
},{
    name: "credit-tag-chain",
    code: "CTC",
    icon: "ctc",
    longname: "Credit Tag Chain",
    description: "Credit Tag Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credit-tag-chain/"
    },
    rank: "866"
},{
    name: "eristica",
    code: "ERT",
    icon: "ert",
    longname: "Eristica",
    description: "Eristica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eristica/"
    },
    rank: "867"
},{
    name: "traceability-chain",
    code: "TAC",
    icon: "tac",
    longname: "Traceability Chain",
    description: "Traceability Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/traceability-chain/"
    },
    rank: "868"
},{
    name: "block-array",
    code: "ARY",
    icon: "ary",
    longname: "Block Array",
    description: "Block Array coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/block-array/"
    },
    rank: "869"
},{
    name: "betterbetting",
    code: "BETR",
    icon: "betr",
    longname: "BetterBetting",
    description: "BetterBetting coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/betterbetting/"
    },
    rank: "870"
},{
    name: "coinfi",
    code: "COFI",
    icon: "cofi",
    longname: "CoinFi",
    description: "CoinFi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinfi/"
    },
    rank: "871"
},{
    name: "social-send",
    code: "SEND",
    icon: "send",
    longname: "Social Send",
    description: "Social Send coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/social-send/"
    },
    rank: "872"
},{
    name: "ethereum-blue",
    code: "BLUE",
    icon: "blue",
    longname: "Blue Protocol",
    description: "Blue Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-blue/"
    },
    rank: "873"
},{
    name: "transfercoin",
    code: "TX",
    icon: "tx",
    longname: "TransferCoin",
    description: "TransferCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/transfercoin/"
    },
    rank: "874"
},{
    name: "herocoin",
    code: "PLAY",
    icon: "play",
    longname: "HEROcoin",
    description: "HEROcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/herocoin/"
    },
    rank: "875"
},{
    name: "trakinvest",
    code: "TRAK",
    icon: "trak",
    longname: "TrakInvest",
    description: "TrakInvest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trakinvest/"
    },
    rank: "876"
},{
    name: "helbiz",
    code: "HBZ",
    icon: "hbz",
    longname: "Helbiz",
    description: "Helbiz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helbiz/"
    },
    rank: "877"
},{
    name: "tgame",
    code: "TGAME",
    icon: "tgame",
    longname: "Truegame",
    description: "Truegame coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tgame/"
    },
    rank: "878"
},{
    name: "breakout-stake",
    code: "BRX",
    icon: "brx",
    longname: "Breakout Stake",
    description: "Breakout Stake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout-stake/"
    },
    rank: "879"
},{
    name: "thingschain",
    code: "TIC",
    icon: "tic",
    longname: "Thingschain",
    description: "Thingschain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thingschain/"
    },
    rank: "880"
},{
    name: "hold",
    code: "HOLD",
    icon: "hold",
    longname: "HOLD",
    description: "HOLD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hold/"
    },
    rank: "881"
},{
    name: "litedoge",
    code: "LDOGE",
    icon: "ldoge",
    longname: "LiteDoge",
    description: "LiteDoge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litedoge/"
    },
    rank: "882"
},{
    name: "intervalue",
    code: "INVE",
    icon: "inve",
    longname: "InterValue",
    description: "InterValue coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intervalue/"
    },
    rank: "883"
},{
    name: "lethean",
    code: "LTHN",
    icon: "lthn",
    longname: "Lethean",
    description: "Lethean coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lethean/"
    },
    rank: "884"
},{
    name: "heartbout",
    code: "HB",
    icon: "hb",
    longname: "HeartBout",
    description: "HeartBout coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heartbout/"
    },
    rank: "885"
},{
    name: "pareto-network",
    code: "PARETO",
    icon: "pareto",
    longname: "Pareto Network",
    description: "Pareto Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pareto-network/"
    },
    rank: "886"
},{
    name: "bitclave",
    code: "CAT",
    icon: "cat",
    longname: "BitClave",
    description: "BitClave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitclave/"
    },
    rank: "887"
},{
    name: "memetic",
    code: "MEME",
    icon: "meme",
    longname: "Memetic / PepeCoin",
    description: "Memetic / PepeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/memetic/"
    },
    rank: "888"
},{
    name: "matryx",
    code: "MTX",
    icon: "mtx",
    longname: "Matryx",
    description: "Matryx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/matryx/"
    },
    rank: "889"
},{
    name: "edrcoin",
    code: "EDRC",
    icon: "edrc",
    longname: "EDRCoin",
    description: "EDRCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/edrcoin/"
    },
    rank: "890"
},{
    name: "fedoracoin",
    code: "TIPS",
    icon: "tips",
    longname: "FedoraCoin",
    description: "FedoraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fedoracoin/"
    },
    rank: "891"
},{
    name: "faceter",
    code: "FACE",
    icon: "face",
    longname: "Faceter",
    description: "Faceter coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/faceter/"
    },
    rank: "892"
},{
    name: "likecoin",
    code: "LIKE",
    icon: "like",
    longname: "LikeCoin",
    description: "LikeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/likecoin/"
    },
    rank: "893"
},{
    name: "trittium",
    code: "TRTT",
    icon: "trtt",
    longname: "Trittium",
    description: "Trittium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trittium/"
    },
    rank: "894"
},{
    name: "student-coin",
    code: "STU",
    icon: "stu",
    longname: "bitJob",
    description: "bitJob coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/student-coin/"
    },
    rank: "895"
},{
    name: "euno",
    code: "EUNO",
    icon: "euno",
    longname: "EUNO",
    description: "EUNO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/euno/"
    },
    rank: "896"
},{
    name: "bobs-repair",
    code: "BOB",
    icon: "bob",
    longname: "Bob's Repair",
    description: "Bob's Repair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bobs-repair/"
    },
    rank: "897"
},{
    name: "adhive",
    code: "ADH",
    icon: "adh",
    longname: "AdHive",
    description: "AdHive coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adhive/"
    },
    rank: "898"
},{
    name: "rentberry",
    code: "BERRY",
    icon: "berry",
    longname: "Rentberry",
    description: "Rentberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rentberry/"
    },
    rank: "899"
},{
    name: "opus",
    code: "OPT",
    icon: "opt",
    longname: "Opus",
    description: "Opus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opus/"
    },
    rank: "900"
},{
    name: "sp8de",
    code: "SPX",
    icon: "spx",
    longname: "Sp8de",
    description: "Sp8de coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sp8de/"
    },
    rank: "901"
},{
    name: "logiscoin",
    code: "LGS",
    icon: "lgs",
    longname: "LogisCoin",
    description: "LogisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/logiscoin/"
    },
    rank: "902"
},{
    name: "zcore",
    code: "ZCR",
    icon: "zcr",
    longname: "ZCore",
    description: "ZCore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcore/"
    },
    rank: "903"
},{
    name: "thrive-token",
    code: "THRT",
    icon: "thrt",
    longname: "Thrive Token",
    description: "Thrive Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thrive-token/"
    },
    rank: "904"
},{
    name: "vulcano",
    code: "VULC",
    icon: "vulc",
    longname: "VULCANO",
    description: "VULCANO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vulcano/"
    },
    rank: "905"
},{
    name: "terracoin",
    code: "TRC",
    icon: "trc",
    longname: "Terracoin",
    description: "Terracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/terracoin/"
    },
    rank: "906"
},{
    name: "idex-membership",
    code: "IDXM",
    icon: "idxm",
    longname: "IDEX Membership",
    description: "IDEX Membership coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/idex-membership/"
    },
    rank: "907"
},{
    name: "lala-world",
    code: "LALA",
    icon: "lala",
    longname: "LALA World",
    description: "LALA World coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lala-world/"
    },
    rank: "908"
},{
    name: "giant-coin",
    code: "GIC",
    icon: "gic",
    longname: "Giant",
    description: "Giant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/giant-coin/"
    },
    rank: "909"
},{
    name: "repme",
    code: "RPM",
    icon: "rpm",
    longname: "Repme",
    description: "Repme coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/repme/"
    },
    rank: "910"
},{
    name: "goldmint",
    code: "MNTP",
    icon: "mntp",
    longname: "GoldMint",
    description: "GoldMint coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldmint/"
    },
    rank: "911"
},{
    name: "locicoin",
    code: "LOCI",
    icon: "loci",
    longname: "LOCIcoin",
    description: "LOCIcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/locicoin/"
    },
    rank: "912"
},{
    name: "sentinel-chain",
    code: "SENC",
    icon: "senc",
    longname: "Sentinel Chain",
    description: "Sentinel Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sentinel-chain/"
    },
    rank: "913"
},{
    name: "elixir",
    code: "ELIX",
    icon: "elix",
    longname: "Elixir",
    description: "Elixir coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elixir/"
    },
    rank: "914"
},{
    name: "nubits",
    code: "USNBT",
    icon: "usnbt",
    longname: "NuBits",
    description: "NuBits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nubits/"
    },
    rank: "915"
},{
    name: "profile-utility-token",
    code: "PUT",
    icon: "put",
    longname: "Profile Utility Token",
    description: "Profile Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/profile-utility-token/"
    },
    rank: "916"
},{
    name: "tokenbox",
    code: "TBX",
    icon: "tbx",
    longname: "Tokenbox",
    description: "Tokenbox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenbox/"
    },
    rank: "917"
},{
    name: "srcoin",
    code: "SRCOIN",
    icon: "srcoin",
    longname: "SRCOIN",
    description: "SRCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/srcoin/"
    },
    rank: "918"
},{
    name: "akroma",
    code: "AKA",
    icon: "aka",
    longname: "Akroma",
    description: "Akroma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/akroma/"
    },
    rank: "919"
},{
    name: "genesisx",
    code: "XGS",
    icon: "xgs",
    longname: "GenesisX",
    description: "GenesisX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/genesisx/"
    },
    rank: "920"
},{
    name: "mywish",
    code: "WISH",
    icon: "wish",
    longname: "MyWish",
    description: "MyWish coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mywish/"
    },
    rank: "921"
},{
    name: "kora-network-token",
    code: "KNT",
    icon: "knt",
    longname: "Kora Network Token",
    description: "Kora Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kora-network-token/"
    },
    rank: "922"
},{
    name: "breakout",
    code: "BRK",
    icon: "brk",
    longname: "Breakout",
    description: "Breakout coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout/"
    },
    rank: "923"
},{
    name: "bitcrystals",
    code: "BCY",
    icon: "bcy",
    longname: "BitCrystals",
    description: "BitCrystals coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcrystals/"
    },
    rank: "924"
},{
    name: "ongsocial",
    code: "ONG",
    icon: "ong",
    longname: "SoMee.Social",
    description: "SoMee.Social coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ongsocial/"
    },
    rank: "925"
},{
    name: "carboneum-c8-token",
    code: "C8",
    icon: "c8",
    longname: "Carboneum [C8] Token",
    description: "Carboneum [C8] Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carboneum-c8-token/"
    },
    rank: "926"
},{
    name: "mtc-mesh-network",
    code: "MTC-1",
    icon: "mtc-1",
    longname: "MTC Mesh Network",
    description: "MTC Mesh Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mtc-mesh-network/"
    },
    rank: "927"
},{
    name: "belacoin",
    code: "BELA",
    icon: "bela",
    longname: "Bela",
    description: "Bela coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/belacoin/"
    },
    rank: "928"
},{
    name: "mnpcoin",
    code: "MNP",
    icon: "mnp",
    longname: "MNPCoin",
    description: "MNPCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mnpcoin/"
    },
    rank: "929"
},{
    name: "dopecoin",
    code: "DOPE",
    icon: "dope",
    longname: "DopeCoin",
    description: "DopeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dopecoin/"
    },
    rank: "930"
},{
    name: "divi-exchange-token",
    code: "DIVX",
    icon: "divx",
    longname: "Divi Exchange Token",
    description: "Divi Exchange Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/divi-exchange-token/"
    },
    rank: "931"
},{
    name: "skincoin",
    code: "SKIN",
    icon: "skin",
    longname: "SkinCoin",
    description: "SkinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skincoin/"
    },
    rank: "932"
},{
    name: "cryptocarbon",
    code: "CCRB",
    icon: "ccrb",
    longname: "CryptoCarbon",
    description: "CryptoCarbon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptocarbon/"
    },
    rank: "933"
},{
    name: "pundi-x-nem",
    code: "NPXSXEM",
    icon: "npxsxem",
    longname: "Pundi X NEM",
    description: "Pundi X NEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pundi-x-nem/"
    },
    rank: "934"
},{
    name: "encryptotel",
    code: "ETT",
    icon: "ett",
    longname: "EncryptoTel [WAVES]",
    description: "EncryptoTel [WAVES] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encryptotel/"
    },
    rank: "935"
},{
    name: "ubcoin-market",
    code: "UBC",
    icon: "ubc",
    longname: "Ubcoin Market",
    description: "Ubcoin Market coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubcoin-market/"
    },
    rank: "936"
},{
    name: "cannabiscoin",
    code: "CANN",
    icon: "cann",
    longname: "CannabisCoin",
    description: "CannabisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannabiscoin/"
    },
    rank: "937"
},{
    name: "women",
    code: "WOMEN",
    icon: "women",
    longname: "WomenCoin",
    description: "WomenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/women/"
    },
    rank: "938"
},{
    name: "karbo",
    code: "KRB",
    icon: "krb",
    longname: "Karbo",
    description: "Karbo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karbo/"
    },
    rank: "939"
},{
    name: "mediccoin",
    code: "MEDIC",
    icon: "medic",
    longname: "MedicCoin",
    description: "MedicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mediccoin/"
    },
    rank: "940"
},{
    name: "sapien",
    code: "SPN",
    icon: "spn",
    longname: "Sapien",
    description: "Sapien coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sapien/"
    },
    rank: "941"
},{
    name: "eboostcoin",
    code: "EBST",
    icon: "ebst",
    longname: "eBoost",
    description: "eBoost coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eboostcoin/"
    },
    rank: "942"
},{
    name: "biblepay",
    code: "BBP",
    icon: "bbp",
    longname: "BiblePay",
    description: "BiblePay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biblepay/"
    },
    rank: "943"
},{
    name: "apollon",
    code: "XAP",
    icon: "xap",
    longname: "Apollon",
    description: "Apollon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apollon/"
    },
    rank: "944"
},{
    name: "snowgem",
    code: "XSG",
    icon: "xsg",
    longname: "SnowGem",
    description: "SnowGem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snowgem/"
    },
    rank: "945"
},{
    name: "dprating",
    code: "RATING",
    icon: "rating",
    longname: "DPRating",
    description: "DPRating coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dprating/"
    },
    rank: "946"
},{
    name: "travelflex",
    code: "TRF",
    icon: "trf",
    longname: "Travelflex",
    description: "Travelflex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/travelflex/"
    },
    rank: "947"
},{
    name: "castle",
    code: "CSTL",
    icon: "cstl",
    longname: "Castle",
    description: "Castle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/castle/"
    },
    rank: "948"
},{
    name: "indorse-token",
    code: "IND",
    icon: "ind",
    longname: "Indorse Token",
    description: "Indorse Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indorse-token/"
    },
    rank: "949"
},{
    name: "zippie",
    code: "ZIPT",
    icon: "zipt",
    longname: "Zippie",
    description: "Zippie coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zippie/"
    },
    rank: "950"
},{
    name: "snodecoin",
    code: "SND",
    icon: "snd",
    longname: "SnodeCoin",
    description: "SnodeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snodecoin/"
    },
    rank: "951"
},{
    name: "masternet",
    code: "MASH",
    icon: "mash",
    longname: "MASTERNET",
    description: "MASTERNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masternet/"
    },
    rank: "952"
},{
    name: "fire-lotto",
    code: "FLOT",
    icon: "flot",
    longname: "Fire Lotto",
    description: "Fire Lotto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fire-lotto/"
    },
    rank: "953"
},{
    name: "sharpay",
    code: "S",
    icon: "s",
    longname: "Sharpay",
    description: "Sharpay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharpay/"
    },
    rank: "954"
},{
    name: "auctus",
    code: "AUC",
    icon: "auc",
    longname: "Auctus",
    description: "Auctus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auctus/"
    },
    rank: "955"
},{
    name: "metamorph",
    code: "METM",
    icon: "metm",
    longname: "MetaMorph",
    description: "MetaMorph coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metamorph/"
    },
    rank: "956"
},{
    name: "sumokoin",
    code: "SUMO",
    icon: "sumo",
    longname: "Sumokoin",
    description: "Sumokoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sumokoin/"
    },
    rank: "957"
},{
    name: "sharechain",
    code: "SSS",
    icon: "sss",
    longname: "Sharechain",
    description: "Sharechain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharechain/"
    },
    rank: "958"
},{
    name: "gcn-coin",
    code: "GCN",
    icon: "gcn",
    longname: "GCN Coin",
    description: "GCN Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gcn-coin/"
    },
    rank: "959"
},{
    name: "argentum",
    code: "ARG",
    icon: "arg",
    longname: "Argentum",
    description: "Argentum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/argentum/"
    },
    rank: "960"
},{
    name: "xceltoken",
    code: "XCEL",
    icon: "xcel",
    longname: "XcelToken",
    description: "XcelToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xceltoken/"
    },
    rank: "961"
},{
    name: "signal-token",
    code: "SIG",
    icon: "sig",
    longname: "Spectiv",
    description: "Spectiv coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signal-token/"
    },
    rank: "962"
},{
    name: "flypme",
    code: "FYP",
    icon: "fyp",
    longname: "FlypMe",
    description: "FlypMe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flypme/"
    },
    rank: "963"
},{
    name: "proton-token",
    code: "PTT",
    icon: "ptt",
    longname: "Proton Token",
    description: "Proton Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proton-token/"
    },
    rank: "964"
},{
    name: "utrum",
    code: "OOT",
    icon: "oot",
    longname: "Utrum",
    description: "Utrum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/utrum/"
    },
    rank: "965"
},{
    name: "narrative",
    code: "NRVE",
    icon: "nrve",
    longname: "Narrative",
    description: "Narrative coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/narrative/"
    },
    rank: "966"
},{
    name: "fsbt-api-token",
    code: "FSBT",
    icon: "fsbt",
    longname: "FSBT API Token",
    description: "FSBT API Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fsbt-api-token/"
    },
    rank: "967"
},{
    name: "audiocoin",
    code: "ADC",
    icon: "adc",
    longname: "AudioCoin",
    description: "AudioCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/audiocoin/"
    },
    rank: "968"
},{
    name: "neutron",
    code: "NTRN",
    icon: "ntrn",
    longname: "Neutron",
    description: "Neutron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neutron/"
    },
    rank: "969"
},{
    name: "shard",
    code: "SHARD",
    icon: "shard",
    longname: "Shard",
    description: "Shard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shard/"
    },
    rank: "970"
},{
    name: "monacocoin",
    code: "XMCC",
    icon: "xmcc",
    longname: "Monoeci",
    description: "Monoeci coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacocoin/"
    },
    rank: "971"
},{
    name: "bitcoen",
    code: "BEN",
    icon: "ben",
    longname: "BitCoen",
    description: "BitCoen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoen/"
    },
    rank: "972"
},{
    name: "bridge-protocol",
    code: "TOLL",
    icon: "toll",
    longname: "Bridge Protocol",
    description: "Bridge Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bridge-protocol/"
    },
    rank: "973"
},{
    name: "monkey-project",
    code: "MONK",
    icon: "monk",
    longname: "Monkey Project",
    description: "Monkey Project coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monkey-project/"
    },
    rank: "974"
},{
    name: "reftoken",
    code: "REF",
    icon: "ref",
    longname: "RefToken",
    description: "RefToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reftoken/"
    },
    rank: "975"
},{
    name: "boutspro",
    code: "BOUTS",
    icon: "bouts",
    longname: "BoutsPro",
    description: "BoutsPro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boutspro/"
    },
    rank: "976"
},{
    name: "pitiscoin",
    code: "PTS",
    icon: "pts",
    longname: "PitisCoin",
    description: "PitisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pitiscoin/"
    },
    rank: "977"
},{
    name: "futurax",
    code: "FTXT",
    icon: "ftxt",
    longname: "FUTURAX",
    description: "FUTURAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/futurax/"
    },
    rank: "978"
},{
    name: "guaranteed-ethurance-token-extra",
    code: "GETX",
    icon: "getx",
    longname: "Guaranteed Ethurance Token Extra",
    description: "Guaranteed Ethurance Token Extra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guaranteed-ethurance-token-extra/"
    },
    rank: "979"
},{
    name: "buzzcoin",
    code: "BUZZ",
    icon: "buzz",
    longname: "BuzzCoin",
    description: "BuzzCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/buzzcoin/"
    },
    rank: "980"
},{
    name: "kryll",
    code: "KRL",
    icon: "krl",
    longname: "Kryll",
    description: "Kryll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kryll/"
    },
    rank: "981"
},{
    name: "nullex",
    code: "NLX",
    icon: "nlx",
    longname: "Nullex",
    description: "Nullex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nullex/"
    },
    rank: "982"
},{
    name: "simdaq",
    code: "SMQ",
    icon: "smq",
    longname: "SIMDAQ",
    description: "SIMDAQ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/simdaq/"
    },
    rank: "983"
},{
    name: "bigbom",
    code: "BBO",
    icon: "bbo",
    longname: "Bigbom",
    description: "Bigbom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bigbom/"
    },
    rank: "984"
},{
    name: "maverick-chain",
    code: "MVC",
    icon: "mvc",
    longname: "Maverick Chain",
    description: "Maverick Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maverick-chain/"
    },
    rank: "985"
},{
    name: "huntercoin",
    code: "HUC",
    icon: "huc",
    longname: "HunterCoin",
    description: "HunterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huntercoin/"
    },
    rank: "986"
},{
    name: "pesetacoin",
    code: "PTC",
    icon: "ptc",
    longname: "Pesetacoin",
    description: "Pesetacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pesetacoin/"
    },
    rank: "987"
},{
    name: "zinc",
    code: "ZINC",
    icon: "zinc",
    longname: "ZINC",
    description: "ZINC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zinc/"
    },
    rank: "988"
},{
    name: "sharex",
    code: "SEXC",
    icon: "sexc",
    longname: "ShareX",
    description: "ShareX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharex/"
    },
    rank: "989"
},{
    name: "rookiecoin",
    code: "RKC",
    icon: "rkc",
    longname: "Rookiecoin",
    description: "Rookiecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rookiecoin/"
    },
    rank: "990"
},{
    name: "universal-currency",
    code: "UNIT",
    icon: "unit",
    longname: "Universal Currency",
    description: "Universal Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universal-currency/"
    },
    rank: "991"
},{
    name: "smartofgiving",
    code: "AOG",
    icon: "aog",
    longname: "smARTOFGIVING",
    description: "smARTOFGIVING coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartofgiving/"
    },
    rank: "992"
},{
    name: "iqeon",
    code: "IQN",
    icon: "iqn",
    longname: "IQeon",
    description: "IQeon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iqeon/"
    },
    rank: "993"
},{
    name: "xmct",
    code: "XMCT",
    icon: "xmct",
    longname: "XMCT",
    description: "XMCT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xmct/"
    },
    rank: "994"
},{
    name: "penguin-coin",
    code: "PENG",
    icon: "peng",
    longname: "Penguin Coin",
    description: "Penguin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/penguin-coin/"
    },
    rank: "995"
},{
    name: "freyrchain",
    code: "FREC",
    icon: "frec",
    longname: "Freyrchain",
    description: "Freyrchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/freyrchain/"
    },
    rank: "996"
},{
    name: "lynx",
    code: "LYNX",
    icon: "lynx",
    longname: "Lynx",
    description: "Lynx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lynx/"
    },
    rank: "997"
},{
    name: "oceanlab",
    code: "OCL",
    icon: "ocl",
    longname: "Oceanlab",
    description: "Oceanlab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oceanlab/"
    },
    rank: "998"
},{
    name: "aphelion",
    code: "APH",
    icon: "aph",
    longname: "Aphelion",
    description: "Aphelion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aphelion/"
    },
    rank: "999"
},{
    name: "bonpay",
    code: "BON",
    icon: "bon",
    longname: "Bonpay",
    description: "Bonpay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bonpay/"
    },
    rank: "1000"
},{
    name: "the-champcoin",
    code: "TCC",
    icon: "tcc",
    longname: "The ChampCoin",
    description: "The ChampCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-champcoin/"
    },
    rank: "1001"
},{
    name: "pluton",
    code: "PLU",
    icon: "plu",
    longname: "Pluton",
    description: "Pluton coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluton/"
    },
    rank: "1002"
},{
    name: "syncfab",
    code: "MFG",
    icon: "mfg",
    longname: "SyncFab",
    description: "SyncFab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syncfab/"
    },
    rank: "1003"
},{
    name: "rupee",
    code: "RUP",
    icon: "rup",
    longname: "Rupee",
    description: "Rupee coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupee/"
    },
    rank: "1004"
},{
    name: "pylon-network",
    code: "PYLNT",
    icon: "pylnt",
    longname: "Pylon Network",
    description: "Pylon Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pylon-network/"
    },
    rank: "1005"
},{
    name: "paymon",
    code: "PMNT",
    icon: "pmnt",
    longname: "Paymon",
    description: "Paymon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paymon/"
    },
    rank: "1006"
},{
    name: "bitswift",
    code: "BITS",
    icon: "bits",
    longname: "Bitswift",
    description: "Bitswift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitswift/"
    },
    rank: "1007"
},{
    name: "mindexcoin",
    code: "MIC",
    icon: "mic",
    longname: "Mindexcoin",
    description: "Mindexcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mindexcoin/"
    },
    rank: "1008"
},{
    name: "sportyco",
    code: "SPF",
    icon: "spf",
    longname: "SportyCo",
    description: "SportyCo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sportyco/"
    },
    rank: "1009"
},{
    name: "galactrum",
    code: "ORE",
    icon: "ore",
    longname: "Galactrum",
    description: "Galactrum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/galactrum/"
    },
    rank: "1010"
},{
    name: "parkgene",
    code: "GENE-1",
    icon: "gene-1",
    longname: "Parkgene",
    description: "Parkgene coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkgene/"
    },
    rank: "1011"
},{
    name: "realchain",
    code: "RCT",
    icon: "rct",
    longname: "RealChain",
    description: "RealChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/realchain/"
    },
    rank: "1012"
},{
    name: "naviaddress",
    code: "NAVI",
    icon: "navi",
    longname: "Naviaddress",
    description: "Naviaddress coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/naviaddress/"
    },
    rank: "1013"
},{
    name: "soma",
    code: "SCT",
    icon: "sct",
    longname: "Soma",
    description: "Soma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soma/"
    },
    rank: "1014"
},{
    name: "origin-sport",
    code: "ORS",
    icon: "ors",
    longname: "Origin Sport",
    description: "Origin Sport coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origin-sport/"
    },
    rank: "1015"
},{
    name: "leadcoin",
    code: "LDC",
    icon: "ldc",
    longname: "Leadcoin",
    description: "Leadcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leadcoin/"
    },
    rank: "1016"
},{
    name: "trezarcoin",
    code: "TZC",
    icon: "tzc",
    longname: "TrezarCoin",
    description: "TrezarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trezarcoin/"
    },
    rank: "1017"
},{
    name: "gladius-token",
    code: "GLA",
    icon: "gla",
    longname: "Gladius Token",
    description: "Gladius Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gladius-token/"
    },
    rank: "1018"
},{
    name: "ebtcnew",
    code: "EBTC",
    icon: "ebtc",
    longname: "eBitcoin",
    description: "eBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebtcnew/"
    },
    rank: "1019"
},{
    name: "bodhi-eth",
    code: "BOE",
    icon: "boe",
    longname: "Bodhi [ETH]",
    description: "Bodhi [ETH] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bodhi-eth/"
    },
    rank: "1020"
},{
    name: "atbcoin",
    code: "ATB",
    icon: "atb",
    longname: "ATBCoin",
    description: "ATBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atbcoin/"
    },
    rank: "1021"
},{
    name: "equal",
    code: "EQL",
    icon: "eql",
    longname: "Equal",
    description: "Equal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equal/"
    },
    rank: "1022"
},{
    name: "evergreencoin",
    code: "EGC",
    icon: "egc",
    longname: "EverGreenCoin",
    description: "EverGreenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evergreencoin/"
    },
    rank: "1023"
},{
    name: "quantis-network",
    code: "QUAN",
    icon: "quan",
    longname: "Quantis Network",
    description: "Quantis Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantis-network/"
    },
    rank: "1024"
},{
    name: "provoco-token",
    code: "VOCO",
    icon: "voco",
    longname: "Provoco Token",
    description: "Provoco Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/provoco-token/"
    },
    rank: "1025"
},{
    name: "ethergem",
    code: "EGEM",
    icon: "egem",
    longname: "EtherGem",
    description: "EtherGem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethergem/"
    },
    rank: "1026"
},{
    name: "rapids",
    code: "RPD",
    icon: "rpd",
    longname: "Rapids",
    description: "Rapids coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rapids/"
    },
    rank: "1027"
},{
    name: "jury-online-token",
    code: "JOT",
    icon: "jot",
    longname: "Jury.Online Token",
    description: "Jury.Online Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jury-online-token/"
    },
    rank: "1028"
},{
    name: "vsync-vsx",
    code: "VSX",
    icon: "vsx",
    longname: "Vsync",
    description: "Vsync coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vsync-vsx/"
    },
    rank: "1029"
},{
    name: "data-exchange",
    code: "DTX",
    icon: "dtx",
    longname: "DaTa eXchange",
    description: "DaTa eXchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/data-exchange/"
    },
    rank: "1030"
},{
    name: "kalkulus",
    code: "KLKS",
    icon: "klks",
    longname: "Kalkulus",
    description: "Kalkulus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kalkulus/"
    },
    rank: "1031"
},{
    name: "octoin-coin",
    code: "OCC",
    icon: "occ",
    longname: "Octoin Coin",
    description: "Octoin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/octoin-coin/"
    },
    rank: "1032"
},{
    name: "force",
    code: "FOR",
    icon: "for",
    longname: "FORCE",
    description: "FORCE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/force/"
    },
    rank: "1033"
},{
    name: "actinium",
    code: "ACM",
    icon: "acm",
    longname: "Actinium",
    description: "Actinium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/actinium/"
    },
    rank: "1034"
},{
    name: "ace",
    code: "ACE",
    icon: "ace",
    longname: "ACE (TokenStars)",
    description: "ACE (TokenStars) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ace/"
    },
    rank: "1035"
},{
    name: "hurify",
    code: "HUR",
    icon: "hur",
    longname: "Hurify",
    description: "Hurify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hurify/"
    },
    rank: "1036"
},{
    name: "bloc-money",
    code: "BLOC",
    icon: "bloc",
    longname: "BLOC.MONEY",
    description: "BLOC.MONEY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bloc-money/"
    },
    rank: "1037"
},{
    name: "modultrade",
    code: "MTRC",
    icon: "mtrc",
    longname: "ModulTrade",
    description: "ModulTrade coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/modultrade/"
    },
    rank: "1038"
},{
    name: "cyberfm",
    code: "CYFM",
    icon: "cyfm",
    longname: "CyberFM",
    description: "CyberFM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cyberfm/"
    },
    rank: "1039"
},{
    name: "bitzeny",
    code: "ZNY",
    icon: "zny",
    longname: "Bitzeny",
    description: "Bitzeny coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitzeny/"
    },
    rank: "1040"
},{
    name: "exmr",
    code: "EXMR",
    icon: "exmr",
    longname: "EXMR",
    description: "EXMR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exmr/"
    },
    rank: "1041"
},{
    name: "ether-1",
    code: "ETHO",
    icon: "etho",
    longname: "Ether-1",
    description: "Ether-1 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ether-1/"
    },
    rank: "1042"
},{
    name: "kolion",
    code: "KLN",
    icon: "kln",
    longname: "Kolion",
    description: "Kolion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kolion/"
    },
    rank: "1043"
},{
    name: "bitcoin-token",
    code: "BTK",
    icon: "btk",
    longname: "Bitcoin Token",
    description: "Bitcoin Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-token/"
    },
    rank: "1044"
},{
    name: "clearcoin",
    code: "XCLR",
    icon: "xclr",
    longname: "ClearCoin",
    description: "ClearCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearcoin/"
    },
    rank: "1045"
},{
    name: "cryptoflow",
    code: "CFL",
    icon: "cfl",
    longname: "CryptoFlow",
    description: "CryptoFlow coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoflow/"
    },
    rank: "1046"
},{
    name: "verime",
    code: "VME",
    icon: "vme",
    longname: "VeriME",
    description: "VeriME coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verime/"
    },
    rank: "1047"
},{
    name: "mmocoin",
    code: "MMO",
    icon: "mmo",
    longname: "MMOCoin",
    description: "MMOCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mmocoin/"
    },
    rank: "1048"
},{
    name: "zest",
    code: "ZEST",
    icon: "zest",
    longname: "ZEST",
    description: "ZEST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zest/"
    },
    rank: "1049"
},{
    name: "blitzpredict",
    code: "XBP",
    icon: "xbp",
    longname: "BlitzPredict",
    description: "BlitzPredict coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blitzpredict/"
    },
    rank: "1050"
},{
    name: "webcoin",
    code: "WEB",
    icon: "web",
    longname: "Webcoin",
    description: "Webcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/webcoin/"
    },
    rank: "1051"
},{
    name: "iungo",
    code: "ING",
    icon: "ing",
    longname: "Iungo",
    description: "Iungo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iungo/"
    },
    rank: "1052"
},{
    name: "cointogo",
    code: "2GO",
    icon: "2go",
    longname: "CoinToGo",
    description: "CoinToGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cointogo/"
    },
    rank: "1053"
},{
    name: "more-coin",
    code: "MORE",
    icon: "more",
    longname: "More Coin",
    description: "More Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/more-coin/"
    },
    rank: "1054"
},{
    name: "blocklancer",
    code: "LNC",
    icon: "lnc",
    longname: "Blocklancer",
    description: "Blocklancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocklancer/"
    },
    rank: "1055"
},{
    name: "x-cash",
    code: "XCASH",
    icon: "xcash",
    longname: "X-Cash",
    description: "X-Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x-cash/"
    },
    rank: "1056"
},{
    name: "peepcoin",
    code: "PCN",
    icon: "pcn",
    longname: "PeepCoin",
    description: "PeepCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peepcoin/"
    },
    rank: "1057"
},{
    name: "eztoken",
    code: "EZT",
    icon: "ezt",
    longname: "EZToken",
    description: "EZToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eztoken/"
    },
    rank: "1058"
},{
    name: "bitrewards",
    code: "BIT",
    icon: "bit",
    longname: "BitRewards",
    description: "BitRewards coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitrewards/"
    },
    rank: "1059"
},{
    name: "equitrader",
    code: "EQT",
    icon: "eqt",
    longname: "EquiTrader",
    description: "EquiTrader coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equitrader/"
    },
    rank: "1060"
},{
    name: "wixlar",
    code: "WIX",
    icon: "wix",
    longname: "Wixlar",
    description: "Wixlar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wixlar/"
    },
    rank: "1061"
},{
    name: "mao-zedong",
    code: "MAO",
    icon: "mao",
    longname: "Mao Zedong",
    description: "Mao Zedong coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mao-zedong/"
    },
    rank: "1062"
},{
    name: "gohelpfund",
    code: "HELP",
    icon: "help",
    longname: "GoHelpFund",
    description: "GoHelpFund coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gohelpfund/"
    },
    rank: "1063"
},{
    name: "xdna",
    code: "XDNA",
    icon: "xdna",
    longname: "XDNA",
    description: "XDNA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xdna/"
    },
    rank: "1064"
},{
    name: "evimeria",
    code: "EVI",
    icon: "evi",
    longname: "Evimeria",
    description: "Evimeria coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evimeria/"
    },
    rank: "1065"
},{
    name: "0xcert",
    code: "ZXC",
    icon: "zxc",
    longname: "0xcert",
    description: "0xcert coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0xcert/"
    },
    rank: "1066"
},{
    name: "bitmoney",
    code: "BIT-1",
    icon: "bit-1",
    longname: "BitMoney",
    description: "BitMoney coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitmoney/"
    },
    rank: "1067"
},{
    name: "engagement-token",
    code: "ENGT",
    icon: "engt",
    longname: "Engagement Token",
    description: "Engagement Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/engagement-token/"
    },
    rank: "1068"
},{
    name: "primestone",
    code: "PSC",
    icon: "psc",
    longname: "PrimeStone",
    description: "PrimeStone coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primestone/"
    },
    rank: "1069"
},{
    name: "alt-estate-token",
    code: "ALT",
    icon: "alt",
    longname: "Alt.Estate token",
    description: "Alt.Estate token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alt-estate-token/"
    },
    rank: "1070"
},{
    name: "project-coin",
    code: "PRJ",
    icon: "prj",
    longname: "Project Coin",
    description: "Project Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-coin/"
    },
    rank: "1071"
},{
    name: "ab-chain-rtb",
    code: "RTB",
    icon: "rtb",
    longname: "AB-Chain RTB",
    description: "AB-Chain RTB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ab-chain-rtb/"
    },
    rank: "1072"
},{
    name: "campuscoin",
    code: "CMPCO",
    icon: "cmpco",
    longname: "CampusCoin",
    description: "CampusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/campuscoin/"
    },
    rank: "1073"
},{
    name: "cfun",
    code: "CFUN",
    icon: "cfun",
    longname: "CFun",
    description: "CFun coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cfun/"
    },
    rank: "1074"
},{
    name: "ionchain",
    code: "IONC",
    icon: "ionc",
    longname: "IONChain",
    description: "IONChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ionchain/"
    },
    rank: "1075"
},{
    name: "condominium",
    code: "CDM",
    icon: "cdm",
    longname: "Condominium",
    description: "Condominium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/condominium/"
    },
    rank: "1076"
},{
    name: "zetacoin",
    code: "ZET",
    icon: "zet",
    longname: "Zetacoin",
    description: "Zetacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zetacoin/"
    },
    rank: "1077"
},{
    name: "no-bs-crypto",
    code: "NOBS",
    icon: "nobs",
    longname: "No BS Crypto",
    description: "No BS Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/no-bs-crypto/"
    },
    rank: "1078"
},{
    name: "platinumbar",
    code: "XPTX",
    icon: "xptx",
    longname: "PlatinumBAR",
    description: "PlatinumBAR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/platinumbar/"
    },
    rank: "1079"
},{
    name: "coinlancer",
    code: "CL",
    icon: "cl",
    longname: "Coinlancer",
    description: "Coinlancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinlancer/"
    },
    rank: "1080"
},{
    name: "aigang",
    code: "AIX",
    icon: "aix",
    longname: "Aigang",
    description: "Aigang coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aigang/"
    },
    rank: "1081"
},{
    name: "crea",
    code: "CREA",
    icon: "crea",
    longname: "CREA",
    description: "CREA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crea/"
    },
    rank: "1082"
},{
    name: "fundrequest",
    code: "FND",
    icon: "fnd",
    longname: "FundRequest",
    description: "FundRequest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fundrequest/"
    },
    rank: "1083"
},{
    name: "gold-poker",
    code: "GPKR",
    icon: "gpkr",
    longname: "Gold Poker",
    description: "Gold Poker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gold-poker/"
    },
    rank: "1084"
},{
    name: "eunomia",
    code: "ENTS",
    icon: "ents",
    longname: "EUNOMIA",
    description: "EUNOMIA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eunomia/"
    },
    rank: "1085"
},{
    name: "huzu",
    code: "HUZU",
    icon: "huzu",
    longname: "HUZU",
    description: "HUZU coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huzu/"
    },
    rank: "1086"
},{
    name: "skyhub-coin",
    code: "SHB",
    icon: "shb",
    longname: "SkyHub Coin",
    description: "SkyHub Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skyhub-coin/"
    },
    rank: "1087"
},{
    name: "aditus",
    code: "ADI",
    icon: "adi",
    longname: "Aditus",
    description: "Aditus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aditus/"
    },
    rank: "1088"
},{
    name: "auxilium",
    code: "AUX",
    icon: "aux",
    longname: "Auxilium",
    description: "Auxilium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auxilium/"
    },
    rank: "1089"
},{
    name: "pigeoncoin",
    code: "PGN",
    icon: "pgn",
    longname: "Pigeoncoin",
    description: "Pigeoncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pigeoncoin/"
    },
    rank: "1090"
},{
    name: "arcticcoin",
    code: "ARC",
    icon: "arc",
    longname: "Advanced Technology Coin",
    description: "Advanced Technology Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcticcoin/"
    },
    rank: "1091"
},{
    name: "rupaya",
    code: "RUPX",
    icon: "rupx",
    longname: "Rupaya",
    description: "Rupaya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupaya/"
    },
    rank: "1092"
},{
    name: "elysian",
    code: "ELY",
    icon: "ely",
    longname: "Elysian",
    description: "Elysian coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elysian/"
    },
    rank: "1093"
},{
    name: "mfit-coin",
    code: "MFIT",
    icon: "mfit",
    longname: "MFIT COIN",
    description: "MFIT COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mfit-coin/"
    },
    rank: "1094"
},{
    name: "amon",
    code: "AMN",
    icon: "amn",
    longname: "Amon",
    description: "Amon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amon/"
    },
    rank: "1095"
},{
    name: "xchange",
    code: "XCG",
    icon: "xcg",
    longname: "Xchange",
    description: "Xchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xchange/"
    },
    rank: "1096"
},{
    name: "crowdwiz",
    code: "WIZ",
    icon: "wiz",
    longname: "CrowdWiz",
    description: "CrowdWiz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowdwiz/"
    },
    rank: "1097"
},{
    name: "bitwhite",
    code: "BTW",
    icon: "btw",
    longname: "BitWhite",
    description: "BitWhite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitwhite/"
    },
    rank: "1098"
},{
    name: "absolute",
    code: "ABS",
    icon: "abs",
    longname: "Absolute",
    description: "Absolute coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/absolute/"
    },
    rank: "1099"
},{
    name: "xgox",
    code: "XGOX",
    icon: "xgox",
    longname: "XGOX",
    description: "XGOX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xgox/"
    },
    rank: "1100"
},{
    name: "crycash",
    code: "CRC",
    icon: "crc",
    longname: "CryCash",
    description: "CryCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crycash/"
    },
    rank: "1101"
},{
    name: "showhand",
    code: "HAND",
    icon: "hand",
    longname: "ShowHand",
    description: "ShowHand coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/showhand/"
    },
    rank: "1102"
},{
    name: "putincoin",
    code: "PUT-1",
    icon: "put-1",
    longname: "PutinCoin",
    description: "PutinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/putincoin/"
    },
    rank: "1103"
},{
    name: "briacoin",
    code: "BRIA",
    icon: "bria",
    longname: "BriaCoin",
    description: "BriaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/briacoin/"
    },
    rank: "1104"
},{
    name: "lobstex",
    code: "LOBS",
    icon: "lobs",
    longname: "Lobstex",
    description: "Lobstex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lobstex/"
    },
    rank: "1105"
},{
    name: "ndex",
    code: "NDX",
    icon: "ndx",
    longname: "nDEX",
    description: "nDEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ndex/"
    },
    rank: "1106"
},{
    name: "draftcoin",
    code: "DFT",
    icon: "dft",
    longname: "DraftCoin",
    description: "DraftCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/draftcoin/"
    },
    rank: "1107"
},{
    name: "blocknode",
    code: "BND",
    icon: "bnd",
    longname: "Blocknode",
    description: "Blocknode coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocknode/"
    },
    rank: "1108"
},{
    name: "apr-coin",
    code: "APR",
    icon: "apr",
    longname: "APR Coin",
    description: "APR Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apr-coin/"
    },
    rank: "1109"
},{
    name: "aegeus",
    code: "AEG",
    icon: "aeg",
    longname: "Aegeus",
    description: "Aegeus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aegeus/"
    },
    rank: "1110"
},{
    name: "erc20",
    code: "ERC20",
    icon: "erc20",
    longname: "ERC20",
    description: "ERC20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/erc20/"
    },
    rank: "1111"
},{
    name: "ultranote-coin",
    code: "XUN",
    icon: "xun",
    longname: "UltraNote Coin",
    description: "UltraNote Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultranote-coin/"
    },
    rank: "1112"
},{
    name: "linx",
    code: "LINX",
    icon: "linx",
    longname: "Linx",
    description: "Linx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linx/"
    },
    rank: "1113"
},{
    name: "arbitragect",
    code: "ARCT",
    icon: "arct",
    longname: "ArbitrageCT",
    description: "ArbitrageCT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbitragect/"
    },
    rank: "1114"
},{
    name: "beetle-coin",
    code: "BEET",
    icon: "beet",
    longname: "Beetle Coin",
    description: "Beetle Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/beetle-coin/"
    },
    rank: "1115"
},{
    name: "dorado",
    code: "DOR",
    icon: "dor",
    longname: "Dorado",
    description: "Dorado coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dorado/"
    },
    rank: "1116"
},{
    name: "igtoken",
    code: "IG",
    icon: "ig",
    longname: "IGToken",
    description: "IGToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/igtoken/"
    },
    rank: "1117"
},{
    name: "allsafe",
    code: "ASAFE2",
    icon: "asafe2",
    longname: "AllSafe",
    description: "AllSafe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/allsafe/"
    },
    rank: "1118"
},{
    name: "fivebalance",
    code: "FBN",
    icon: "fbn",
    longname: "Fivebalance",
    description: "Fivebalance coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fivebalance/"
    },
    rank: "1119"
},{
    name: "suretly",
    code: "SUR",
    icon: "sur",
    longname: "Suretly",
    description: "Suretly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suretly/"
    },
    rank: "1120"
},{
    name: "xovbank",
    code: "XOV",
    icon: "xov",
    longname: "XOVBank",
    description: "XOVBank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xovbank/"
    },
    rank: "1121"
},{
    name: "inflationcoin",
    code: "IFLT",
    icon: "iflt",
    longname: "InflationCoin",
    description: "InflationCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/inflationcoin/"
    },
    rank: "1122"
},{
    name: "bbscoin",
    code: "BBS",
    icon: "bbs",
    longname: "BBSCoin",
    description: "BBSCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bbscoin/"
    },
    rank: "1123"
},{
    name: "bitblocks",
    code: "BBK-1",
    icon: "bbk-1",
    longname: "Bitblocks",
    description: "Bitblocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitblocks/"
    },
    rank: "1124"
},{
    name: "italian-lira",
    code: "ITL",
    icon: "itl",
    longname: "Italian Lira",
    description: "Italian Lira coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/italian-lira/"
    },
    rank: "1125"
},{
    name: "scriv-network",
    code: "SCRIV",
    icon: "scriv",
    longname: "SCRIV NETWORK",
    description: "SCRIV NETWORK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scriv-network/"
    },
    rank: "1126"
},{
    name: "datarius-credit",
    code: "DTRC",
    icon: "dtrc",
    longname: "Datarius Credit",
    description: "Datarius Credit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datarius-credit/"
    },
    rank: "1127"
},{
    name: "transcodium",
    code: "TNS",
    icon: "tns",
    longname: "Transcodium",
    description: "Transcodium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/transcodium/"
    },
    rank: "1128"
},{
    name: "startcoin",
    code: "START",
    icon: "start",
    longname: "Startcoin",
    description: "Startcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/startcoin/"
    },
    rank: "1129"
},{
    name: "catocoin",
    code: "CATO",
    icon: "cato",
    longname: "CatoCoin",
    description: "CatoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/catocoin/"
    },
    rank: "1130"
},{
    name: "waletoken",
    code: "WTN",
    icon: "wtn",
    longname: "Waletoken",
    description: "Waletoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waletoken/"
    },
    rank: "1131"
},{
    name: "micromoney",
    code: "AMM",
    icon: "amm",
    longname: "MicroMoney",
    description: "MicroMoney coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/micromoney/"
    },
    rank: "1132"
},{
    name: "netkoin",
    code: "NTK-1",
    icon: "ntk-1",
    longname: "NetKoin",
    description: "NetKoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/netkoin/"
    },
    rank: "1133"
},{
    name: "qyno",
    code: "QNO",
    icon: "qno",
    longname: "QYNO",
    description: "QYNO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qyno/"
    },
    rank: "1134"
},{
    name: "darextravel",
    code: "DART",
    icon: "dart",
    longname: "DarexTravel",
    description: "DarexTravel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darextravel/"
    },
    rank: "1135"
},{
    name: "unify",
    code: "UNIFY",
    icon: "unify",
    longname: "Unify",
    description: "Unify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unify/"
    },
    rank: "1136"
},{
    name: "bitcoin-x",
    code: "BTX-1",
    icon: "btx-1",
    longname: "Bitcoin X",
    description: "Bitcoin X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-x/"
    },
    rank: "1137"
},{
    name: "witchain",
    code: "WIT",
    icon: "wit",
    longname: "WITChain",
    description: "WITChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/witchain/"
    },
    rank: "1138"
},{
    name: "wavesgo",
    code: "WGO",
    icon: "wgo",
    longname: "WavesGo",
    description: "WavesGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wavesgo/"
    },
    rank: "1139"
},{
    name: "teloscoin",
    code: "TELOS",
    icon: "telos",
    longname: "Teloscoin",
    description: "Teloscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/teloscoin/"
    },
    rank: "1140"
},{
    name: "local-world-forwarders",
    code: "LWF",
    icon: "lwf",
    longname: "Local World Forwarders",
    description: "Local World Forwarders coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/local-world-forwarders/"
    },
    rank: "1141"
},{
    name: "crystal-token",
    code: "CYL",
    icon: "cyl",
    longname: "Crystal Token",
    description: "Crystal Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crystal-token/"
    },
    rank: "1142"
},{
    name: "litecoin-plus",
    code: "LCP",
    icon: "lcp",
    longname: "Litecoin Plus",
    description: "Litecoin Plus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-plus/"
    },
    rank: "1143"
},{
    name: "bitcoinus",
    code: "BITS-1",
    icon: "bits-1",
    longname: "Bitcoinus",
    description: "Bitcoinus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinus/"
    },
    rank: "1144"
},{
    name: "jetcoin",
    code: "JET",
    icon: "jet",
    longname: "Jetcoin",
    description: "Jetcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jetcoin/"
    },
    rank: "1145"
},{
    name: "cybermusic",
    code: "CYMT",
    icon: "cymt",
    longname: "CyberMusic",
    description: "CyberMusic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybermusic/"
    },
    rank: "1146"
},{
    name: "bunnytoken",
    code: "BUNNY",
    icon: "bunny",
    longname: "BunnyToken",
    description: "BunnyToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bunnytoken/"
    },
    rank: "1147"
},{
    name: "pkg-token",
    code: "PKG",
    icon: "pkg",
    longname: "PKG Token",
    description: "PKG Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pkg-token/"
    },
    rank: "1148"
},{
    name: "intelligent-trading-foundation",
    code: "ITT",
    icon: "itt",
    longname: "Intelligent Trading Foundation",
    description: "Intelligent Trading Foundation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intelligent-trading-foundation/"
    },
    rank: "1149"
},{
    name: "roulettetoken",
    code: "RLT",
    icon: "rlt",
    longname: "RouletteToken",
    description: "RouletteToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/roulettetoken/"
    },
    rank: "1150"
},{
    name: "whalecoin",
    code: "WHL",
    icon: "whl",
    longname: "WhaleCoin",
    description: "WhaleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whalecoin/"
    },
    rank: "1151"
},{
    name: "steneum-coin",
    code: "STN",
    icon: "stn",
    longname: "Steneum Coin",
    description: "Steneum Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steneum-coin/"
    },
    rank: "1152"
},{
    name: "micromines",
    code: "MICRO",
    icon: "micro",
    longname: "Micromines",
    description: "Micromines coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/micromines/"
    },
    rank: "1153"
},{
    name: "zeusnetwork",
    code: "ZEUS",
    icon: "zeus",
    longname: "ZeusNetwork",
    description: "ZeusNetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeusnetwork/"
    },
    rank: "1154"
},{
    name: "mcap",
    code: "MCAP",
    icon: "mcap",
    longname: "MCAP",
    description: "MCAP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mcap/"
    },
    rank: "1155"
},{
    name: "cryptosoul",
    code: "SOUL-1",
    icon: "soul-1",
    longname: "CryptoSoul",
    description: "CryptoSoul coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptosoul/"
    },
    rank: "1156"
},{
    name: "insanecoin-insn",
    code: "INSN",
    icon: "insn",
    longname: "InsaneCoin",
    description: "InsaneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insanecoin-insn/"
    },
    rank: "1157"
},{
    name: "tourist-token",
    code: "TOTO",
    icon: "toto",
    longname: "Tourist Token",
    description: "Tourist Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tourist-token/"
    },
    rank: "1158"
},{
    name: "typerium",
    code: "TYPE",
    icon: "type",
    longname: "Typerium",
    description: "Typerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/typerium/"
    },
    rank: "1159"
},{
    name: "tokenstars",
    code: "TEAM",
    icon: "team",
    longname: "TEAM (TokenStars)",
    description: "TEAM (TokenStars) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenstars/"
    },
    rank: "1160"
},{
    name: "eltcoin",
    code: "ELTCOIN",
    icon: "eltcoin",
    longname: "ELTCOIN",
    description: "ELTCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eltcoin/"
    },
    rank: "1161"
},{
    name: "sub-invest",
    code: "SUBX",
    icon: "subx",
    longname: "Sub Invest",
    description: "Sub Invest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sub-invest/"
    },
    rank: "1162"
},{
    name: "neural-protocol",
    code: "NRP",
    icon: "nrp",
    longname: "Neural Protocol",
    description: "Neural Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neural-protocol/"
    },
    rank: "1163"
},{
    name: "vikkytoken",
    code: "VIKKY",
    icon: "vikky",
    longname: "VikkyToken",
    description: "VikkyToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vikkytoken/"
    },
    rank: "1164"
},{
    name: "blast",
    code: "BLAST",
    icon: "blast",
    longname: "BLAST",
    description: "BLAST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blast/"
    },
    rank: "1165"
},{
    name: "authorship",
    code: "ATS",
    icon: "ats",
    longname: "Authorship",
    description: "Authorship coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/authorship/"
    },
    rank: "1166"
},{
    name: "earth-token",
    code: "EARTH",
    icon: "earth",
    longname: "Earth Token",
    description: "Earth Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/earth-token/"
    },
    rank: "1167"
},{
    name: "obsidian",
    code: "ODN",
    icon: "odn",
    longname: "Obsidian",
    description: "Obsidian coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obsidian/"
    },
    rank: "1168"
},{
    name: "mirai",
    code: "MRI",
    icon: "mri",
    longname: "Mirai",
    description: "Mirai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mirai/"
    },
    rank: "1169"
},{
    name: "phonecoin",
    code: "PHON",
    icon: "phon",
    longname: "Phonecoin",
    description: "Phonecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phonecoin/"
    },
    rank: "1170"
},{
    name: "greenmed",
    code: "GRMD",
    icon: "grmd",
    longname: "GreenMed",
    description: "GreenMed coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/greenmed/"
    },
    rank: "1171"
},{
    name: "sonder",
    code: "SNR",
    icon: "snr",
    longname: "SONDER",
    description: "SONDER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sonder/"
    },
    rank: "1172"
},{
    name: "renos",
    code: "RNS",
    icon: "rns",
    longname: "Renos",
    description: "Renos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/renos/"
    },
    rank: "1173"
},{
    name: "abulaba",
    code: "AAA",
    icon: "aaa",
    longname: "Abulaba",
    description: "Abulaba coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/abulaba/"
    },
    rank: "1174"
},{
    name: "parallelcoin",
    code: "DUO",
    icon: "duo",
    longname: "ParallelCoin",
    description: "ParallelCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parallelcoin/"
    },
    rank: "1175"
},{
    name: "tokendesk",
    code: "TDS",
    icon: "tds",
    longname: "TokenDesk",
    description: "TokenDesk coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokendesk/"
    },
    rank: "1176"
},{
    name: "dach-coin",
    code: "DACH",
    icon: "dach",
    longname: "DACH Coin",
    description: "DACH Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dach-coin/"
    },
    rank: "1177"
},{
    name: "paxex",
    code: "PAXEX",
    icon: "paxex",
    longname: "PAXEX",
    description: "PAXEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paxex/"
    },
    rank: "1178"
},{
    name: "numus",
    code: "NMS",
    icon: "nms",
    longname: "Numus",
    description: "Numus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numus/"
    },
    rank: "1179"
},{
    name: "delta-chain",
    code: "DELTA",
    icon: "delta",
    longname: "DeltaChain",
    description: "DeltaChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delta-chain/"
    },
    rank: "1180"
},{
    name: "guess",
    code: "GUESS",
    icon: "guess",
    longname: "Peerguess",
    description: "Peerguess coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guess/"
    },
    rank: "1181"
},{
    name: "zenswap-network-token",
    code: "ZNT",
    icon: "znt",
    longname: "Zenswap Network Token",
    description: "Zenswap Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zenswap-network-token/"
    },
    rank: "1182"
},{
    name: "bitether",
    code: "BTR",
    icon: "btr",
    longname: "Bitether",
    description: "Bitether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitether/"
    },
    rank: "1183"
},{
    name: "ixtus-edutainment",
    code: "IXE",
    icon: "ixe",
    longname: "IXTUS Edutainment",
    description: "IXTUS Edutainment coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixtus-edutainment/"
    },
    rank: "1184"
},{
    name: "desire",
    code: "DSR",
    icon: "dsr",
    longname: "Desire",
    description: "Desire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/desire/"
    },
    rank: "1185"
},{
    name: "bzlcoin",
    code: "BZL",
    icon: "bzl",
    longname: "BZLCOIN",
    description: "BZLCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bzlcoin/"
    },
    rank: "1186"
},{
    name: "cryptrust",
    code: "CTRT",
    icon: "ctrt",
    longname: "Cryptrust",
    description: "Cryptrust coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptrust/"
    },
    rank: "1187"
},{
    name: "dinero",
    code: "DIN",
    icon: "din",
    longname: "Dinero",
    description: "Dinero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dinero/"
    },
    rank: "1188"
},{
    name: "thore-cash",
    code: "TCH",
    icon: "tch",
    longname: "Thore Cash",
    description: "Thore Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thore-cash/"
    },
    rank: "1189"
},{
    name: "decentralized-asset-trading-platform",
    code: "DATP",
    icon: "datp",
    longname: "Decentralized Asset Trading Platform",
    description: "Decentralized Asset Trading Platform coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decentralized-asset-trading-platform/"
    },
    rank: "1190"
},{
    name: "gossipcoin",
    code: "GOSS",
    icon: "goss",
    longname: "Gossipcoin",
    description: "Gossipcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gossipcoin/"
    },
    rank: "1191"
},{
    name: "azart",
    code: "AZART",
    icon: "azart",
    longname: "Azart",
    description: "Azart coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/azart/"
    },
    rank: "1192"
},{
    name: "bionic",
    code: "BNC",
    icon: "bnc",
    longname: "Bionic",
    description: "Bionic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bionic/"
    },
    rank: "1193"
},{
    name: "havy",
    code: "HAVY",
    icon: "havy",
    longname: "Havy",
    description: "Havy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/havy/"
    },
    rank: "1194"
},{
    name: "nyerium",
    code: "NYEX",
    icon: "nyex",
    longname: "Nyerium",
    description: "Nyerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nyerium/"
    },
    rank: "1195"
},{
    name: "mainstream-for-the-underground",
    code: "MFTU",
    icon: "mftu",
    longname: "Mainstream For The Underground",
    description: "Mainstream For The Underground coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mainstream-for-the-underground/"
    },
    rank: "1196"
},{
    name: "yolocash",
    code: "YLC",
    icon: "ylc",
    longname: "YoloCash",
    description: "YoloCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yolocash/"
    },
    rank: "1197"
},{
    name: "litebitcoin",
    code: "LBTC",
    icon: "lbtc",
    longname: "LiteBitcoin",
    description: "LiteBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litebitcoin/"
    },
    rank: "1198"
},{
    name: "kun",
    code: "KUN",
    icon: "kun",
    longname: "KUN",
    description: "KUN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kun/"
    },
    rank: "1199"
},{
    name: "joint-ventures",
    code: "JOINT",
    icon: "joint",
    longname: "Joint Ventures",
    description: "Joint Ventures coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joint-ventures/"
    },
    rank: "1200"
},{
    name: "ether-kingdoms-token",
    code: "IMP",
    icon: "imp",
    longname: "Ether Kingdoms Token",
    description: "Ether Kingdoms Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ether-kingdoms-token/"
    },
    rank: "1201"
},{
    name: "peony",
    code: "PNY",
    icon: "pny",
    longname: "Peony",
    description: "Peony coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peony/"
    },
    rank: "1202"
},{
    name: "cyber-movie-chain",
    code: "CMCT-1",
    icon: "cmct-1",
    longname: "Cyber Movie Chain",
    description: "Cyber Movie Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cyber-movie-chain/"
    },
    rank: "1203"
},{
    name: "prcoin",
    code: "PRC",
    icon: "prc",
    longname: "PRCoin",
    description: "PRCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prcoin/"
    },
    rank: "1204"
},{
    name: "model-x-coin",
    code: "MODX",
    icon: "modx",
    longname: "MODEL-X-coin",
    description: "MODEL-X-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/model-x-coin/"
    },
    rank: "1205"
},{
    name: "crevacoin",
    code: "CREVA",
    icon: "creva",
    longname: "CrevaCoin",
    description: "CrevaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crevacoin/"
    },
    rank: "1206"
},{
    name: "rusgas",
    code: "RGS",
    icon: "rgs",
    longname: "RusGas",
    description: "RusGas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rusgas/"
    },
    rank: "1207"
},{
    name: "bolenum",
    code: "BLN",
    icon: "bln",
    longname: "Bolenum",
    description: "Bolenum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bolenum/"
    },
    rank: "1208"
},{
    name: "oyster",
    code: "PRL",
    icon: "prl",
    longname: "Oyster",
    description: "Oyster coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oyster/"
    },
    rank: "1209"
},{
    name: "spectre-dividend",
    code: "SXDT",
    icon: "sxdt",
    longname: "Spectre.ai Dividend Token",
    description: "Spectre.ai Dividend Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-dividend/"
    },
    rank: "1210"
},{
    name: "rock",
    code: "RKT",
    icon: "rkt",
    longname: "Rock",
    description: "Rock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rock/"
    },
    rank: "1211"
},{
    name: "neumark",
    code: "NEU",
    icon: "neu",
    longname: "Neumark",
    description: "Neumark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neumark/"
    },
    rank: "1212"
},{
    name: "uttoken",
    code: "UTT",
    icon: "utt",
    longname: "United Traders Token",
    description: "United Traders Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uttoken/"
    },
    rank: "1213"
},{
    name: "rialto",
    code: "XRL",
    icon: "xrl",
    longname: "Rialto",
    description: "Rialto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rialto/"
    },
    rank: "1214"
},{
    name: "lykke",
    code: "LKK",
    icon: "lkk",
    longname: "Lykke",
    description: "Lykke coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lykke/"
    },
    rank: "1215"
},{
    name: "tao",
    code: "XTO",
    icon: "xto",
    longname: "Tao",
    description: "Tao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tao/"
    },
    rank: "1216"
},{
    name: "playcoin-erc20",
    code: "PLY",
    icon: "ply",
    longname: "PlayCoin [ERC20]",
    description: "PlayCoin [ERC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playcoin-erc20/"
    },
    rank: "1217"
},{
    name: "cofound-it",
    code: "CFI",
    icon: "cfi",
    longname: "Cofound.it",
    description: "Cofound.it coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cofound-it/"
    },
    rank: "1218"
},{
    name: "paypie",
    code: "PPP",
    icon: "ppp",
    longname: "PayPie",
    description: "PayPie coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paypie/"
    },
    rank: "1219"
},{
    name: "bittwatt",
    code: "BWT",
    icon: "bwt",
    longname: "Bittwatt",
    description: "Bittwatt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bittwatt/"
    },
    rank: "1220"
},{
    name: "avinoc",
    code: "AVINOC",
    icon: "avinoc",
    longname: "AVINOC",
    description: "AVINOC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/avinoc/"
    },
    rank: "1221"
},{
    name: "rubycoin",
    code: "RBY",
    icon: "rby",
    longname: "Rubycoin",
    description: "Rubycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubycoin/"
    },
    rank: "1222"
},{
    name: "ecobit",
    code: "ECOB",
    icon: "ecob",
    longname: "Ecobit",
    description: "Ecobit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecobit/"
    },
    rank: "1223"
},{
    name: "linfinity",
    code: "LFT",
    icon: "lft",
    longname: "Linfinity",
    description: "Linfinity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linfinity/"
    },
    rank: "1224"
},{
    name: "proxeus",
    code: "XES",
    icon: "xes",
    longname: "Proxeus",
    description: "Proxeus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proxeus/"
    },
    rank: "1225"
},{
    name: "karma-eos",
    code: "KARMA",
    icon: "karma",
    longname: "KARMA",
    description: "KARMA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karma-eos/"
    },
    rank: "1226"
},{
    name: "dao-casino",
    code: "BET",
    icon: "bet",
    longname: "DAO.Casino",
    description: "DAO.Casino coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dao-casino/"
    },
    rank: "1227"
},{
    name: "anoncoin",
    code: "ANC",
    icon: "anc",
    longname: "Anoncoin",
    description: "Anoncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anoncoin/"
    },
    rank: "1228"
},{
    name: "grid",
    code: "GRID",
    icon: "grid",
    longname: "Grid+",
    description: "Grid+ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grid/"
    },
    rank: "1229"
},{
    name: "ondori",
    code: "RSTR",
    icon: "rstr",
    longname: "Ondori",
    description: "Ondori coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ondori/"
    },
    rank: "1230"
},{
    name: "taas",
    code: "TAAS",
    icon: "taas",
    longname: "TaaS",
    description: "TaaS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/taas/"
    },
    rank: "1231"
},{
    name: "maecenas",
    code: "ART",
    icon: "art",
    longname: "Maecenas",
    description: "Maecenas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maecenas/"
    },
    rank: "1232"
},{
    name: "asiacoin",
    code: "AC",
    icon: "ac",
    longname: "AsiaCoin",
    description: "AsiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiacoin/"
    },
    rank: "1233"
},{
    name: "puregold-token",
    code: "PGT",
    icon: "pgt",
    longname: "Puregold Token",
    description: "Puregold Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/puregold-token/"
    },
    rank: "1234"
},{
    name: "lomocoin",
    code: "LMC",
    icon: "lmc",
    longname: "LoMoCoin",
    description: "LoMoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lomocoin/"
    },
    rank: "1235"
},{
    name: "hubii-network",
    code: "HBT",
    icon: "hbt",
    longname: "Hubii Network",
    description: "Hubii Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hubii-network/"
    },
    rank: "1236"
},{
    name: "leverj",
    code: "LEV",
    icon: "lev",
    longname: "Leverj",
    description: "Leverj coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leverj/"
    },
    rank: "1237"
},{
    name: "chips",
    code: "CHIPS",
    icon: "chips",
    longname: "CHIPS",
    description: "CHIPS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chips/"
    },
    rank: "1238"
},{
    name: "coinvest",
    code: "COIN",
    icon: "coin",
    longname: "Coinvest",
    description: "Coinvest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinvest/"
    },
    rank: "1239"
},{
    name: "russian-mining-coin",
    code: "RMC",
    icon: "rmc",
    longname: "Russian Miner Coin",
    description: "Russian Miner Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russian-mining-coin/"
    },
    rank: "1240"
},{
    name: "sequence",
    code: "SEQ",
    icon: "seq",
    longname: "Sequence",
    description: "Sequence coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sequence/"
    },
    rank: "1241"
},{
    name: "x8x-token",
    code: "X8X",
    icon: "x8x",
    longname: "X8X Token",
    description: "X8X Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x8x-token/"
    },
    rank: "1242"
},{
    name: "alis",
    code: "ALIS",
    icon: "alis",
    longname: "ALIS",
    description: "ALIS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alis/"
    },
    rank: "1243"
},{
    name: "fnkos",
    code: "FNKOS",
    icon: "fnkos",
    longname: "FNKOS",
    description: "FNKOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fnkos/"
    },
    rank: "1244"
},{
    name: "qubitica",
    code: "QBIT",
    icon: "qbit",
    longname: "Qubitica",
    description: "Qubitica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qubitica/"
    },
    rank: "1245"
},{
    name: "motocoin",
    code: "MOTO",
    icon: "moto",
    longname: "Motocoin",
    description: "Motocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/motocoin/"
    },
    rank: "1246"
},{
    name: "fidelium",
    code: "FID",
    icon: "fid",
    longname: "Fidelium",
    description: "Fidelium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fidelium/"
    },
    rank: "1247"
},{
    name: "bitdegree",
    code: "BDG",
    icon: "bdg",
    longname: "BitDegree",
    description: "BitDegree coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdegree/"
    },
    rank: "1248"
},{
    name: "kind-ads-token",
    code: "KIND",
    icon: "kind",
    longname: "Kind Ads Token",
    description: "Kind Ads Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kind-ads-token/"
    },
    rank: "1249"
},{
    name: "open-platform",
    code: "OPEN",
    icon: "open",
    longname: "Open Platform",
    description: "Open Platform coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/open-platform/"
    },
    rank: "1250"
},{
    name: "cryptopay",
    code: "CPAY",
    icon: "cpay",
    longname: "Cryptopay",
    description: "Cryptopay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptopay/"
    },
    rank: "1251"
},{
    name: "bitqy",
    code: "BQ",
    icon: "bq",
    longname: "bitqy",
    description: "bitqy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitqy/"
    },
    rank: "1252"
},{
    name: "noku",
    code: "NOKU",
    icon: "noku",
    longname: "Noku",
    description: "Noku coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noku/"
    },
    rank: "1253"
},{
    name: "oxycoin",
    code: "OXY",
    icon: "oxy",
    longname: "Oxycoin",
    description: "Oxycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oxycoin/"
    },
    rank: "1254"
},{
    name: "vezt",
    code: "VZT",
    icon: "vzt",
    longname: "Vezt",
    description: "Vezt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vezt/"
    },
    rank: "1255"
},{
    name: "gravity",
    code: "GZRO",
    icon: "gzro",
    longname: "Gravity",
    description: "Gravity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gravity/"
    },
    rank: "1256"
},{
    name: "soniq",
    code: "SONIQ",
    icon: "soniq",
    longname: "Soniq",
    description: "Soniq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soniq/"
    },
    rank: "1257"
},{
    name: "vice-industry-token",
    code: "VIT",
    icon: "vit",
    longname: "Vice Industry Token",
    description: "Vice Industry Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vice-industry-token/"
    },
    rank: "1258"
},{
    name: "petrodollar",
    code: "XPD",
    icon: "xpd",
    longname: "PetroDollar",
    description: "PetroDollar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/petrodollar/"
    },
    rank: "1259"
},{
    name: "apx",
    code: "APX",
    icon: "apx",
    longname: "APX",
    description: "APX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apx/"
    },
    rank: "1260"
},{
    name: "42-coin",
    code: "42",
    icon: "42",
    longname: "42-coin",
    description: "42-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/42-coin/"
    },
    rank: "1261"
},{
    name: "heat-ledger",
    code: "HEAT",
    icon: "heat",
    longname: "HEAT",
    description: "HEAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heat-ledger/"
    },
    rank: "1262"
},{
    name: "smoke",
    code: "SMOKE",
    icon: "smoke",
    longname: "Smoke",
    description: "Smoke coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smoke/"
    },
    rank: "1263"
},{
    name: "adelphoi",
    code: "ADL",
    icon: "adl",
    longname: "Adelphoi",
    description: "Adelphoi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adelphoi/"
    },
    rank: "1264"
},{
    name: "rebl",
    code: "REBL",
    icon: "rebl",
    longname: "REBL",
    description: "REBL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rebl/"
    },
    rank: "1265"
},{
    name: "fidentiax",
    code: "FDX",
    icon: "fdx",
    longname: "FidentiaX",
    description: "FidentiaX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fidentiax/"
    },
    rank: "1266"
},{
    name: "linker-coin",
    code: "LNC-1",
    icon: "lnc-1",
    longname: "Linker Coin",
    description: "Linker Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linker-coin/"
    },
    rank: "1267"
},{
    name: "ethbits",
    code: "ETBS",
    icon: "etbs",
    longname: "Ethbits",
    description: "Ethbits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethbits/"
    },
    rank: "1268"
},{
    name: "sovereign-hero",
    code: "HERO",
    icon: "hero",
    longname: "Sovereign Hero",
    description: "Sovereign Hero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sovereign-hero/"
    },
    rank: "1269"
},{
    name: "nimiq-exchange-token",
    code: "NET",
    icon: "net",
    longname: "Nimiq Exchange Token",
    description: "Nimiq Exchange Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nimiq-exchange-token/"
    },
    rank: "1270"
},{
    name: "bluecoin",
    code: "BLU",
    icon: "blu",
    longname: "BlueCoin",
    description: "BlueCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluecoin/"
    },
    rank: "1271"
},{
    name: "zeitcoin",
    code: "ZEIT",
    icon: "zeit",
    longname: "Zeitcoin",
    description: "Zeitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeitcoin/"
    },
    rank: "1272"
},{
    name: "dether",
    code: "DTH",
    icon: "dth",
    longname: "Dether",
    description: "Dether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dether/"
    },
    rank: "1273"
},{
    name: "pikciochain",
    code: "PKC",
    icon: "pkc",
    longname: "PikcioChain",
    description: "PikcioChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pikciochain/"
    },
    rank: "1274"
},{
    name: "tigereum",
    code: "TIG",
    icon: "tig",
    longname: "Tigereum",
    description: "Tigereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tigereum/"
    },
    rank: "1275"
},{
    name: "fluz-fluz",
    code: "FLUZ",
    icon: "fluz",
    longname: "Fluz Fluz",
    description: "Fluz Fluz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fluz-fluz/"
    },
    rank: "1276"
},{
    name: "uniform-fiscal-object",
    code: "UFO",
    icon: "ufo",
    longname: "Uniform Fiscal Object",
    description: "Uniform Fiscal Object coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uniform-fiscal-object/"
    },
    rank: "1277"
},{
    name: "bullion",
    code: "CBX",
    icon: "cbx",
    longname: "Bullion",
    description: "Bullion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bullion/"
    },
    rank: "1278"
},{
    name: "attention-token-of-media",
    code: "ATM",
    icon: "atm",
    longname: "ATMChain",
    description: "ATMChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/attention-token-of-media/"
    },
    rank: "1279"
},{
    name: "w3coin",
    code: "W3C",
    icon: "w3c",
    longname: "W3Coin",
    description: "W3Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/w3coin/"
    },
    rank: "1280"
},{
    name: "hellogold",
    code: "HGT",
    icon: "hgt",
    longname: "HelloGold",
    description: "HelloGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hellogold/"
    },
    rank: "1281"
},{
    name: "lampix",
    code: "PIX",
    icon: "pix",
    longname: "Lampix",
    description: "Lampix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lampix/"
    },
    rank: "1282"
},{
    name: "manna",
    code: "MANNA",
    icon: "manna",
    longname: "Manna",
    description: "Manna coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/manna/"
    },
    rank: "1283"
},{
    name: "clipper-coin",
    code: "CCCX",
    icon: "cccx",
    longname: "Clipper Coin",
    description: "Clipper Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clipper-coin/"
    },
    rank: "1284"
},{
    name: "xenon",
    code: "XNN",
    icon: "xnn",
    longname: "Xenon",
    description: "Xenon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xenon/"
    },
    rank: "1285"
},{
    name: "monster-byte",
    code: "MBI",
    icon: "mbi",
    longname: "Monster Byte",
    description: "Monster Byte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monster-byte/"
    },
    rank: "1286"
},{
    name: "darcrus",
    code: "DAR",
    icon: "dar",
    longname: "Darcrus",
    description: "Darcrus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darcrus/"
    },
    rank: "1287"
},{
    name: "sociall",
    code: "SCL",
    icon: "scl",
    longname: "Sociall",
    description: "Sociall coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sociall/"
    },
    rank: "1288"
},{
    name: "goodomy",
    code: "GOOD",
    icon: "good",
    longname: "Goodomy",
    description: "Goodomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goodomy/"
    },
    rank: "1289"
},{
    name: "coin-lion",
    code: "LION",
    icon: "lion",
    longname: "Coin Lion",
    description: "Coin Lion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin-lion/"
    },
    rank: "1290"
},{
    name: "veriumreserve",
    code: "VRM",
    icon: "vrm",
    longname: "VeriumReserve",
    description: "VeriumReserve coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veriumreserve/"
    },
    rank: "1291"
},{
    name: "bounty0x",
    code: "BNTY",
    icon: "bnty",
    longname: "Bounty0x",
    description: "Bounty0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bounty0x/"
    },
    rank: "1292"
},{
    name: "carboncoin",
    code: "CARBON",
    icon: "carbon",
    longname: "Carboncoin",
    description: "Carboncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carboncoin/"
    },
    rank: "1293"
},{
    name: "denarius-dnr",
    code: "D",
    icon: "d",
    longname: "Denarius",
    description: "Denarius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/denarius-dnr/"
    },
    rank: "1294"
},{
    name: "block-chain-com",
    code: "BC",
    icon: "bc",
    longname: "Block-Chain.com",
    description: "Block-Chain.com coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/block-chain-com/"
    },
    rank: "1295"
},{
    name: "maxcoin",
    code: "MAX",
    icon: "max",
    longname: "MaxCoin",
    description: "MaxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maxcoin/"
    },
    rank: "1296"
},{
    name: "seal-network",
    code: "SEAL",
    icon: "seal",
    longname: "Seal Network",
    description: "Seal Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/seal-network/"
    },
    rank: "1297"
},{
    name: "investfeed",
    code: "IFT",
    icon: "ift",
    longname: "InvestFeed",
    description: "InvestFeed coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/investfeed/"
    },
    rank: "1298"
},{
    name: "quark",
    code: "QRK",
    icon: "qrk",
    longname: "Quark",
    description: "Quark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quark/"
    },
    rank: "1299"
},{
    name: "phi-token",
    code: "PHI",
    icon: "phi",
    longname: "PHI Token",
    description: "PHI Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phi-token/"
    },
    rank: "1300"
},{
    name: "verify",
    code: "CRED",
    icon: "cred",
    longname: "Verify",
    description: "Verify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verify/"
    },
    rank: "1301"
},{
    name: "ixcoin",
    code: "IXC",
    icon: "ixc",
    longname: "Ixcoin",
    description: "Ixcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixcoin/"
    },
    rank: "1302"
},{
    name: "worldcoin",
    code: "WDC",
    icon: "wdc",
    longname: "WorldCoin",
    description: "WorldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcoin/"
    },
    rank: "1303"
},{
    name: "ethorse",
    code: "HORSE",
    icon: "horse",
    longname: "Ethorse",
    description: "Ethorse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethorse/"
    },
    rank: "1304"
},{
    name: "supercoin",
    code: "SUPER",
    icon: "super",
    longname: "SuperCoin",
    description: "SuperCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/supercoin/"
    },
    rank: "1305"
},{
    name: "nexium",
    code: "NXC",
    icon: "nxc",
    longname: "Nexium",
    description: "Nexium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexium/"
    },
    rank: "1306"
},{
    name: "stipend",
    code: "SPD-1",
    icon: "spd-1",
    longname: "Stipend",
    description: "Stipend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stipend/"
    },
    rank: "1307"
},{
    name: "noblecoin",
    code: "NOBL",
    icon: "nobl",
    longname: "NobleCoin",
    description: "NobleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noblecoin/"
    },
    rank: "1308"
},{
    name: "white-standard",
    code: "WSD",
    icon: "wsd",
    longname: "White Standard",
    description: "White Standard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/white-standard/"
    },
    rank: "1309"
},{
    name: "payfair",
    code: "PFR",
    icon: "pfr",
    longname: "Payfair",
    description: "Payfair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/payfair/"
    },
    rank: "1310"
},{
    name: "i0coin",
    code: "I0C",
    icon: "i0c",
    longname: "I0Coin",
    description: "I0Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/i0coin/"
    },
    rank: "1311"
},{
    name: "bunnycoin",
    code: "BUN",
    icon: "bun",
    longname: "BunnyCoin",
    description: "BunnyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bunnycoin/"
    },
    rank: "1312"
},{
    name: "blockpool",
    code: "BPL",
    icon: "bpl",
    longname: "Blockpool",
    description: "Blockpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpool/"
    },
    rank: "1313"
},{
    name: "teslacoin",
    code: "TES",
    icon: "tes",
    longname: "TeslaCoin",
    description: "TeslaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/teslacoin/"
    },
    rank: "1314"
},{
    name: "decentralized-machine-learning",
    code: "DML",
    icon: "dml",
    longname: "Decentralized Machine Learning",
    description: "Decentralized Machine Learning coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decentralized-machine-learning/"
    },
    rank: "1315"
},{
    name: "hush",
    code: "HUSH",
    icon: "hush",
    longname: "Hush",
    description: "Hush coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hush/"
    },
    rank: "1316"
},{
    name: "trollcoin",
    code: "TROLL",
    icon: "troll",
    longname: "Trollcoin",
    description: "Trollcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trollcoin/"
    },
    rank: "1317"
},{
    name: "russiacoin",
    code: "RC",
    icon: "rc",
    longname: "RussiaCoin",
    description: "RussiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russiacoin/"
    },
    rank: "1318"
},{
    name: "powercoin",
    code: "PWR",
    icon: "pwr",
    longname: "PWR Coin",
    description: "PWR Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/powercoin/"
    },
    rank: "1319"
},{
    name: "imbrex",
    code: "REX",
    icon: "rex",
    longname: "imbrex",
    description: "imbrex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/imbrex/"
    },
    rank: "1320"
},{
    name: "wandx",
    code: "WAND",
    icon: "wand",
    longname: "WandX",
    description: "WandX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wandx/"
    },
    rank: "1321"
},{
    name: "publica",
    code: "PBL",
    icon: "pbl",
    longname: "Publica",
    description: "Publica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/publica/"
    },
    rank: "1322"
},{
    name: "sether",
    code: "SETH",
    icon: "seth",
    longname: "Sether",
    description: "Sether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sether/"
    },
    rank: "1323"
},{
    name: "iethereum",
    code: "IETH",
    icon: "ieth",
    longname: "iEthereum",
    description: "iEthereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iethereum/"
    },
    rank: "1324"
},{
    name: "condensate",
    code: "RAIN",
    icon: "rain",
    longname: "Condensate",
    description: "Condensate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/condensate/"
    },
    rank: "1325"
},{
    name: "smileycoin",
    code: "SMLY",
    icon: "smly",
    longname: "SmileyCoin",
    description: "SmileyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smileycoin/"
    },
    rank: "1326"
},{
    name: "e-gulden",
    code: "EFL",
    icon: "efl",
    longname: "e-Gulden",
    description: "e-Gulden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-gulden/"
    },
    rank: "1327"
},{
    name: "open-trading-network",
    code: "OTN",
    icon: "otn",
    longname: "Open Trading Network",
    description: "Open Trading Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/open-trading-network/"
    },
    rank: "1328"
},{
    name: "gainer",
    code: "GNR",
    icon: "gnr",
    longname: "Gainer",
    description: "Gainer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gainer/"
    },
    rank: "1329"
},{
    name: "ezoow",
    code: "EZW",
    icon: "ezw",
    longname: "EZOOW",
    description: "EZOOW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ezoow/"
    },
    rank: "1330"
},{
    name: "hyperstake",
    code: "HYP",
    icon: "hyp",
    longname: "HyperStake",
    description: "HyperStake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hyperstake/"
    },
    rank: "1331"
},{
    name: "tiesdb",
    code: "TIE",
    icon: "tie",
    longname: "Ties.DB",
    description: "Ties.DB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tiesdb/"
    },
    rank: "1332"
},{
    name: "universe",
    code: "UNI",
    icon: "uni",
    longname: "Universe",
    description: "Universe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universe/"
    },
    rank: "1333"
},{
    name: "blockpass",
    code: "PASS",
    icon: "pass",
    longname: "Blockpass",
    description: "Blockpass coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpass/"
    },
    rank: "1334"
},{
    name: "blockcat",
    code: "CAT-1",
    icon: "cat-1",
    longname: "BlockCAT",
    description: "BlockCAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockcat/"
    },
    rank: "1335"
},{
    name: "chronologic",
    code: "DAY",
    icon: "day",
    longname: "Chronologic",
    description: "Chronologic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronologic/"
    },
    rank: "1336"
},{
    name: "talao",
    code: "TALAO",
    icon: "talao",
    longname: "Talao",
    description: "Talao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/talao/"
    },
    rank: "1337"
},{
    name: "straks",
    code: "STAK",
    icon: "stak",
    longname: "STRAKS",
    description: "STRAKS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/straks/"
    },
    rank: "1338"
},{
    name: "skeincoin",
    code: "SKC",
    icon: "skc",
    longname: "Skeincoin",
    description: "Skeincoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skeincoin/"
    },
    rank: "1339"
},{
    name: "orbitcoin",
    code: "ORB",
    icon: "orb",
    longname: "Orbitcoin",
    description: "Orbitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/orbitcoin/"
    },
    rank: "1340"
},{
    name: "cryptonite",
    code: "XCN",
    icon: "xcn",
    longname: "Cryptonite",
    description: "Cryptonite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptonite/"
    },
    rank: "1341"
},{
    name: "vivid-coin",
    code: "VIVID",
    icon: "vivid",
    longname: "Vivid Coin",
    description: "Vivid Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vivid-coin/"
    },
    rank: "1342"
},{
    name: "qubitcoin",
    code: "Q2C",
    icon: "q2c",
    longname: "QubitCoin",
    description: "QubitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qubitcoin/"
    },
    rank: "1343"
},{
    name: "voisecom",
    code: "VOISE",
    icon: "voise",
    longname: "Voise",
    description: "Voise coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/voisecom/"
    },
    rank: "1344"
},{
    name: "kobocoin",
    code: "KOBO",
    icon: "kobo",
    longname: "Kobocoin",
    description: "Kobocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kobocoin/"
    },
    rank: "1345"
},{
    name: "cryptoping",
    code: "PING",
    icon: "ping",
    longname: "CryptoPing",
    description: "CryptoPing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoping/"
    },
    rank: "1346"
},{
    name: "biocoin",
    code: "BIO",
    icon: "bio",
    longname: "BioCoin",
    description: "BioCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biocoin/"
    },
    rank: "1347"
},{
    name: "target-coin",
    code: "TGT",
    icon: "tgt",
    longname: "Target Coin",
    description: "Target Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/target-coin/"
    },
    rank: "1348"
},{
    name: "biotron",
    code: "BTRN",
    icon: "btrn",
    longname: "Biotron",
    description: "Biotron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biotron/"
    },
    rank: "1349"
},{
    name: "bitibu-coin",
    code: "BTB",
    icon: "btb",
    longname: "Bitibu Coin",
    description: "Bitibu Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitibu-coin/"
    },
    rank: "1350"
},{
    name: "knoxstertoken",
    code: "FKX",
    icon: "fkx",
    longname: "Knoxstertoken",
    description: "Knoxstertoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/knoxstertoken/"
    },
    rank: "1351"
},{
    name: "posw-coin",
    code: "POSW",
    icon: "posw",
    longname: "PoSW Coin",
    description: "PoSW Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/posw-coin/"
    },
    rank: "1352"
},{
    name: "cartaxi-token",
    code: "CTX",
    icon: "ctx",
    longname: "CarTaxi Token",
    description: "CarTaxi Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cartaxi-token/"
    },
    rank: "1353"
},{
    name: "signals-network",
    code: "SGN",
    icon: "sgn",
    longname: "Signals Network",
    description: "Signals Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signals-network/"
    },
    rank: "1354"
},{
    name: "photon",
    code: "PHO",
    icon: "pho",
    longname: "Photon",
    description: "Photon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/photon/"
    },
    rank: "1355"
},{
    name: "startercoin",
    code: "STAC",
    icon: "stac",
    longname: "StarterCoin",
    description: "StarterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/startercoin/"
    },
    rank: "1356"
},{
    name: "808coin",
    code: "808",
    icon: "808",
    longname: "808Coin",
    description: "808Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/808coin/"
    },
    rank: "1357"
},{
    name: "zennies",
    code: "ZENI",
    icon: "zeni",
    longname: "Zennies",
    description: "Zennies coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zennies/"
    },
    rank: "1358"
},{
    name: "incakoin",
    code: "NKA",
    icon: "nka",
    longname: "IncaKoin",
    description: "IncaKoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incakoin/"
    },
    rank: "1359"
},{
    name: "hackspace-capital",
    code: "HAC",
    icon: "hac",
    longname: "Hackspace Capital",
    description: "Hackspace Capital coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hackspace-capital/"
    },
    rank: "1360"
},{
    name: "helleniccoin",
    code: "HNC",
    icon: "hnc",
    longname: "Helleniccoin",
    description: "Helleniccoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helleniccoin/"
    },
    rank: "1361"
},{
    name: "digitalprice",
    code: "DP",
    icon: "dp",
    longname: "DigitalPrice",
    description: "DigitalPrice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalprice/"
    },
    rank: "1362"
},{
    name: "etheriya",
    code: "RIYA",
    icon: "riya",
    longname: "Etheriya",
    description: "Etheriya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheriya/"
    },
    rank: "1363"
},{
    name: "kekcoin",
    code: "KEK",
    icon: "kek",
    longname: "KekCoin",
    description: "KekCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kekcoin/"
    },
    rank: "1364"
},{
    name: "deutsche-emark",
    code: "DEM",
    icon: "dem",
    longname: "Deutsche eMark",
    description: "Deutsche eMark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deutsche-emark/"
    },
    rank: "1365"
},{
    name: "speed-mining-service",
    code: "SMS",
    icon: "sms",
    longname: "Speed Mining Service",
    description: "Speed Mining Service coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speed-mining-service/"
    },
    rank: "1366"
},{
    name: "joulecoin",
    code: "XJO",
    icon: "xjo",
    longname: "Joulecoin",
    description: "Joulecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joulecoin/"
    },
    rank: "1367"
},{
    name: "fujicoin",
    code: "FJC",
    icon: "fjc",
    longname: "FujiCoin",
    description: "FujiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fujicoin/"
    },
    rank: "1368"
},{
    name: "bitsilver",
    code: "BITSILVER",
    icon: "bitsilver",
    longname: "bitSilver",
    description: "bitSilver coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsilver/"
    },
    rank: "1369"
},{
    name: "commodity-ad-network",
    code: "CDX",
    icon: "cdx",
    longname: "Commodity Ad Network",
    description: "Commodity Ad Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commodity-ad-network/"
    },
    rank: "1370"
},{
    name: "truckcoin",
    code: "TRK",
    icon: "trk",
    longname: "Truckcoin",
    description: "Truckcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/truckcoin/"
    },
    rank: "1371"
},{
    name: "bitgold",
    code: "BITGOLD",
    icon: "bitgold",
    longname: "bitGold",
    description: "bitGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitgold/"
    },
    rank: "1372"
},{
    name: "webchain",
    code: "WEB-1",
    icon: "web-1",
    longname: "Webchain",
    description: "Webchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/webchain/"
    },
    rank: "1373"
},{
    name: "bitcloud",
    code: "BTDX",
    icon: "btdx",
    longname: "Bitcloud",
    description: "Bitcloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcloud/"
    },
    rank: "1374"
},{
    name: "tagcoin",
    code: "TAG",
    icon: "tag",
    longname: "TagCoin",
    description: "TagCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tagcoin/"
    },
    rank: "1375"
},{
    name: "canada-ecoin",
    code: "CDN",
    icon: "cdn",
    longname: "Canada eCoin",
    description: "Canada eCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/canada-ecoin/"
    },
    rank: "1376"
},{
    name: "opal",
    code: "OPAL",
    icon: "opal",
    longname: "Opal",
    description: "Opal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opal/"
    },
    rank: "1377"
},{
    name: "bitmark",
    code: "BTM-1",
    icon: "btm-1",
    longname: "Bitmark",
    description: "Bitmark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitmark/"
    },
    rank: "1378"
},{
    name: "digitalcoin",
    code: "DGC",
    icon: "dgc",
    longname: "Digitalcoin",
    description: "Digitalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalcoin/"
    },
    rank: "1379"
},{
    name: "hirematch",
    code: "HIRE",
    icon: "hire",
    longname: "HireMatch",
    description: "HireMatch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hirematch/"
    },
    rank: "1380"
},{
    name: "drp-utility",
    code: "DRPU",
    icon: "drpu",
    longname: "DCORP Utility",
    description: "DCORP Utility coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/drp-utility/"
    },
    rank: "1381"
},{
    name: "tracto",
    code: "TRCT",
    icon: "trct",
    longname: "Tracto",
    description: "Tracto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tracto/"
    },
    rank: "1382"
},{
    name: "newton-coin-project",
    code: "NCP",
    icon: "ncp",
    longname: "Newton Coin Project",
    description: "Newton Coin Project coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newton-coin-project/"
    },
    rank: "1383"
},{
    name: "fantasygold",
    code: "FGC",
    icon: "fgc",
    longname: "FantasyGold",
    description: "FantasyGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantasygold/"
    },
    rank: "1384"
},{
    name: "bitbtc",
    code: "BITBTC",
    icon: "bitbtc",
    longname: "bitBTC",
    description: "bitBTC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbtc/"
    },
    rank: "1385"
},{
    name: "martexcoin",
    code: "MXT",
    icon: "mxt",
    longname: "MarteXcoin",
    description: "MarteXcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/martexcoin/"
    },
    rank: "1386"
},{
    name: "trumpcoin",
    code: "TRUMP",
    icon: "trump",
    longname: "TrumpCoin",
    description: "TrumpCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trumpcoin/"
    },
    rank: "1387"
},{
    name: "neverdie",
    code: "NDC",
    icon: "ndc",
    longname: "NEVERDIE",
    description: "NEVERDIE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neverdie/"
    },
    rank: "1388"
},{
    name: "popularcoin",
    code: "POP",
    icon: "pop",
    longname: "PopularCoin",
    description: "PopularCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/popularcoin/"
    },
    rank: "1389"
},{
    name: "elementrem",
    code: "ELE",
    icon: "ele",
    longname: "Elementrem",
    description: "Elementrem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elementrem/"
    },
    rank: "1390"
},{
    name: "firstcoin",
    code: "FRST",
    icon: "frst",
    longname: "FirstCoin",
    description: "FirstCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstcoin/"
    },
    rank: "1391"
},{
    name: "innova",
    code: "INN",
    icon: "inn",
    longname: "Innova",
    description: "Innova coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/innova/"
    },
    rank: "1392"
},{
    name: "ethersportz",
    code: "ESZ",
    icon: "esz",
    longname: "EtherSportz",
    description: "EtherSportz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethersportz/"
    },
    rank: "1393"
},{
    name: "crave",
    code: "CRAVE",
    icon: "crave",
    longname: "Crave",
    description: "Crave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crave/"
    },
    rank: "1394"
},{
    name: "ellaism",
    code: "ELLA",
    icon: "ella",
    longname: "Ellaism",
    description: "Ellaism coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ellaism/"
    },
    rank: "1395"
},{
    name: "phoenixcoin",
    code: "PXC",
    icon: "pxc",
    longname: "Phoenixcoin",
    description: "Phoenixcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phoenixcoin/"
    },
    rank: "1396"
},{
    name: "adzcoin",
    code: "ADZ",
    icon: "adz",
    longname: "Adzcoin",
    description: "Adzcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adzcoin/"
    },
    rank: "1397"
},{
    name: "op-coin",
    code: "OPC",
    icon: "opc",
    longname: "OP Coin",
    description: "OP Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/op-coin/"
    },
    rank: "1398"
},{
    name: "dinastycoin",
    code: "DCY",
    icon: "dcy",
    longname: "Dinastycoin",
    description: "Dinastycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dinastycoin/"
    },
    rank: "1399"
},{
    name: "shping",
    code: "SHPING",
    icon: "shping",
    longname: "SHPING",
    description: "SHPING coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shping/"
    },
    rank: "1400"
},{
    name: "citadel",
    code: "CTL",
    icon: "ctl",
    longname: "Citadel",
    description: "Citadel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/citadel/"
    },
    rank: "1401"
},{
    name: "compound-coin",
    code: "COMP",
    icon: "comp",
    longname: "Compound Coin",
    description: "Compound Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/compound-coin/"
    },
    rank: "1402"
},{
    name: "nushares",
    code: "NSR",
    icon: "nsr",
    longname: "NuShares",
    description: "NuShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nushares/"
    },
    rank: "1403"
},{
    name: "fabric-token",
    code: "FT",
    icon: "ft",
    longname: "Fabric Token",
    description: "Fabric Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fabric-token/"
    },
    rank: "1404"
},{
    name: "digital-insurance-token",
    code: "DIT",
    icon: "dit",
    longname: "Digital Insurance Token",
    description: "Digital Insurance Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-insurance-token/"
    },
    rank: "1405"
},{
    name: "live-stars",
    code: "LIVE",
    icon: "live",
    longname: "Live Stars",
    description: "Live Stars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/live-stars/"
    },
    rank: "1406"
},{
    name: "moin",
    code: "MOIN",
    icon: "moin",
    longname: "Moin",
    description: "Moin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moin/"
    },
    rank: "1407"
},{
    name: "bitbar",
    code: "BTB-1",
    icon: "btb-1",
    longname: "BitBar",
    description: "BitBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbar/"
    },
    rank: "1408"
},{
    name: "bitradio",
    code: "BRO",
    icon: "bro",
    longname: "Bitradio",
    description: "Bitradio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitradio/"
    },
    rank: "1409"
},{
    name: "bitsum",
    code: "BSM",
    icon: "bsm",
    longname: "Bitsum",
    description: "Bitsum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsum/"
    },
    rank: "1410"
},{
    name: "well",
    code: "WELL",
    icon: "well",
    longname: "WELL",
    description: "WELL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/well/"
    },
    rank: "1411"
},{
    name: "paycoin2",
    code: "XPY",
    icon: "xpy",
    longname: "PayCoin",
    description: "PayCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paycoin2/"
    },
    rank: "1412"
},{
    name: "freicoin",
    code: "FRC",
    icon: "frc",
    longname: "Freicoin",
    description: "Freicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/freicoin/"
    },
    rank: "1413"
},{
    name: "ethereumcash",
    code: "ECASH",
    icon: "ecash",
    longname: "Ethereum Cash",
    description: "Ethereum Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereumcash/"
    },
    rank: "1414"
},{
    name: "tidex-token",
    code: "TDX",
    icon: "tdx",
    longname: "Tidex Token",
    description: "Tidex Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tidex-token/"
    },
    rank: "1415"
},{
    name: "tokia",
    code: "TKA",
    icon: "tka",
    longname: "Tokia",
    description: "Tokia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokia/"
    },
    rank: "1416"
},{
    name: "iridium",
    code: "IRD",
    icon: "ird",
    longname: "Iridium",
    description: "Iridium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iridium/"
    },
    rank: "1417"
},{
    name: "triangles",
    code: "TRI",
    icon: "tri",
    longname: "Triangles",
    description: "Triangles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/triangles/"
    },
    rank: "1418"
},{
    name: "nerves",
    code: "NER",
    icon: "ner",
    longname: "Nerves",
    description: "Nerves coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nerves/"
    },
    rank: "1419"
},{
    name: "biteur",
    code: "BITEUR",
    icon: "biteur",
    longname: "bitEUR",
    description: "bitEUR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biteur/"
    },
    rank: "1420"
},{
    name: "synergy",
    code: "SNRG",
    icon: "snrg",
    longname: "Synergy",
    description: "Synergy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synergy/"
    },
    rank: "1421"
},{
    name: "pyrexcoin",
    code: "PYX",
    icon: "pyx",
    longname: "PyrexCoin",
    description: "PyrexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pyrexcoin/"
    },
    rank: "1422"
},{
    name: "sugar-exchange",
    code: "SGR",
    icon: "sgr",
    longname: "Sugar Exchange",
    description: "Sugar Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sugar-exchange/"
    },
    rank: "1423"
},{
    name: "origami",
    code: "ORI",
    icon: "ori",
    longname: "Origami",
    description: "Origami coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origami/"
    },
    rank: "1424"
},{
    name: "megacoin",
    code: "MEC",
    icon: "mec",
    longname: "Megacoin",
    description: "Megacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/megacoin/"
    },
    rank: "1425"
},{
    name: "piggycoin",
    code: "PIGGY",
    icon: "piggy",
    longname: "Piggycoin",
    description: "Piggycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piggycoin/"
    },
    rank: "1426"
},{
    name: "mithril-ore",
    code: "MORE-1",
    icon: "more-1",
    longname: "Mithril Ore",
    description: "Mithril Ore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mithril-ore/"
    },
    rank: "1427"
},{
    name: "orbis-token",
    code: "OBT",
    icon: "obt",
    longname: "Orbis Token",
    description: "Orbis Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/orbis-token/"
    },
    rank: "1428"
},{
    name: "ignition",
    code: "IC",
    icon: "ic",
    longname: "Ignition",
    description: "Ignition coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ignition/"
    },
    rank: "1429"
},{
    name: "kz-cash",
    code: "KZC",
    icon: "kzc",
    longname: "KZ Cash",
    description: "KZ Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kz-cash/"
    },
    rank: "1430"
},{
    name: "hodlcoin",
    code: "HODL",
    icon: "hodl",
    longname: "HOdlcoin",
    description: "HOdlcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hodlcoin/"
    },
    rank: "1431"
},{
    name: "bitcoinfast",
    code: "BCF",
    icon: "bcf",
    longname: "Bitcoin Fast",
    description: "Bitcoin Fast coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinfast/"
    },
    rank: "1432"
},{
    name: "gapcoin",
    code: "GAP",
    icon: "gap",
    longname: "Gapcoin",
    description: "Gapcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gapcoin/"
    },
    rank: "1433"
},{
    name: "musiconomi",
    code: "MCI",
    icon: "mci",
    longname: "Musiconomi",
    description: "Musiconomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/musiconomi/"
    },
    rank: "1434"
},{
    name: "jesus-coin",
    code: "JC",
    icon: "jc",
    longname: "Jesus Coin",
    description: "Jesus Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jesus-coin/"
    },
    rank: "1435"
},{
    name: "advanced-internet-blocks",
    code: "AIB",
    icon: "aib",
    longname: "Advanced Internet Blocks",
    description: "Advanced Internet Blocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/advanced-internet-blocks/"
    },
    rank: "1436"
},{
    name: "ultracoin",
    code: "UTC",
    icon: "utc",
    longname: "UltraCoin",
    description: "UltraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultracoin/"
    },
    rank: "1437"
},{
    name: "billionaire-token",
    code: "XBL",
    icon: "xbl",
    longname: "Billionaire Token",
    description: "Billionaire Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/billionaire-token/"
    },
    rank: "1438"
},{
    name: "kanadecoin",
    code: "KNDC",
    icon: "kndc",
    longname: "KanadeCoin",
    description: "KanadeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kanadecoin/"
    },
    rank: "1439"
},{
    name: "blakecoin",
    code: "BLC",
    icon: "blc",
    longname: "Blakecoin",
    description: "Blakecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakecoin/"
    },
    rank: "1440"
},{
    name: "elcoin-el",
    code: "EL",
    icon: "el",
    longname: "Elcoin",
    description: "Elcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elcoin-el/"
    },
    rank: "1441"
},{
    name: "tittiecoin",
    code: "TTC-1",
    icon: "ttc-1",
    longname: "TittieCoin",
    description: "TittieCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tittiecoin/"
    },
    rank: "1442"
},{
    name: "cazcoin",
    code: "CAZ",
    icon: "caz",
    longname: "Cazcoin",
    description: "Cazcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cazcoin/"
    },
    rank: "1443"
},{
    name: "bitcoin-scrypt",
    code: "BTCS",
    icon: "btcs",
    longname: "Bitcoin Scrypt",
    description: "Bitcoin Scrypt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-scrypt/"
    },
    rank: "1444"
},{
    name: "spreadcoin",
    code: "SPR",
    icon: "spr",
    longname: "SpreadCoin",
    description: "SpreadCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spreadcoin/"
    },
    rank: "1445"
},{
    name: "sagacoin",
    code: "SAGA",
    icon: "saga",
    longname: "SagaCoin",
    description: "SagaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sagacoin/"
    },
    rank: "1446"
},{
    name: "vslice",
    code: "VSL",
    icon: "vsl",
    longname: "vSlice",
    description: "vSlice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vslice/"
    },
    rank: "1447"
},{
    name: "wispr",
    code: "WSP",
    icon: "wsp",
    longname: "Wispr",
    description: "Wispr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wispr/"
    },
    rank: "1448"
},{
    name: "magiccoin",
    code: "MAGE",
    icon: "mage",
    longname: "MagicCoin",
    description: "MagicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magiccoin/"
    },
    rank: "1449"
},{
    name: "knekted",
    code: "KNT-1",
    icon: "knt-1",
    longname: "Knekted",
    description: "Knekted coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/knekted/"
    },
    rank: "1450"
},{
    name: "idealcash",
    code: "DEAL",
    icon: "deal",
    longname: "iDealCash",
    description: "iDealCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/idealcash/"
    },
    rank: "1451"
},{
    name: "sgpay",
    code: "SGP",
    icon: "sgp",
    longname: "SGPay",
    description: "SGPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sgpay/"
    },
    rank: "1452"
},{
    name: "btctalkcoin",
    code: "TALK",
    icon: "talk",
    longname: "BTCtalkcoin",
    description: "BTCtalkcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/btctalkcoin/"
    },
    rank: "1453"
},{
    name: "unitus",
    code: "UIS",
    icon: "uis",
    longname: "Unitus",
    description: "Unitus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unitus/"
    },
    rank: "1454"
},{
    name: "magi",
    code: "XMG",
    icon: "xmg",
    longname: "Magi",
    description: "Magi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magi/"
    },
    rank: "1455"
},{
    name: "sola-token",
    code: "SOL",
    icon: "sol",
    longname: "Sola Token",
    description: "Sola Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sola-token/"
    },
    rank: "1456"
},{
    name: "adultchain",
    code: "XXX",
    icon: "xxx",
    longname: "AdultChain",
    description: "AdultChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adultchain/"
    },
    rank: "1457"
},{
    name: "nyancoin",
    code: "NYAN",
    icon: "nyan",
    longname: "Nyancoin",
    description: "Nyancoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nyancoin/"
    },
    rank: "1458"
},{
    name: "bitstation",
    code: "BSTN",
    icon: "bstn",
    longname: "BitStation",
    description: "BitStation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitstation/"
    },
    rank: "1459"
},{
    name: "fastcoin",
    code: "FST",
    icon: "fst",
    longname: "Fastcoin",
    description: "Fastcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fastcoin/"
    },
    rank: "1460"
},{
    name: "vivo",
    code: "VIVO",
    icon: "vivo",
    longname: "VIVO",
    description: "VIVO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vivo/"
    },
    rank: "1461"
},{
    name: "emerald",
    code: "EMD",
    icon: "emd",
    longname: "Emerald Crypto",
    description: "Emerald Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emerald/"
    },
    rank: "1462"
},{
    name: "plancoin",
    code: "PLAN",
    icon: "plan",
    longname: "Plancoin",
    description: "Plancoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plancoin/"
    },
    rank: "1463"
},{
    name: "aced",
    code: "ACED",
    icon: "aced",
    longname: "AceD",
    description: "AceD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aced/"
    },
    rank: "1464"
},{
    name: "emphy",
    code: "EPY",
    icon: "epy",
    longname: "Emphy",
    description: "Emphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emphy/"
    },
    rank: "1465"
},{
    name: "cream",
    code: "CRM",
    icon: "crm",
    longname: "Cream",
    description: "Cream coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cream/"
    },
    rank: "1466"
},{
    name: "aricoin",
    code: "ARI",
    icon: "ari",
    longname: "Aricoin",
    description: "Aricoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aricoin/"
    },
    rank: "1467"
},{
    name: "iticoin",
    code: "ITI",
    icon: "iti",
    longname: "iTicoin",
    description: "iTicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iticoin/"
    },
    rank: "1468"
},{
    name: "bitstar",
    code: "BITS-2",
    icon: "bits-2",
    longname: "Bitstar",
    description: "Bitstar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitstar/"
    },
    rank: "1469"
},{
    name: "ethereum-gold",
    code: "ETG",
    icon: "etg",
    longname: "Ethereum Gold",
    description: "Ethereum Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-gold/"
    },
    rank: "1470"
},{
    name: "rpicoin",
    code: "RPI",
    icon: "rpi",
    longname: "RPICoin",
    description: "RPICoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rpicoin/"
    },
    rank: "1471"
},{
    name: "opcoinx",
    code: "OPCX",
    icon: "opcx",
    longname: "OPCoinX",
    description: "OPCoinX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opcoinx/"
    },
    rank: "1472"
},{
    name: "lanacoin",
    code: "LANA",
    icon: "lana",
    longname: "LanaCoin",
    description: "LanaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lanacoin/"
    },
    rank: "1473"
},{
    name: "bitcoin-adult",
    code: "BTAD",
    icon: "btad",
    longname: "Bitcoin Adult",
    description: "Bitcoin Adult coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-adult/"
    },
    rank: "1474"
},{
    name: "ratecoin",
    code: "XRA-1",
    icon: "xra-1",
    longname: "Ratecoin",
    description: "Ratecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ratecoin/"
    },
    rank: "1475"
},{
    name: "dietbitcoin",
    code: "DDX",
    icon: "ddx",
    longname: "dietbitcoin",
    description: "dietbitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dietbitcoin/"
    },
    rank: "1476"
},{
    name: "piplcoin",
    code: "PIPL",
    icon: "pipl",
    longname: "PiplCoin",
    description: "PiplCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piplcoin/"
    },
    rank: "1477"
},{
    name: "aquariuscoin",
    code: "ARCO",
    icon: "arco",
    longname: "AquariusCoin",
    description: "AquariusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aquariuscoin/"
    },
    rank: "1478"
},{
    name: "bata",
    code: "BTA",
    icon: "bta",
    longname: "Bata",
    description: "Bata coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bata/"
    },
    rank: "1479"
},{
    name: "blockmesh",
    code: "BMH",
    icon: "bmh",
    longname: "BlockMesh",
    description: "BlockMesh coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockmesh/"
    },
    rank: "1480"
},{
    name: "cashcoin",
    code: "CASH",
    icon: "cash",
    longname: "Cashcoin",
    description: "Cashcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashcoin/"
    },
    rank: "1481"
},{
    name: "crowdholding",
    code: "YUP",
    icon: "yup",
    longname: "Crowdholding",
    description: "Crowdholding coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowdholding/"
    },
    rank: "1482"
},{
    name: "netko",
    code: "NETKO",
    icon: "netko",
    longname: "Netko",
    description: "Netko coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/netko/"
    },
    rank: "1483"
},{
    name: "croat",
    code: "CROAT",
    icon: "croat",
    longname: "CROAT",
    description: "CROAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/croat/"
    },
    rank: "1484"
},{
    name: "privcy",
    code: "PRIV",
    icon: "priv",
    longname: "PRiVCY",
    description: "PRiVCY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/privcy/"
    },
    rank: "1485"
},{
    name: "britcoin",
    code: "BRIT",
    icon: "brit",
    longname: "BritCoin",
    description: "BritCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/britcoin/"
    },
    rank: "1486"
},{
    name: "chesscoin",
    code: "CHESS",
    icon: "chess",
    longname: "ChessCoin",
    description: "ChessCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chesscoin/"
    },
    rank: "1487"
},{
    name: "regalcoin",
    code: "REC",
    icon: "rec",
    longname: "Regalcoin",
    description: "Regalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/regalcoin/"
    },
    rank: "1488"
},{
    name: "bitcoin-w-spectrum",
    code: "BWS",
    icon: "bws",
    longname: "Bitcoin W Spectrum",
    description: "Bitcoin W Spectrum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-w-spectrum/"
    },
    rank: "1489"
},{
    name: "ccore",
    code: "CCO",
    icon: "cco",
    longname: "Ccore",
    description: "Ccore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ccore/"
    },
    rank: "1490"
},{
    name: "digiwage",
    code: "WAGE",
    icon: "wage",
    longname: "Digiwage",
    description: "Digiwage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digiwage/"
    },
    rank: "1491"
},{
    name: "litebar",
    code: "LTB",
    icon: "ltb",
    longname: "LiteBar",
    description: "LiteBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litebar/"
    },
    rank: "1492"
},{
    name: "grandcoin",
    code: "GDC",
    icon: "gdc",
    longname: "GrandCoin",
    description: "GrandCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grandcoin/"
    },
    rank: "1493"
},{
    name: "golfcoin",
    code: "GOLF",
    icon: "golf",
    longname: "Golfcoin",
    description: "Golfcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golfcoin/"
    },
    rank: "1494"
},{
    name: "bitdeal",
    code: "BDL",
    icon: "bdl",
    longname: "Bitdeal",
    description: "Bitdeal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdeal/"
    },
    rank: "1495"
},{
    name: "jin-coin",
    code: "JIN",
    icon: "jin",
    longname: "Jin Coin",
    description: "Jin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jin-coin/"
    },
    rank: "1496"
},{
    name: "swing",
    code: "SWING",
    icon: "swing",
    longname: "Swing",
    description: "Swing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swing/"
    },
    rank: "1497"
},{
    name: "graphcoin",
    code: "GRPH",
    icon: "grph",
    longname: "Graphcoin",
    description: "Graphcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/graphcoin/"
    },
    rank: "1498"
},{
    name: "onix",
    code: "ONX",
    icon: "onx",
    longname: "Onix",
    description: "Onix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/onix/"
    },
    rank: "1499"
},{
    name: "marscoin",
    code: "MARS",
    icon: "mars",
    longname: "Marscoin",
    description: "Marscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/marscoin/"
    },
    rank: "1500"
},{
    name: "shadow-token",
    code: "SHDW",
    icon: "shdw",
    longname: "Shadow Token",
    description: "Shadow Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shadow-token/"
    },
    rank: "1501"
},{
    name: "dystem",
    code: "DTEM",
    icon: "dtem",
    longname: "Dystem",
    description: "Dystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dystem/"
    },
    rank: "1502"
},{
    name: "adcoin",
    code: "ACC",
    icon: "acc",
    longname: "AdCoin",
    description: "AdCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adcoin/"
    },
    rank: "1503"
},{
    name: "altcoin-alt",
    code: "ALT-1",
    icon: "alt-1",
    longname: "Altcoin",
    description: "Altcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcoin-alt/"
    },
    rank: "1504"
},{
    name: "masternodecoin",
    code: "MTNC",
    icon: "mtnc",
    longname: "Masternodecoin",
    description: "Masternodecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masternodecoin/"
    },
    rank: "1505"
},{
    name: "tokyo",
    code: "TOKC",
    icon: "tokc",
    longname: "TOKYO",
    description: "TOKYO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokyo/"
    },
    rank: "1506"
},{
    name: "joincoin",
    code: "J",
    icon: "j",
    longname: "Joincoin",
    description: "Joincoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joincoin/"
    },
    rank: "1507"
},{
    name: "smartcoin",
    code: "SMC",
    icon: "smc",
    longname: "SmartCoin",
    description: "SmartCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcoin/"
    },
    rank: "1508"
},{
    name: "shekel",
    code: "JEW",
    icon: "jew",
    longname: "Shekel",
    description: "Shekel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shekel/"
    },
    rank: "1509"
},{
    name: "crystal-clear",
    code: "CCT",
    icon: "cct",
    longname: "Crystal Clear ",
    description: "Crystal Clear  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crystal-clear/"
    },
    rank: "1510"
},{
    name: "version",
    code: "V",
    icon: "v",
    longname: "Version",
    description: "Version coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/version/"
    },
    rank: "1511"
},{
    name: "halcyon",
    code: "HAL",
    icon: "hal",
    longname: "Halcyon",
    description: "Halcyon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halcyon/"
    },
    rank: "1512"
},{
    name: "bitcoinote",
    code: "BTCN",
    icon: "btcn",
    longname: "BitcoiNote",
    description: "BitcoiNote coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinote/"
    },
    rank: "1513"
},{
    name: "rimbit",
    code: "RBT",
    icon: "rbt",
    longname: "Rimbit",
    description: "Rimbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rimbit/"
    },
    rank: "1514"
},{
    name: "growers-international",
    code: "GRWI",
    icon: "grwi",
    longname: "Growers International",
    description: "Growers International coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/growers-international/"
    },
    rank: "1515"
},{
    name: "wild-crypto",
    code: "WILD",
    icon: "wild",
    longname: "Wild Crypto",
    description: "Wild Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wild-crypto/"
    },
    rank: "1516"
},{
    name: "fantasy-cash",
    code: "FANS",
    icon: "fans",
    longname: "Fantasy Cash",
    description: "Fantasy Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantasy-cash/"
    },
    rank: "1517"
},{
    name: "goldblocks",
    code: "GB",
    icon: "gb",
    longname: "GoldBlocks",
    description: "GoldBlocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldblocks/"
    },
    rank: "1518"
},{
    name: "rubies",
    code: "RBIES",
    icon: "rbies",
    longname: "Rubies",
    description: "Rubies coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubies/"
    },
    rank: "1519"
},{
    name: "darsek",
    code: "KED",
    icon: "ked",
    longname: "Darsek",
    description: "Darsek coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darsek/"
    },
    rank: "1520"
},{
    name: "bit20",
    code: "BTWTY",
    icon: "btwty",
    longname: "Bit20",
    description: "Bit20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit20/"
    },
    rank: "1521"
},{
    name: "purex",
    code: "PUREX",
    icon: "purex",
    longname: "Pure",
    description: "Pure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/purex/"
    },
    rank: "1522"
},{
    name: "bitcoin-red",
    code: "BTCRED",
    icon: "btcred",
    longname: "Bitcoin Red",
    description: "Bitcoin Red coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-red/"
    },
    rank: "1523"
},{
    name: "tekcoin",
    code: "TEK",
    icon: "tek",
    longname: "TEKcoin",
    description: "TEKcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tekcoin/"
    },
    rank: "1524"
},{
    name: "pascal-lite",
    code: "PASL",
    icon: "pasl",
    longname: "Pascal Lite",
    description: "Pascal Lite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pascal-lite/"
    },
    rank: "1525"
},{
    name: "votecoin",
    code: "VOT",
    icon: "vot",
    longname: "VoteCoin",
    description: "VoteCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/votecoin/"
    },
    rank: "1526"
},{
    name: "procurrency",
    code: "PROC",
    icon: "proc",
    longname: "ProCurrency",
    description: "ProCurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/procurrency/"
    },
    rank: "1527"
},{
    name: "atheios",
    code: "ATH",
    icon: "ath",
    longname: "Atheios",
    description: "Atheios coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atheios/"
    },
    rank: "1528"
},{
    name: "dragonglass",
    code: "DGS",
    icon: "dgs",
    longname: "Dragonglass",
    description: "Dragonglass coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragonglass/"
    },
    rank: "1529"
},{
    name: "coin",
    code: "CNO",
    icon: "cno",
    longname: "Coin(O)",
    description: "Coin(O) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin/"
    },
    rank: "1530"
},{
    name: "bitcoin-21",
    code: "XBTC21",
    icon: "xbtc21",
    longname: "Bitcoin 21",
    description: "Bitcoin 21 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-21/"
    },
    rank: "1531"
},{
    name: "bolivarcoin",
    code: "BOLI",
    icon: "boli",
    longname: "Bolivarcoin",
    description: "Bolivarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bolivarcoin/"
    },
    rank: "1532"
},{
    name: "honey",
    code: "HONEY",
    icon: "honey",
    longname: "Honey",
    description: "Honey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/honey/"
    },
    rank: "1533"
},{
    name: "arion",
    code: "ARION",
    icon: "arion",
    longname: "Arion",
    description: "Arion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arion/"
    },
    rank: "1534"
},{
    name: "senderon",
    code: "SDRN",
    icon: "sdrn",
    longname: "Senderon",
    description: "Senderon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/senderon/"
    },
    rank: "1535"
},{
    name: "pakcoin",
    code: "PAK",
    icon: "pak",
    longname: "Pakcoin",
    description: "Pakcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pakcoin/"
    },
    rank: "1536"
},{
    name: "titcoin",
    code: "TIT",
    icon: "tit",
    longname: "Titcoin",
    description: "Titcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/titcoin/"
    },
    rank: "1537"
},{
    name: "viuly",
    code: "VIU",
    icon: "viu",
    longname: "Viuly",
    description: "Viuly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viuly/"
    },
    rank: "1538"
},{
    name: "iqcash",
    code: "IQ-1",
    icon: "iq-1",
    longname: "IQ.cash",
    description: "IQ.cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iqcash/"
    },
    rank: "1539"
},{
    name: "carebit",
    code: "CARE",
    icon: "care",
    longname: "Carebit",
    description: "Carebit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carebit/"
    },
    rank: "1540"
},{
    name: "commercium",
    code: "CMM",
    icon: "cmm",
    longname: "Commercium",
    description: "Commercium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commercium/"
    },
    rank: "1541"
},{
    name: "ico-openledger",
    code: "ICOO",
    icon: "icoo",
    longname: "ICO OpenLedger",
    description: "ICO OpenLedger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ico-openledger/"
    },
    rank: "1542"
},{
    name: "ultimate-secure-cash",
    code: "USC",
    icon: "usc",
    longname: "Ultimate Secure Cash",
    description: "Ultimate Secure Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultimate-secure-cash/"
    },
    rank: "1543"
},{
    name: "minereum",
    code: "MNE",
    icon: "mne",
    longname: "Minereum",
    description: "Minereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minereum/"
    },
    rank: "1544"
},{
    name: "blazecoin",
    code: "BLZ-1",
    icon: "blz-1",
    longname: "BlazeCoin",
    description: "BlazeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blazecoin/"
    },
    rank: "1545"
},{
    name: "ibtc",
    code: "IBTC",
    icon: "ibtc",
    longname: "iBTC",
    description: "iBTC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ibtc/"
    },
    rank: "1546"
},{
    name: "impact",
    code: "IMX",
    icon: "imx",
    longname: "Impact",
    description: "Impact coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/impact/"
    },
    rank: "1547"
},{
    name: "tokugawa",
    code: "TOK",
    icon: "tok",
    longname: "Tokugawa",
    description: "Tokugawa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokugawa/"
    },
    rank: "1548"
},{
    name: "purevidz",
    code: "VIDZ",
    icon: "vidz",
    longname: "PureVidz",
    description: "PureVidz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/purevidz/"
    },
    rank: "1549"
},{
    name: "irishcoin",
    code: "IRL",
    icon: "irl",
    longname: "IrishCoin",
    description: "IrishCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/irishcoin/"
    },
    rank: "1550"
},{
    name: "arepacoin",
    code: "AREPA",
    icon: "arepa",
    longname: "Arepacoin",
    description: "Arepacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arepacoin/"
    },
    rank: "1551"
},{
    name: "leviar",
    code: "XLC",
    icon: "xlc",
    longname: "Leviar",
    description: "Leviar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leviar/"
    },
    rank: "1552"
},{
    name: "globaltoken",
    code: "GLT",
    icon: "glt",
    longname: "GlobalToken",
    description: "GlobalToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globaltoken/"
    },
    rank: "1553"
},{
    name: "printex",
    code: "PRTX",
    icon: "prtx",
    longname: "Printex",
    description: "Printex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/printex/"
    },
    rank: "1554"
},{
    name: "signatum",
    code: "SIGT",
    icon: "sigt",
    longname: "Signatum",
    description: "Signatum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signatum/"
    },
    rank: "1555"
},{
    name: "help-the-homeless-coin",
    code: "HTH",
    icon: "hth",
    longname: "Help The Homeless Coin",
    description: "Help The Homeless Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/help-the-homeless-coin/"
    },
    rank: "1556"
},{
    name: "escroco-emerald",
    code: "ESCE",
    icon: "esce",
    longname: "Escroco Emerald",
    description: "Escroco Emerald coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/escroco-emerald/"
    },
    rank: "1557"
},{
    name: "embers",
    code: "MBRS",
    icon: "mbrs",
    longname: "Embers",
    description: "Embers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/embers/"
    },
    rank: "1558"
},{
    name: "mincoin",
    code: "MNC",
    icon: "mnc",
    longname: "Mincoin",
    description: "Mincoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mincoin/"
    },
    rank: "1559"
},{
    name: "zurcoin",
    code: "ZUR",
    icon: "zur",
    longname: "Zurcoin",
    description: "Zurcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zurcoin/"
    },
    rank: "1560"
},{
    name: "bigup",
    code: "BIGUP",
    icon: "bigup",
    longname: "BigUp",
    description: "BigUp coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bigup/"
    },
    rank: "1561"
},{
    name: "sakecoin",
    code: "SAKE",
    icon: "sake",
    longname: "SAKECOIN",
    description: "SAKECOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sakecoin/"
    },
    rank: "1562"
},{
    name: "zoomba",
    code: "ZBA",
    icon: "zba",
    longname: "Zoomba",
    description: "Zoomba coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zoomba/"
    },
    rank: "1563"
},{
    name: "doubloon",
    code: "BOAT",
    icon: "boat",
    longname: "BOAT",
    description: "BOAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/doubloon/"
    },
    rank: "1564"
},{
    name: "300-token",
    code: "300",
    icon: "300",
    longname: "300 Token",
    description: "300 Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/300-token/"
    },
    rank: "1565"
},{
    name: "safe-trade-coin",
    code: "XSTC",
    icon: "xstc",
    longname: "Safe Trade Coin",
    description: "Safe Trade Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safe-trade-coin/"
    },
    rank: "1566"
},{
    name: "guccionecoin",
    code: "GCC-1",
    icon: "gcc-1",
    longname: "GuccioneCoin",
    description: "GuccioneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guccionecoin/"
    },
    rank: "1567"
},{
    name: "thunderstake",
    code: "TSC",
    icon: "tsc",
    longname: "Thunderstake",
    description: "Thunderstake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thunderstake/"
    },
    rank: "1568"
},{
    name: "boostcoin",
    code: "BOST",
    icon: "bost",
    longname: "BoostCoin",
    description: "BoostCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boostcoin/"
    },
    rank: "1569"
},{
    name: "ethbet",
    code: "EBET",
    icon: "ebet",
    longname: "EthBet",
    description: "EthBet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethbet/"
    },
    rank: "1570"
},{
    name: "quatloo",
    code: "QTL",
    icon: "qtl",
    longname: "Quatloo",
    description: "Quatloo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quatloo/"
    },
    rank: "1571"
},{
    name: "berncash",
    code: "BERN",
    icon: "bern",
    longname: "BERNcash",
    description: "BERNcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/berncash/"
    },
    rank: "1572"
},{
    name: "ethereum-dark",
    code: "ETHD",
    icon: "ethd",
    longname: "Ethereum Dark",
    description: "Ethereum Dark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-dark/"
    },
    rank: "1573"
},{
    name: "revolvercoin",
    code: "XRE",
    icon: "xre",
    longname: "RevolverCoin",
    description: "RevolverCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revolvercoin/"
    },
    rank: "1574"
},{
    name: "folmcoin",
    code: "FLM",
    icon: "flm",
    longname: "FolmCoin",
    description: "FolmCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/folmcoin/"
    },
    rank: "1575"
},{
    name: "steepcoin",
    code: "STEEP",
    icon: "steep",
    longname: "SteepCoin",
    description: "SteepCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steepcoin/"
    },
    rank: "1576"
},{
    name: "creditbit",
    code: "CRB",
    icon: "crb",
    longname: "Creditbit",
    description: "Creditbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creditbit/"
    },
    rank: "1577"
},{
    name: "secretcoin",
    code: "SCRT",
    icon: "scrt",
    longname: "SecretCoin",
    description: "SecretCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/secretcoin/"
    },
    rank: "1578"
},{
    name: "dix-asset",
    code: "DIX",
    icon: "dix",
    longname: "Dix Asset",
    description: "Dix Asset coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dix-asset/"
    },
    rank: "1579"
},{
    name: "parkbyte",
    code: "PKB",
    icon: "pkb",
    longname: "ParkByte",
    description: "ParkByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkbyte/"
    },
    rank: "1580"
},{
    name: "deuscoin",
    code: "DEUS",
    icon: "deus",
    longname: "DeusCoin",
    description: "DeusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deuscoin/"
    },
    rank: "1581"
},{
    name: "coin2-1",
    code: "C2",
    icon: "c2",
    longname: "Coin2.1",
    description: "Coin2.1 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin2-1/"
    },
    rank: "1582"
},{
    name: "evil-coin",
    code: "EVIL",
    icon: "evil",
    longname: "Evil Coin",
    description: "Evil Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evil-coin/"
    },
    rank: "1583"
},{
    name: "globalboost-y",
    code: "BSTY",
    icon: "bsty",
    longname: "GlobalBoost-Y",
    description: "GlobalBoost-Y coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globalboost-y/"
    },
    rank: "1584"
},{
    name: "redcoin",
    code: "RED-1",
    icon: "red-1",
    longname: "RedCoin",
    description: "RedCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/redcoin/"
    },
    rank: "1585"
},{
    name: "droxne",
    code: "DRXNE",
    icon: "drxne",
    longname: "DROXNE",
    description: "DROXNE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/droxne/"
    },
    rank: "1586"
},{
    name: "x-coin",
    code: "XCO",
    icon: "xco",
    longname: "X-Coin",
    description: "X-Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x-coin/"
    },
    rank: "1587"
},{
    name: "flik",
    code: "FLIK",
    icon: "flik",
    longname: "FLiK",
    description: "FLiK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flik/"
    },
    rank: "1588"
},{
    name: "cryptojacks",
    code: "CJ",
    icon: "cj",
    longname: "Cryptojacks",
    description: "Cryptojacks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptojacks/"
    },
    rank: "1589"
},{
    name: "nevacoin",
    code: "NEVA",
    icon: "neva",
    longname: "NevaCoin",
    description: "NevaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nevacoin/"
    },
    rank: "1590"
},{
    name: "kurrent",
    code: "KURT",
    icon: "kurt",
    longname: "Kurrent",
    description: "Kurrent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kurrent/"
    },
    rank: "1591"
},{
    name: "securecoin",
    code: "SRC",
    icon: "src",
    longname: "SecureCoin",
    description: "SecureCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/securecoin/"
    },
    rank: "1592"
},{
    name: "sixeleven",
    code: "611",
    icon: "611",
    longname: "SixEleven",
    description: "SixEleven coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sixeleven/"
    },
    rank: "1593"
},{
    name: "garlicoin",
    code: "GRLC",
    icon: "grlc",
    longname: "Garlicoin",
    description: "Garlicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/garlicoin/"
    },
    rank: "1594"
},{
    name: "digital-money-bits",
    code: "DMB",
    icon: "dmb",
    longname: "Digital Money Bits",
    description: "Digital Money Bits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-money-bits/"
    },
    rank: "1595"
},{
    name: "mojocoin",
    code: "MOJO",
    icon: "mojo",
    longname: "MojoCoin",
    description: "MojoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mojocoin/"
    },
    rank: "1596"
},{
    name: "pluracoin",
    code: "PLURA",
    icon: "plura",
    longname: "PluraCoin",
    description: "PluraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluracoin/"
    },
    rank: "1597"
},{
    name: "smartfox",
    code: "FOX",
    icon: "fox",
    longname: "SmartFox",
    description: "SmartFox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartfox/"
    },
    rank: "1598"
},{
    name: "bank-coin",
    code: "BANK",
    icon: "bank",
    longname: "Bank Coin",
    description: "Bank Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bank-coin/"
    },
    rank: "1599"
},{
    name: "dollarcoin",
    code: "DLC",
    icon: "dlc",
    longname: "Dollarcoin",
    description: "Dollarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dollarcoin/"
    },
    rank: "1600"
},{
    name: "atomic-coin",
    code: "ATOM",
    icon: "atom",
    longname: "Atomic Coin",
    description: "Atomic Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atomic-coin/"
    },
    rank: "1601"
},{
    name: "datacoin",
    code: "DTC",
    icon: "dtc",
    longname: "Datacoin",
    description: "Datacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datacoin/"
    },
    rank: "1602"
},{
    name: "master-swiscoin",
    code: "MSCN",
    icon: "mscn",
    longname: "Master Swiscoin",
    description: "Master Swiscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/master-swiscoin/"
    },
    rank: "1603"
},{
    name: "neuro",
    code: "NRO",
    icon: "nro",
    longname: "Neuro",
    description: "Neuro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neuro/"
    },
    rank: "1604"
},{
    name: "rhenium",
    code: "XRH",
    icon: "xrh",
    longname: "Rhenium",
    description: "Rhenium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rhenium/"
    },
    rank: "1605"
},{
    name: "fintab",
    code: "FNTB",
    icon: "fntb",
    longname: "Fintab",
    description: "Fintab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fintab/"
    },
    rank: "1606"
},{
    name: "ronpaulcoin",
    code: "RPC",
    icon: "rpc",
    longname: "RonPaulCoin",
    description: "RonPaulCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ronpaulcoin/"
    },
    rank: "1607"
},{
    name: "allion",
    code: "ALL",
    icon: "all",
    longname: "Allion",
    description: "Allion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/allion/"
    },
    rank: "1608"
},{
    name: "qurito",
    code: "QURO",
    icon: "quro",
    longname: "Qurito",
    description: "Qurito coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qurito/"
    },
    rank: "1609"
},{
    name: "eaglex",
    code: "EGX",
    icon: "egx",
    longname: "EagleX",
    description: "EagleX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eaglex/"
    },
    rank: "1610"
},{
    name: "indinode",
    code: "XIND",
    icon: "xind",
    longname: "INDINODE",
    description: "INDINODE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indinode/"
    },
    rank: "1611"
},{
    name: "brokernekonetwork",
    code: "BNN",
    icon: "bnn",
    longname: "BrokerNekoNetwork",
    description: "BrokerNekoNetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brokernekonetwork/"
    },
    rank: "1612"
},{
    name: "sparks",
    code: "SPK",
    icon: "spk",
    longname: "Sparks",
    description: "Sparks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sparks/"
    },
    rank: "1613"
},{
    name: "8bit",
    code: "8BIT",
    icon: "8bit",
    longname: "8Bit",
    description: "8Bit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/8bit/"
    },
    rank: "1614"
},{
    name: "trident",
    code: "TRDT",
    icon: "trdt",
    longname: "Trident Group",
    description: "Trident Group coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trident/"
    },
    rank: "1615"
},{
    name: "nitro",
    code: "NOX",
    icon: "nox",
    longname: "Nitro",
    description: "Nitro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nitro/"
    },
    rank: "1616"
},{
    name: "quebecoin",
    code: "QBC",
    icon: "qbc",
    longname: "Quebecoin",
    description: "Quebecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quebecoin/"
    },
    rank: "1617"
},{
    name: "eternity",
    code: "ENT",
    icon: "ent",
    longname: "Eternity",
    description: "Eternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eternity/"
    },
    rank: "1618"
},{
    name: "harvest-masternode-coin",
    code: "HC-1",
    icon: "hc-1",
    longname: "Harvest Masternode Coin",
    description: "Harvest Masternode Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/harvest-masternode-coin/"
    },
    rank: "1619"
},{
    name: "centurion",
    code: "CNT",
    icon: "cnt",
    longname: "Centurion",
    description: "Centurion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centurion/"
    },
    rank: "1620"
},{
    name: "cheesecoin",
    code: "CHEESE",
    icon: "cheese",
    longname: "Cheesecoin",
    description: "Cheesecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cheesecoin/"
    },
    rank: "1621"
},{
    name: "accelerator-network",
    code: "ACC-1",
    icon: "acc-1",
    longname: "Accelerator Network",
    description: "Accelerator Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/accelerator-network/"
    },
    rank: "1622"
},{
    name: "acoin",
    code: "ACOIN",
    icon: "acoin",
    longname: "Acoin",
    description: "Acoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acoin/"
    },
    rank: "1623"
},{
    name: "surety",
    code: "SURE",
    icon: "sure",
    longname: "SURETY",
    description: "SURETY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/surety/"
    },
    rank: "1624"
},{
    name: "acre",
    code: "ACRE",
    icon: "acre",
    longname: "ACRE",
    description: "ACRE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acre/"
    },
    rank: "1625"
},{
    name: "dreamcoin",
    code: "DRM",
    icon: "drm",
    longname: "Dreamcoin",
    description: "Dreamcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dreamcoin/"
    },
    rank: "1626"
},{
    name: "vector",
    code: "VEC2",
    icon: "vec2",
    longname: "VectorAI",
    description: "VectorAI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vector/"
    },
    rank: "1627"
},{
    name: "coinonatx",
    code: "XCXT",
    icon: "xcxt",
    longname: "CoinonatX",
    description: "CoinonatX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonatx/"
    },
    rank: "1628"
},{
    name: "postoken",
    code: "POS",
    icon: "pos",
    longname: "PoSToken",
    description: "PoSToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/postoken/"
    },
    rank: "1629"
},{
    name: "qbic",
    code: "QBIC",
    icon: "qbic",
    longname: "Qbic",
    description: "Qbic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbic/"
    },
    rank: "1630"
},{
    name: "gamblecoin",
    code: "GMCN",
    icon: "gmcn",
    longname: "GambleCoin",
    description: "GambleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamblecoin/"
    },
    rank: "1631"
},{
    name: "geysercoin",
    code: "GSR",
    icon: "gsr",
    longname: "GeyserCoin",
    description: "GeyserCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/geysercoin/"
    },
    rank: "1632"
},{
    name: "sooncoin",
    code: "SOON",
    icon: "soon",
    longname: "SoonCoin",
    description: "SoonCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sooncoin/"
    },
    rank: "1633"
},{
    name: "tajcoin",
    code: "TAJ",
    icon: "taj",
    longname: "TajCoin",
    description: "TajCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tajcoin/"
    },
    rank: "1634"
},{
    name: "c-bit",
    code: "XCT",
    icon: "xct",
    longname: "C-Bit",
    description: "C-Bit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/c-bit/"
    },
    rank: "1635"
},{
    name: "homeblockcoin",
    code: "HBC",
    icon: "hbc",
    longname: "HomeBlockCoin",
    description: "HomeBlockCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/homeblockcoin/"
    },
    rank: "1636"
},{
    name: "zozocoin",
    code: "ZZC",
    icon: "zzc",
    longname: "ZoZoCoin",
    description: "ZoZoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zozocoin/"
    },
    rank: "1637"
},{
    name: "connectjob",
    code: "CJT",
    icon: "cjt",
    longname: "ConnectJob",
    description: "ConnectJob coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/connectjob/"
    },
    rank: "1638"
},{
    name: "compucoin",
    code: "CPN",
    icon: "cpn",
    longname: "CompuCoin",
    description: "CompuCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/compucoin/"
    },
    rank: "1639"
},{
    name: "postcoin",
    code: "POST",
    icon: "post",
    longname: "PostCoin",
    description: "PostCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/postcoin/"
    },
    rank: "1640"
},{
    name: "bitcoin-one",
    code: "BTCONE",
    icon: "btcone",
    longname: "BitCoin One",
    description: "BitCoin One coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-one/"
    },
    rank: "1641"
},{
    name: "independent-money-system",
    code: "IMS",
    icon: "ims",
    longname: "Independent Money System",
    description: "Independent Money System coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/independent-money-system/"
    },
    rank: "1642"
},{
    name: "theresa-may-coin",
    code: "MAY",
    icon: "may",
    longname: "Theresa May Coin",
    description: "Theresa May Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/theresa-may-coin/"
    },
    rank: "1643"
},{
    name: "kingn-coin",
    code: "KNC-1",
    icon: "knc-1",
    longname: "KingN Coin",
    description: "KingN Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kingn-coin/"
    },
    rank: "1644"
},{
    name: "eurocoin",
    code: "EUC",
    icon: "euc",
    longname: "Eurocoin",
    description: "Eurocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eurocoin/"
    },
    rank: "1645"
},{
    name: "bitcoal",
    code: "COAL",
    icon: "coal",
    longname: "BitCoal",
    description: "BitCoal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoal/"
    },
    rank: "1646"
},{
    name: "archetypal-network",
    code: "ACTP",
    icon: "actp",
    longname: "Archetypal Network",
    description: "Archetypal Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/archetypal-network/"
    },
    rank: "1647"
},{
    name: "trackr",
    code: "TKR",
    icon: "tkr",
    longname: "CryptoInsight",
    description: "CryptoInsight coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trackr/"
    },
    rank: "1648"
},{
    name: "high-voltage",
    code: "HVCO",
    icon: "hvco",
    longname: "High Voltage",
    description: "High Voltage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/high-voltage/"
    },
    rank: "1649"
},{
    name: "zayedcoin",
    code: "ZYD",
    icon: "zyd",
    longname: "Zayedcoin",
    description: "Zayedcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zayedcoin/"
    },
    rank: "1650"
},{
    name: "uralscoin",
    code: "URALS",
    icon: "urals",
    longname: "UralsCoin",
    description: "UralsCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uralscoin/"
    },
    rank: "1651"
},{
    name: "flaxscript",
    code: "FLAX",
    icon: "flax",
    longname: "Flaxscript",
    description: "Flaxscript coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flaxscript/"
    },
    rank: "1652"
},{
    name: "posex",
    code: "PEX",
    icon: "pex",
    longname: "PosEx",
    description: "PosEx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/posex/"
    },
    rank: "1653"
},{
    name: "qvolta",
    code: "QVT",
    icon: "qvt",
    longname: "Qvolta",
    description: "Qvolta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qvolta/"
    },
    rank: "1654"
},{
    name: "comet",
    code: "CMT-1",
    icon: "cmt-1",
    longname: "Comet",
    description: "Comet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comet/"
    },
    rank: "1655"
},{
    name: "javascript-token",
    code: "JS",
    icon: "js",
    longname: "JavaScript Token",
    description: "JavaScript Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/javascript-token/"
    },
    rank: "1656"
},{
    name: "cannation",
    code: "CNNC",
    icon: "cnnc",
    longname: "Cannation",
    description: "Cannation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannation/"
    },
    rank: "1657"
},{
    name: "cabbage",
    code: "CAB",
    icon: "cab",
    longname: "Cabbage",
    description: "Cabbage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cabbage/"
    },
    rank: "1658"
},{
    name: "soilcoin",
    code: "SOIL",
    icon: "soil",
    longname: "SOILcoin",
    description: "SOILcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soilcoin/"
    },
    rank: "1659"
},{
    name: "litecred",
    code: "LTCR",
    icon: "ltcr",
    longname: "Litecred",
    description: "Litecred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecred/"
    },
    rank: "1660"
},{
    name: "jiyo",
    code: "JIYOX",
    icon: "jiyox",
    longname: "JIYO",
    description: "JIYO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jiyo/"
    },
    rank: "1661"
},{
    name: "amsterdamcoin",
    code: "AMS",
    icon: "ams",
    longname: "AmsterdamCoin",
    description: "AmsterdamCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amsterdamcoin/"
    },
    rank: "1662"
},{
    name: "bankcoin",
    code: "B@",
    icon: "b@",
    longname: "Bankcoin",
    description: "Bankcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bankcoin/"
    },
    rank: "1663"
},{
    name: "ammo-reloaded",
    code: "AMMO",
    icon: "ammo",
    longname: "Ammo Reloaded",
    description: "Ammo Reloaded coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ammo-reloaded/"
    },
    rank: "1664"
},{
    name: "fuzzballs",
    code: "FUZZ",
    icon: "fuzz",
    longname: "FuzzBalls",
    description: "FuzzBalls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fuzzballs/"
    },
    rank: "1665"
},{
    name: "elysium",
    code: "ELS",
    icon: "els",
    longname: "Elysium",
    description: "Elysium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elysium/"
    },
    rank: "1666"
},{
    name: "phantomx",
    code: "PNX",
    icon: "pnx",
    longname: "Phantomx",
    description: "Phantomx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phantomx/"
    },
    rank: "1667"
},{
    name: "bumbacoin",
    code: "BUMBA",
    icon: "bumba",
    longname: "BumbaCoin",
    description: "BumbaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bumbacoin/"
    },
    rank: "1668"
},{
    name: "nekonium",
    code: "NUKO",
    icon: "nuko",
    longname: "Nekonium",
    description: "Nekonium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nekonium/"
    },
    rank: "1669"
},{
    name: "speedcash",
    code: "SCS",
    icon: "scs",
    longname: "SpeedCash",
    description: "SpeedCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speedcash/"
    },
    rank: "1670"
},{
    name: "eryllium",
    code: "ERY",
    icon: "ery",
    longname: "Eryllium",
    description: "Eryllium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eryllium/"
    },
    rank: "1671"
},{
    name: "californium",
    code: "CF",
    icon: "cf",
    longname: "Californium",
    description: "Californium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/californium/"
    },
    rank: "1672"
},{
    name: "marijuanacoin",
    code: "MAR",
    icon: "mar",
    longname: "Marijuanacoin",
    description: "Marijuanacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/marijuanacoin/"
    },
    rank: "1673"
},{
    name: "bitquark",
    code: "BTQ",
    icon: "btq",
    longname: "BitQuark",
    description: "BitQuark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitquark/"
    },
    rank: "1674"
},{
    name: "polcoin",
    code: "PLC",
    icon: "plc",
    longname: "Polcoin",
    description: "Polcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polcoin/"
    },
    rank: "1675"
},{
    name: "kubera-coin",
    code: "KBR",
    icon: "kbr",
    longname: "Kubera Coin",
    description: "Kubera Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kubera-coin/"
    },
    rank: "1676"
},{
    name: "iconic",
    code: "ICON",
    icon: "icon",
    longname: "Iconic",
    description: "Iconic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconic/"
    },
    rank: "1677"
},{
    name: "kronecoin",
    code: "KRONE",
    icon: "krone",
    longname: "Kronecoin",
    description: "Kronecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kronecoin/"
    },
    rank: "1678"
},{
    name: "icobid",
    code: "ICOB",
    icon: "icob",
    longname: "ICOBID",
    description: "ICOBID coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icobid/"
    },
    rank: "1679"
},{
    name: "ragnarok",
    code: "RAGNA",
    icon: "ragna",
    longname: "Ragnarok",
    description: "Ragnarok coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ragnarok/"
    },
    rank: "1680"
},{
    name: "pioneer-coin",
    code: "PCOIN",
    icon: "pcoin",
    longname: "Pioneer Coin",
    description: "Pioneer Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pioneer-coin/"
    },
    rank: "1681"
},{
    name: "bitcoin-planet",
    code: "BTPL",
    icon: "btpl",
    longname: "Bitcoin Planet",
    description: "Bitcoin Planet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-planet/"
    },
    rank: "1682"
},{
    name: "ibank",
    code: "IBANK",
    icon: "ibank",
    longname: "iBank",
    description: "iBank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ibank/"
    },
    rank: "1683"
},{
    name: "asiadigicoin",
    code: "ADCN",
    icon: "adcn",
    longname: "Asiadigicoin",
    description: "Asiadigicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiadigicoin/"
    },
    rank: "1684"
},{
    name: "staker",
    code: "STR",
    icon: "str",
    longname: "Staker",
    description: "Staker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/staker/"
    },
    rank: "1685"
},{
    name: "socialcoin-socc",
    code: "SOCC",
    icon: "socc",
    longname: "SocialCoin",
    description: "SocialCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/socialcoin-socc/"
    },
    rank: "1686"
},{
    name: "brat",
    code: "BRAT",
    icon: "brat",
    longname: "BROTHER",
    description: "BROTHER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brat/"
    },
    rank: "1687"
},{
    name: "milocoin",
    code: "MILO",
    icon: "milo",
    longname: "MiloCoin",
    description: "MiloCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/milocoin/"
    },
    rank: "1688"
},{
    name: "coupecoin",
    code: "COUPE",
    icon: "coupe",
    longname: "Coupecoin",
    description: "Coupecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coupecoin/"
    },
    rank: "1689"
},{
    name: "dalecoin",
    code: "DALC",
    icon: "dalc",
    longname: "Dalecoin",
    description: "Dalecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dalecoin/"
    },
    rank: "1690"
},{
    name: "grimcoin",
    code: "GRIM",
    icon: "grim",
    longname: "Grimcoin",
    description: "Grimcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grimcoin/"
    },
    rank: "1691"
},{
    name: "olympic",
    code: "OLMP",
    icon: "olmp",
    longname: "Olympic",
    description: "Olympic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/olympic/"
    },
    rank: "1692"
},{
    name: "virtacoin",
    code: "VTA",
    icon: "vta",
    longname: "Virtacoin",
    description: "Virtacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virtacoin/"
    },
    rank: "1693"
},{
    name: "mustangcoin",
    code: "MST",
    icon: "mst",
    longname: "MustangCoin",
    description: "MustangCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mustangcoin/"
    },
    rank: "1694"
},{
    name: "bitf",
    code: "BITF",
    icon: "bitf",
    longname: "BitF",
    description: "BitF coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitf/"
    },
    rank: "1695"
},{
    name: "prime-xi",
    code: "PXI",
    icon: "pxi",
    longname: "Prime-XI",
    description: "Prime-XI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prime-xi/"
    },
    rank: "1696"
},{
    name: "fujinto",
    code: "NTO",
    icon: "nto",
    longname: "Fujinto",
    description: "Fujinto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fujinto/"
    },
    rank: "1697"
},{
    name: "plncoin",
    code: "PLNC",
    icon: "plnc",
    longname: "PLNcoin",
    description: "PLNcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plncoin/"
    },
    rank: "1698"
},{
    name: "jiyo-old",
    code: "JIYO",
    icon: "jiyo",
    longname: "Jiyo [OLD]",
    description: "Jiyo [OLD] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jiyo-old/"
    },
    rank: "1699"
},{
    name: "ecocoin",
    code: "ECO",
    icon: "eco",
    longname: "EcoCoin",
    description: "EcoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecocoin/"
    },
    rank: "1700"
},{
    name: "alpha-coin",
    code: "APC",
    icon: "apc",
    longname: "Alpha Coin",
    description: "Alpha Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alpha-coin/"
    },
    rank: "1701"
},{
    name: "bowscoin",
    code: "BSC",
    icon: "bsc",
    longname: "BowsCoin",
    description: "BowsCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bowscoin/"
    },
    rank: "1702"
},{
    name: "bitvolt",
    code: "VOLT",
    icon: "volt",
    longname: "Bitvolt",
    description: "Bitvolt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitvolt/"
    },
    rank: "1703"
},{
    name: "anarchistsprime",
    code: "ACP",
    icon: "acp",
    longname: "AnarchistsPrime",
    description: "AnarchistsPrime coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anarchistsprime/"
    },
    rank: "1704"
},{
    name: "arbit",
    code: "ARB-1",
    icon: "arb-1",
    longname: "ARbit",
    description: "ARbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbit/"
    },
    rank: "1705"
},{
    name: "luna-coin",
    code: "LUNA",
    icon: "luna",
    longname: "Luna Coin",
    description: "Luna Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luna-coin/"
    },
    rank: "1706"
},{
    name: "playercoin",
    code: "PLACO",
    icon: "placo",
    longname: "PlayerCoin",
    description: "PlayerCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playercoin/"
    },
    rank: "1707"
},{
    name: "royal-kingdom-coin",
    code: "RKC-1",
    icon: "rkc-1",
    longname: "Royal Kingdom Coin",
    description: "Royal Kingdom Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/royal-kingdom-coin/"
    },
    rank: "1708"
},{
    name: "coimatic-2",
    code: "CTIC2",
    icon: "ctic2",
    longname: "Coimatic 2.0",
    description: "Coimatic 2.0 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coimatic-2/"
    },
    rank: "1709"
},{
    name: "dollar-online",
    code: "DOLLAR",
    icon: "dollar",
    longname: "Dollar Online",
    description: "Dollar Online coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dollar-online/"
    },
    rank: "1710"
},{
    name: "litecoin-ultra",
    code: "LTCU",
    icon: "ltcu",
    longname: "LiteCoin Ultra",
    description: "LiteCoin Ultra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-ultra/"
    },
    rank: "1711"
},{
    name: "benjirolls",
    code: "BENJI",
    icon: "benji",
    longname: "BenjiRolls",
    description: "BenjiRolls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/benjirolls/"
    },
    rank: "1712"
},{
    name: "wild-beast-block",
    code: "WBB",
    icon: "wbb",
    longname: "Wild Beast Block",
    description: "Wild Beast Block coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wild-beast-block/"
    },
    rank: "1713"
},{
    name: "rocketcoin",
    code: "ROCK",
    icon: "rock",
    longname: "Rocketcoin",
    description: "Rocketcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rocketcoin/"
    },
    rank: "1714"
},{
    name: "simmitri",
    code: "SIM",
    icon: "sim",
    longname: "Simmitri",
    description: "Simmitri coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/simmitri/"
    },
    rank: "1715"
},{
    name: "veltor",
    code: "VLT",
    icon: "vlt",
    longname: "Veltor",
    description: "Veltor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veltor/"
    },
    rank: "1716"
},{
    name: "concoin",
    code: "CONX",
    icon: "conx",
    longname: "Concoin",
    description: "Concoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/concoin/"
    },
    rank: "1717"
},{
    name: "songcoin",
    code: "SONG",
    icon: "song",
    longname: "SongCoin",
    description: "SongCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/songcoin/"
    },
    rank: "1718"
},{
    name: "geertcoin",
    code: "GEERT",
    icon: "geert",
    longname: "GeertCoin",
    description: "GeertCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/geertcoin/"
    },
    rank: "1719"
},{
    name: "ourcoin",
    code: "OUR",
    icon: "our",
    longname: "Ourcoin",
    description: "Ourcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ourcoin/"
    },
    rank: "1720"
},{
    name: "coinonat",
    code: "CXT",
    icon: "cxt",
    longname: "Coinonat",
    description: "Coinonat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonat/"
    },
    rank: "1721"
},{
    name: "benz",
    code: "BENZ",
    icon: "benz",
    longname: "Benz",
    description: "Benz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/benz/"
    },
    rank: "1722"
},{
    name: "save-and-gain",
    code: "SANDG",
    icon: "sandg",
    longname: "Save and Gain",
    description: "Save and Gain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/save-and-gain/"
    },
    rank: "1723"
},{
    name: "vaperscoin",
    code: "VPRC",
    icon: "vprc",
    longname: "VapersCoin",
    description: "VapersCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vaperscoin/"
    },
    rank: "1724"
},{
    name: "project-x",
    code: "NANOX",
    icon: "nanox",
    longname: "Project-X",
    description: "Project-X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-x/"
    },
    rank: "1725"
},{
    name: "bitspace",
    code: "BSX",
    icon: "bsx",
    longname: "Bitspace",
    description: "Bitspace coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitspace/"
    },
    rank: "1726"
},{
    name: "ponzicoin",
    code: "PONZI",
    icon: "ponzi",
    longname: "PonziCoin",
    description: "PonziCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ponzicoin/"
    },
    rank: "1727"
},{
    name: "interzone",
    code: "ITZ",
    icon: "itz",
    longname: "Interzone",
    description: "Interzone coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/interzone/"
    },
    rank: "1728"
},{
    name: "coimatic-3",
    code: "CTIC3",
    icon: "ctic3",
    longname: "Coimatic 3.0",
    description: "Coimatic 3.0 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coimatic-3/"
    },
    rank: "1729"
},{
    name: "magnum",
    code: "MGM",
    icon: "mgm",
    longname: "Magnum",
    description: "Magnum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magnum/"
    },
    rank: "1730"
},{
    name: "argus",
    code: "ARGUS",
    icon: "argus",
    longname: "Argus",
    description: "Argus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/argus/"
    },
    rank: "1731"
},{
    name: "shade-token",
    code: "SHADE",
    icon: "shade",
    longname: "SHADE Token",
    description: "SHADE Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shade-token/"
    },
    rank: "1732"
},{
    name: "cjs",
    code: "CJS",
    icon: "cjs",
    longname: "CJs",
    description: "CJs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cjs/"
    },
    rank: "1733"
},{
    name: "poly-ai",
    code: "AI",
    icon: "ai",
    longname: "POLY AI",
    description: "POLY AI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poly-ai/"
    },
    rank: "1734"
},{
    name: "harmonycoin-hmc",
    code: "HMC-1",
    icon: "hmc-1",
    longname: "HarmonyCoin",
    description: "HarmonyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/harmonycoin-hmc/"
    },
    rank: "1735"
},{
    name: "yenten",
    code: "YTN",
    icon: "ytn",
    longname: "YENTEN",
    description: "YENTEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yenten/"
    },
    rank: "1736"
},{
    name: "ckusd",
    code: "CKUSD",
    icon: "ckusd",
    longname: "CK USD",
    description: "CK USD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ckusd/"
    },
    rank: "1737"
},{
    name: "zb",
    code: "ZB",
    icon: "zb",
    longname: "ZB",
    description: "ZB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zb/"
    },
    rank: "1738"
},{
    name: "infinity-economics",
    code: "XIN-1",
    icon: "xin-1",
    longname: "Infinity Economics",
    description: "Infinity Economics coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/infinity-economics/"
    },
    rank: "1739"
},{
    name: "mir-coin",
    code: "MIR",
    icon: "mir",
    longname: "MIR COIN",
    description: "MIR COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mir-coin/"
    },
    rank: "1740"
},{
    name: "project-pai",
    code: "PAI-1",
    icon: "pai-1",
    longname: "Project Pai",
    description: "Project Pai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-pai/"
    },
    rank: "1741"
},{
    name: "alibabacoin",
    code: "ABBC",
    icon: "abbc",
    longname: "Alibabacoin",
    description: "Alibabacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alibabacoin/"
    },
    rank: "1742"
},{
    name: "atlas-protocol",
    code: "ATP",
    icon: "atp",
    longname: "Atlas Protocol",
    description: "Atlas Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atlas-protocol/"
    },
    rank: "1743"
},{
    name: "bumo",
    code: "BU",
    icon: "bu",
    longname: "BUMO",
    description: "BUMO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bumo/"
    },
    rank: "1744"
},{
    name: "the-midas-touch-gold",
    code: "TMTG",
    icon: "tmtg",
    longname: "The Midas Touch Gold",
    description: "The Midas Touch Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-midas-touch-gold/"
    },
    rank: "1745"
},{
    name: "hycon",
    code: "HYC",
    icon: "hyc",
    longname: "HYCON",
    description: "HYCON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hycon/"
    },
    rank: "1746"
},{
    name: "platincoin",
    code: "PLC-1",
    icon: "plc-1",
    longname: "PLATINCOIN",
    description: "PLATINCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/platincoin/"
    },
    rank: "1747"
},{
    name: "filecoin",
    code: "FIL",
    icon: "fil",
    longname: "Filecoin [Futures]",
    description: "Filecoin [Futures] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/filecoin/"
    },
    rank: "1748"
},{
    name: "cwv-chain",
    code: "CWV",
    icon: "cwv",
    longname: "CWV Chain",
    description: "CWV Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cwv-chain/"
    },
    rank: "1749"
},{
    name: "playcoin",
    code: "PLY-1",
    icon: "ply-1",
    longname: "PlayCoin [QRC20]",
    description: "PlayCoin [QRC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playcoin/"
    },
    rank: "1750"
},{
    name: "maximine-coin",
    code: "MXM",
    icon: "mxm",
    longname: "Maximine Coin",
    description: "Maximine Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maximine-coin/"
    },
    rank: "1751"
},{
    name: "know",
    code: "KNOW",
    icon: "know",
    longname: "KNOW",
    description: "KNOW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/know/"
    },
    rank: "1752"
},{
    name: "davinci-coin",
    code: "DAC",
    icon: "dac",
    longname: "Davinci Coin",
    description: "Davinci Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/davinci-coin/"
    },
    rank: "1753"
},{
    name: "digifinextoken",
    code: "DFT-1",
    icon: "dft-1",
    longname: "DigiFinexToken",
    description: "DigiFinexToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digifinextoken/"
    },
    rank: "1754"
},{
    name: "shinechain",
    code: "SHE",
    icon: "she",
    longname: "ShineChain",
    description: "ShineChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shinechain/"
    },
    rank: "1755"
},{
    name: "ether-zero",
    code: "ETZ",
    icon: "etz",
    longname: "Ether Zero",
    description: "Ether Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ether-zero/"
    },
    rank: "1756"
},{
    name: "game-stars",
    code: "GST",
    icon: "gst",
    longname: "Game Stars",
    description: "Game Stars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/game-stars/"
    },
    rank: "1757"
},{
    name: "edu-coin",
    code: "EDU",
    icon: "edu",
    longname: "EduCoin",
    description: "EduCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/edu-coin/"
    },
    rank: "1758"
},{
    name: "hyperquant",
    code: "HQT",
    icon: "hqt",
    longname: "HyperQuant",
    description: "HyperQuant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hyperquant/"
    },
    rank: "1759"
},{
    name: "karatgold-coin",
    code: "KBC",
    icon: "kbc",
    longname: "Karatgold Coin",
    description: "Karatgold Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karatgold-coin/"
    },
    rank: "1760"
},{
    name: "fairgame",
    code: "FAIR-1",
    icon: "fair-1",
    longname: "FairGame",
    description: "FairGame coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fairgame/"
    },
    rank: "1761"
},{
    name: "visionx",
    code: "VNX",
    icon: "vnx",
    longname: "VisionX",
    description: "VisionX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/visionx/"
    },
    rank: "1762"
},{
    name: "usechain-token",
    code: "USE",
    icon: "use",
    longname: "Usechain Token",
    description: "Usechain Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/usechain-token/"
    },
    rank: "1763"
},{
    name: "hitchain",
    code: "HIT",
    icon: "hit",
    longname: "HitChain",
    description: "HitChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hitchain/"
    },
    rank: "1764"
},{
    name: "penta",
    code: "PNT",
    icon: "pnt",
    longname: "Penta",
    description: "Penta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/penta/"
    },
    rank: "1765"
},{
    name: "dacc",
    code: "DACC",
    icon: "dacc",
    longname: "DACC",
    description: "DACC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dacc/"
    },
    rank: "1766"
},{
    name: "molecular-future",
    code: "MOF",
    icon: "mof",
    longname: "Molecular Future",
    description: "Molecular Future coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/molecular-future/"
    },
    rank: "1767"
},{
    name: "vestchain",
    code: "VEST",
    icon: "vest",
    longname: "VestChain",
    description: "VestChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vestchain/"
    },
    rank: "1768"
},{
    name: "super-bitcoin",
    code: "SBTC",
    icon: "sbtc",
    longname: "Super Bitcoin",
    description: "Super Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/super-bitcoin/"
    },
    rank: "1769"
},{
    name: "topchain",
    code: "TOPC",
    icon: "topc",
    longname: "TopChain",
    description: "TopChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/topchain/"
    },
    rank: "1770"
},{
    name: "palletone",
    code: "PTN",
    icon: "ptn",
    longname: "PalletOne",
    description: "PalletOne coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/palletone/"
    },
    rank: "1771"
},{
    name: "ong",
    code: "ONG-1",
    icon: "ong-1",
    longname: "ONG",
    description: "ONG coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ong/"
    },
    rank: "1772"
},{
    name: "starchain",
    code: "STC",
    icon: "stc",
    longname: "StarChain",
    description: "StarChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starchain/"
    },
    rank: "1773"
},{
    name: "lightning-bitcoin",
    code: "LBTC-1",
    icon: "lbtc-1",
    longname: "Lightning Bitcoin",
    description: "Lightning Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lightning-bitcoin/"
    },
    rank: "1774"
},{
    name: "crypticcoin",
    code: "CRYP",
    icon: "cryp",
    longname: "CrypticCoin",
    description: "CrypticCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypticcoin/"
    },
    rank: "1775"
},{
    name: "mex",
    code: "MEX",
    icon: "mex",
    longname: "MEX",
    description: "MEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mex/"
    },
    rank: "1776"
},{
    name: "themis",
    code: "GET-1",
    icon: "get-1",
    longname: "Themis",
    description: "Themis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/themis/"
    },
    rank: "1777"
},{
    name: "stacs",
    code: "STACS",
    icon: "stacs",
    longname: "STACS",
    description: "STACS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stacs/"
    },
    rank: "1778"
},{
    name: "lightchain",
    code: "LIGHT",
    icon: "light",
    longname: "LightChain",
    description: "LightChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lightchain/"
    },
    rank: "1779"
},{
    name: "segwit2x",
    code: "B2X",
    icon: "b2x",
    longname: "SegWit2x",
    description: "SegWit2x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/segwit2x/"
    },
    rank: "1780"
},{
    name: "eligma-token",
    code: "ELI",
    icon: "eli",
    longname: "Eligma Token",
    description: "Eligma Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eligma-token/"
    },
    rank: "1781"
},{
    name: "consentium",
    code: "CSM",
    icon: "csm",
    longname: "Consentium",
    description: "Consentium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/consentium/"
    },
    rank: "1782"
},{
    name: "nos",
    code: "NOS",
    icon: "nos",
    longname: "nOS",
    description: "nOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nos/"
    },
    rank: "1783"
},{
    name: "foin",
    code: "FOIN",
    icon: "foin",
    longname: "FOIN",
    description: "FOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/foin/"
    },
    rank: "1784"
},{
    name: "mytoken",
    code: "MT",
    icon: "mt",
    longname: "MyToken",
    description: "MyToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mytoken/"
    },
    rank: "1785"
},{
    name: "volt",
    code: "ACDC",
    icon: "acdc",
    longname: "Volt",
    description: "Volt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/volt/"
    },
    rank: "1786"
},{
    name: "engine",
    code: "EGCC",
    icon: "egcc",
    longname: "Engine",
    description: "Engine coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/engine/"
    },
    rank: "1787"
},{
    name: "beekan",
    code: "BKBT",
    icon: "bkbt",
    longname: "BeeKan",
    description: "BeeKan coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/beekan/"
    },
    rank: "1788"
},{
    name: "insurchain",
    code: "INSUR",
    icon: "insur",
    longname: "InsurChain",
    description: "InsurChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insurchain/"
    },
    rank: "1789"
},{
    name: "intelligent-investment-chain",
    code: "IIC",
    icon: "iic",
    longname: "Intelligent Investment Chain",
    description: "Intelligent Investment Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intelligent-investment-chain/"
    },
    rank: "1790"
},{
    name: "vethor-token",
    code: "VTHO",
    icon: "vtho",
    longname: "VeThor Token",
    description: "VeThor Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vethor-token/"
    },
    rank: "1791"
},{
    name: "futurocoin",
    code: "FTO",
    icon: "fto",
    longname: "FuturoCoin",
    description: "FuturoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/futurocoin/"
    },
    rank: "1792"
},{
    name: "coinmeet",
    code: "MEET",
    icon: "meet",
    longname: "CoinMeet",
    description: "CoinMeet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinmeet/"
    },
    rank: "1793"
},{
    name: "ofcoin",
    code: "OF",
    icon: "of",
    longname: "OFCOIN",
    description: "OFCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ofcoin/"
    },
    rank: "1794"
},{
    name: "essentia",
    code: "ESS",
    icon: "ess",
    longname: "Essentia",
    description: "Essentia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/essentia/"
    },
    rank: "1795"
},{
    name: "carat",
    code: "CARAT",
    icon: "carat",
    longname: "CARAT",
    description: "CARAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carat/"
    },
    rank: "1796"
},{
    name: "atlantis-blue-digital-token",
    code: "ABDT",
    icon: "abdt",
    longname: "Atlantis Blue Digital Token",
    description: "Atlantis Blue Digital Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atlantis-blue-digital-token/"
    },
    rank: "1797"
},{
    name: "wintoken",
    code: "WIN",
    icon: "win",
    longname: "WinToken",
    description: "WinToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wintoken/"
    },
    rank: "1798"
},{
    name: "wiki-token",
    code: "WIKI",
    icon: "wiki",
    longname: "Wiki Token",
    description: "Wiki Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wiki-token/"
    },
    rank: "1799"
},{
    name: "dipnet",
    code: "DPN",
    icon: "dpn",
    longname: "DIPNET",
    description: "DIPNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dipnet/"
    },
    rank: "1800"
},{
    name: "weth",
    code: "WETH",
    icon: "weth",
    longname: "WETH",
    description: "WETH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/weth/"
    },
    rank: "1801"
},{
    name: "influence-chain",
    code: "INC",
    icon: "inc",
    longname: "Influence Chain",
    description: "Influence Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/influence-chain/"
    },
    rank: "1802"
},{
    name: "unlimitedip",
    code: "UIP",
    icon: "uip",
    longname: "UnlimitedIP",
    description: "UnlimitedIP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unlimitedip/"
    },
    rank: "1803"
},{
    name: "ubique-chain-of-things",
    code: "UCT",
    icon: "uct",
    longname: "Ubique Chain Of Things",
    description: "Ubique Chain Of Things coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubique-chain-of-things/"
    },
    rank: "1804"
},{
    name: "united-bitcoin",
    code: "UBTC",
    icon: "ubtc",
    longname: "United Bitcoin",
    description: "United Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/united-bitcoin/"
    },
    rank: "1805"
},{
    name: "carblock",
    code: "CAR",
    icon: "car",
    longname: "CarBlock",
    description: "CarBlock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carblock/"
    },
    rank: "1806"
},{
    name: "investdigital",
    code: "IDT",
    icon: "idt",
    longname: "InvestDigital",
    description: "InvestDigital coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/investdigital/"
    },
    rank: "1807"
},{
    name: "globalvillage-ecosystem",
    code: "GVE",
    icon: "gve",
    longname: "Globalvillage Ecosystem",
    description: "Globalvillage Ecosystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globalvillage-ecosystem/"
    },
    rank: "1808"
},{
    name: "carlive-chain",
    code: "IOV",
    icon: "iov",
    longname: "Carlive Chain",
    description: "Carlive Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carlive-chain/"
    },
    rank: "1809"
},{
    name: "bitup-token",
    code: "BUT",
    icon: "but",
    longname: "BitUP Token",
    description: "BitUP Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitup-token/"
    },
    rank: "1810"
},{
    name: "youlive-coin",
    code: "UC",
    icon: "uc",
    longname: "YouLive Coin",
    description: "YouLive Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/youlive-coin/"
    },
    rank: "1811"
},{
    name: "exchange-union",
    code: "XUC",
    icon: "xuc",
    longname: "Exchange Union",
    description: "Exchange Union coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exchange-union/"
    },
    rank: "1812"
},{
    name: "cybereits",
    code: "CRE",
    icon: "cre",
    longname: "Cybereits",
    description: "Cybereits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybereits/"
    },
    rank: "1813"
},{
    name: "stockchain",
    code: "SCC-1",
    icon: "scc-1",
    longname: "StockChain",
    description: "StockChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stockchain/"
    },
    rank: "1814"
},{
    name: "animation-vision-cash",
    code: "AVH",
    icon: "avh",
    longname: "Animation Vision Cash",
    description: "Animation Vision Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/animation-vision-cash/"
    },
    rank: "1815"
},{
    name: "chex",
    code: "CHEX",
    icon: "chex",
    longname: "CHEX",
    description: "CHEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chex/"
    },
    rank: "1816"
},{
    name: "aidos-kuneen",
    code: "ADK",
    icon: "adk",
    longname: "Aidos Kuneen",
    description: "Aidos Kuneen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidos-kuneen/"
    },
    rank: "1817"
},{
    name: "promotion-coin",
    code: "PC",
    icon: "pc",
    longname: "Promotion Coin",
    description: "Promotion Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/promotion-coin/"
    },
    rank: "1818"
},{
    name: "kwhcoin",
    code: "KWH",
    icon: "kwh",
    longname: "KWHCoin",
    description: "KWHCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kwhcoin/"
    },
    rank: "1819"
},{
    name: "yuan-chain-coin",
    code: "YCC",
    icon: "ycc",
    longname: "Yuan Chain Coin",
    description: "Yuan Chain Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yuan-chain-coin/"
    },
    rank: "1820"
},{
    name: "you-coin",
    code: "YOU",
    icon: "you",
    longname: "YOU COIN",
    description: "YOU COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/you-coin/"
    },
    rank: "1821"
},{
    name: "wxcoins",
    code: "WXC",
    icon: "wxc",
    longname: "WXCOINS",
    description: "WXCOINS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wxcoins/"
    },
    rank: "1822"
},{
    name: "baasid",
    code: "BAAS",
    icon: "baas",
    longname: "BaaSid",
    description: "BaaSid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/baasid/"
    },
    rank: "1823"
},{
    name: "alchemint-standards",
    code: "SDS",
    icon: "sds",
    longname: "Alchemint Standards",
    description: "Alchemint Standards coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alchemint-standards/"
    },
    rank: "1824"
},{
    name: "bitcapitalvendor",
    code: "BCV",
    icon: "bcv",
    longname: "BitCapitalVendor",
    description: "BitCapitalVendor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcapitalvendor/"
    },
    rank: "1825"
},{
    name: "show",
    code: "SHOW",
    icon: "show",
    longname: "Show",
    description: "Show coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/show/"
    },
    rank: "1826"
},{
    name: "wizbl",
    code: "WBL",
    icon: "wbl",
    longname: "WIZBL",
    description: "WIZBL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wizbl/"
    },
    rank: "1827"
},{
    name: "key",
    code: "KEY-1",
    icon: "key-1",
    longname: "KEY",
    description: "KEY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/key/"
    },
    rank: "1828"
},{
    name: "internationalcryptox",
    code: "INCX",
    icon: "incx",
    longname: "InternationalCryptoX",
    description: "InternationalCryptoX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internationalcryptox/"
    },
    rank: "1829"
},{
    name: "twinkle",
    code: "TKT",
    icon: "tkt",
    longname: "Twinkle",
    description: "Twinkle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/twinkle/"
    },
    rank: "1830"
},{
    name: "master-contract-token",
    code: "MCT",
    icon: "mct",
    longname: "Master Contract Token",
    description: "Master Contract Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/master-contract-token/"
    },
    rank: "1831"
},{
    name: "blockchain-quotations-index-token",
    code: "BQT",
    icon: "bqt",
    longname: "Blockchain Quotations Index Token",
    description: "Blockchain Quotations Index Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockchain-quotations-index-token/"
    },
    rank: "1832"
},{
    name: "hdac",
    code: "HDAC",
    icon: "hdac",
    longname: "Hdac",
    description: "Hdac coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hdac/"
    },
    rank: "1833"
},{
    name: "bitcoinx",
    code: "BCX",
    icon: "bcx",
    longname: "BitcoinX",
    description: "BitcoinX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinx/"
    },
    rank: "1834"
},{
    name: "ti-value",
    code: "TV",
    icon: "tv",
    longname: "Ti-Value",
    description: "Ti-Value coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ti-value/"
    },
    rank: "1835"
},{
    name: "dascoin",
    code: "DASC",
    icon: "dasc",
    longname: "DasCoin",
    description: "DasCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dascoin/"
    },
    rank: "1836"
},{
    name: "wetoken",
    code: "WT",
    icon: "wt",
    longname: "WeToken",
    description: "WeToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wetoken/"
    },
    rank: "1837"
},{
    name: "fundtoken",
    code: "FUNDZ",
    icon: "fundz",
    longname: "FundToken",
    description: "FundToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fundtoken/"
    },
    rank: "1838"
},{
    name: "bankera",
    code: "BNK",
    icon: "bnk",
    longname: "Bankera",
    description: "Bankera coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bankera/"
    },
    rank: "1839"
},{
    name: "lemochain",
    code: "LEMO",
    icon: "lemo",
    longname: "LemoChain",
    description: "LemoChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lemochain/"
    },
    rank: "1840"
},{
    name: "gsenetwork",
    code: "GSE",
    icon: "gse",
    longname: "GSENetwork",
    description: "GSENetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gsenetwork/"
    },
    rank: "1841"
},{
    name: "experience-token",
    code: "EXT",
    icon: "ext",
    longname: "Experience Token",
    description: "Experience Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experience-token/"
    },
    rank: "1842"
},{
    name: "ors-group",
    code: "ORS-1",
    icon: "ors-1",
    longname: "ORS Group",
    description: "ORS Group coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ors-group/"
    },
    rank: "1843"
},{
    name: "infinitecoin",
    code: "IFC",
    icon: "ifc",
    longname: "Infinitecoin",
    description: "Infinitecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/infinitecoin/"
    },
    rank: "1844"
},{
    name: "vsportcoin",
    code: "VSC",
    icon: "vsc",
    longname: "vSportCoin",
    description: "vSportCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vsportcoin/"
    },
    rank: "1845"
},{
    name: "empowr-coin",
    code: "EMPR",
    icon: "empr",
    longname: "empowr coin",
    description: "empowr coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/empowr-coin/"
    },
    rank: "1846"
},{
    name: "msd",
    code: "MSD",
    icon: "msd",
    longname: "MSD",
    description: "MSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/msd/"
    },
    rank: "1847"
},{
    name: "moving-cloud-coin",
    code: "MCC",
    icon: "mcc",
    longname: "Moving Cloud Coin",
    description: "Moving Cloud Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moving-cloud-coin/"
    },
    rank: "1848"
},{
    name: "ipchain",
    code: "IPC",
    icon: "ipc",
    longname: "IPChain",
    description: "IPChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ipchain/"
    },
    rank: "1849"
},{
    name: "quasarcoin",
    code: "QAC",
    icon: "qac",
    longname: "Quasarcoin",
    description: "Quasarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quasarcoin/"
    },
    rank: "1850"
},{
    name: "valuecybertoken",
    code: "VCT",
    icon: "vct",
    longname: "ValueCyberToken",
    description: "ValueCyberToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/valuecybertoken/"
    },
    rank: "1851"
},{
    name: "bingocoin",
    code: "BOC",
    icon: "boc",
    longname: "BingoCoin",
    description: "BingoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bingocoin/"
    },
    rank: "1852"
},{
    name: "dws",
    code: "DWS",
    icon: "dws",
    longname: "DWS",
    description: "DWS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dws/"
    },
    rank: "1853"
},{
    name: "pixie-coin",
    code: "PXC-1",
    icon: "pxc-1",
    longname: "Pixie Coin",
    description: "Pixie Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pixie-coin/"
    },
    rank: "1854"
},{
    name: "deex",
    code: "DEEX",
    icon: "deex",
    longname: "DEEX",
    description: "DEEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deex/"
    },
    rank: "1855"
},{
    name: "iconiq-lab-token",
    code: "ICNQ",
    icon: "icnq",
    longname: "Iconiq Lab Token",
    description: "Iconiq Lab Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconiq-lab-token/"
    },
    rank: "1856"
},{
    name: "oceanchain",
    code: "OC",
    icon: "oc",
    longname: "OceanChain",
    description: "OceanChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oceanchain/"
    },
    rank: "1857"
},{
    name: "cryptaldash",
    code: "CRD",
    icon: "crd",
    longname: "CryptalDash",
    description: "CryptalDash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptaldash/"
    },
    rank: "1858"
},{
    name: "win-coin",
    code: "WC",
    icon: "wc",
    longname: "WINCOIN",
    description: "WINCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/win-coin/"
    },
    rank: "1859"
},{
    name: "couchain",
    code: "COU",
    icon: "cou",
    longname: "Couchain",
    description: "Couchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/couchain/"
    },
    rank: "1860"
},{
    name: "seer",
    code: "SEER",
    icon: "seer",
    longname: "SEER",
    description: "SEER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/seer/"
    },
    rank: "1861"
},{
    name: "encryptotel-eth",
    code: "ETT-1",
    icon: "ett-1",
    longname: "EncryptoTel [ETH]",
    description: "EncryptoTel [ETH] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encryptotel-eth/"
    },
    rank: "1862"
},{
    name: "ilcoin",
    code: "ILC",
    icon: "ilc",
    longname: "ILCoin",
    description: "ILCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ilcoin/"
    },
    rank: "1863"
},{
    name: "shopzcoin",
    code: "SZC",
    icon: "szc",
    longname: "ShopZcoin",
    description: "ShopZcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shopzcoin/"
    },
    rank: "1864"
},{
    name: "escrowcoin",
    code: "ESCO",
    icon: "esco",
    longname: "EscrowCoin",
    description: "EscrowCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/escrowcoin/"
    },
    rank: "1865"
},{
    name: "tcoin",
    code: "TCN",
    icon: "tcn",
    longname: "TCOIN",
    description: "TCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tcoin/"
    },
    rank: "1866"
},{
    name: "starcointv",
    code: "KST",
    icon: "kst",
    longname: "StarCoin",
    description: "StarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starcointv/"
    },
    rank: "1867"
},{
    name: "comsa-eth",
    code: "CMS",
    icon: "cms",
    longname: "COMSA [ETH]",
    description: "COMSA [ETH] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comsa-eth/"
    },
    rank: "1868"
},{
    name: "read",
    code: "READ",
    icon: "read",
    longname: "Read",
    description: "Read coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/read/"
    },
    rank: "1869"
},{
    name: "beat",
    code: "BEAT",
    icon: "beat",
    longname: "BEAT",
    description: "BEAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/beat/"
    },
    rank: "1870"
},{
    name: "coni",
    code: "CONI",
    icon: "coni",
    longname: "Coni",
    description: "Coni coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coni/"
    },
    rank: "1871"
},{
    name: "otcbtc-token",
    code: "OTB",
    icon: "otb",
    longname: "OTCBTC Token",
    description: "OTCBTC Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/otcbtc-token/"
    },
    rank: "1872"
},{
    name: "carinet",
    code: "CIT",
    icon: "cit",
    longname: "CariNet",
    description: "CariNet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carinet/"
    },
    rank: "1873"
},{
    name: "ejoy",
    code: "EJOY",
    icon: "ejoy",
    longname: "EJOY",
    description: "EJOY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ejoy/"
    },
    rank: "1874"
},{
    name: "asura-coin",
    code: "ASA",
    icon: "asa",
    longname: "Asura Coin",
    description: "Asura Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asura-coin/"
    },
    rank: "1875"
},{
    name: "gazecoin",
    code: "GZE",
    icon: "gze",
    longname: "GazeCoin",
    description: "GazeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gazecoin/"
    },
    rank: "1876"
},{
    name: "dragon-coins",
    code: "DRG",
    icon: "drg",
    longname: "Dragon Coins",
    description: "Dragon Coins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragon-coins/"
    },
    rank: "1877"
},{
    name: "ultra-salescoud",
    code: "UST",
    icon: "ust",
    longname: "Ultra Salescloud",
    description: "Ultra Salescloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultra-salescoud/"
    },
    rank: "1878"
},{
    name: "monero-classic",
    code: "XMC",
    icon: "xmc",
    longname: "Monero Classic",
    description: "Monero Classic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero-classic/"
    },
    rank: "1879"
},{
    name: "thingsoperatingsystem",
    code: "TOS",
    icon: "tos",
    longname: "ThingsOperatingSystem",
    description: "ThingsOperatingSystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thingsoperatingsystem/"
    },
    rank: "1880"
},{
    name: "etherinc",
    code: "ETI",
    icon: "eti",
    longname: "EtherInc",
    description: "EtherInc coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etherinc/"
    },
    rank: "1881"
},{
    name: "delizia",
    code: "DELIZ",
    icon: "deliz",
    longname: "Delizia",
    description: "Delizia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delizia/"
    },
    rank: "1882"
},{
    name: "microbitcoin",
    code: "MBC",
    icon: "mbc",
    longname: "MicroBitcoin",
    description: "MicroBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/microbitcoin/"
    },
    rank: "1883"
},{
    name: "darkpaycoin",
    code: "DKPC",
    icon: "dkpc",
    longname: "DarkPayCoin",
    description: "DarkPayCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darkpaycoin/"
    },
    rank: "1884"
},{
    name: "bitcoin-zero",
    code: "BZX",
    icon: "bzx",
    longname: "Bitcoin Zero",
    description: "Bitcoin Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-zero/"
    },
    rank: "1885"
},{
    name: "comsa-xem",
    code: "CMS-1",
    icon: "cms-1",
    longname: "COMSA [XEM]",
    description: "COMSA [XEM] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comsa-xem/"
    },
    rank: "1886"
},{
    name: "messe-token",
    code: "MESSE",
    icon: "messe",
    longname: "MESSE TOKEN",
    description: "MESSE TOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/messe-token/"
    },
    rank: "1887"
},{
    name: "maggie",
    code: "MAG",
    icon: "mag",
    longname: "Maggie",
    description: "Maggie coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maggie/"
    },
    rank: "1888"
},{
    name: "ordocoin",
    code: "RDC",
    icon: "rdc",
    longname: "Ordocoin",
    description: "Ordocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ordocoin/"
    },
    rank: "1889"
},{
    name: "content-and-ad-network",
    code: "CAN-1",
    icon: "can-1",
    longname: "Content and AD Network",
    description: "Content and AD Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/content-and-ad-network/"
    },
    rank: "1890"
},{
    name: "pressone",
    code: "PRS",
    icon: "prs",
    longname: "PressOne",
    description: "PressOne coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pressone/"
    },
    rank: "1891"
},{
    name: "newstoken",
    code: "NEWOS",
    icon: "newos",
    longname: "NewsToken",
    description: "NewsToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newstoken/"
    },
    rank: "1892"
},{
    name: "hybrid-block",
    code: "HYB",
    icon: "hyb",
    longname: "Hybrid Block",
    description: "Hybrid Block coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hybrid-block/"
    },
    rank: "1893"
},{
    name: "rrcoin",
    code: "RRC",
    icon: "rrc",
    longname: "RRCoin",
    description: "RRCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rrcoin/"
    },
    rank: "1894"
},{
    name: "incodium",
    code: "INCO",
    icon: "inco",
    longname: "Incodium",
    description: "Incodium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incodium/"
    },
    rank: "1895"
},{
    name: "paws-fund",
    code: "PAWS",
    icon: "paws",
    longname: "PAWS Fund",
    description: "PAWS Fund coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paws-fund/"
    },
    rank: "1896"
},{
    name: "clubcoin",
    code: "CLUB",
    icon: "club",
    longname: "ClubCoin",
    description: "ClubCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clubcoin/"
    },
    rank: "1897"
},{
    name: "sigmacoin",
    code: "SIGMA",
    icon: "sigma",
    longname: "SIGMAcoin",
    description: "SIGMAcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sigmacoin/"
    },
    rank: "1898"
},{
    name: "anon",
    code: "ANON",
    icon: "anon",
    longname: "ANON",
    description: "ANON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anon/"
    },
    rank: "1899"
},{
    name: "eosblack",
    code: "BLACK",
    icon: "black",
    longname: "eosBLACK",
    description: "eosBLACK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eosblack/"
    },
    rank: "1900"
},{
    name: "bitcoin-file",
    code: "BIFI",
    icon: "bifi",
    longname: "Bitcoin File",
    description: "Bitcoin File coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-file/"
    },
    rank: "1901"
},{
    name: "commerce-data-connection",
    code: "CDC",
    icon: "cdc",
    longname: "Commerce Data Connection",
    description: "Commerce Data Connection coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commerce-data-connection/"
    },
    rank: "1902"
},{
    name: "bitnation",
    code: "XPAT",
    icon: "xpat",
    longname: "Bitnation",
    description: "Bitnation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitnation/"
    },
    rank: "1903"
},{
    name: "blockchain-certified-data-token",
    code: "BCDT",
    icon: "bcdt",
    longname: "Blockchain Certified Data Token",
    description: "Blockchain Certified Data Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockchain-certified-data-token/"
    },
    rank: "1904"
},{
    name: "crypto-harbor-exchange",
    code: "CHE",
    icon: "che",
    longname: "Crypto Harbor Exchange",
    description: "Crypto Harbor Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypto-harbor-exchange/"
    },
    rank: "1905"
},{
    name: "nerva",
    code: "XNV",
    icon: "xnv",
    longname: "Nerva",
    description: "Nerva coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nerva/"
    },
    rank: "1906"
},{
    name: "kingxchain",
    code: "KXC",
    icon: "kxc",
    longname: "KingXChain",
    description: "KingXChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kingxchain/"
    },
    rank: "1907"
},{
    name: "social-lending-token",
    code: "SLT-1",
    icon: "slt-1",
    longname: "Social Lending Token",
    description: "Social Lending Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/social-lending-token/"
    },
    rank: "1908"
},{
    name: "xtrd",
    code: "XTRD",
    icon: "xtrd",
    longname: "XTRD",
    description: "XTRD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xtrd/"
    },
    rank: "1909"
},{
    name: "sopay",
    code: "SOP",
    icon: "sop",
    longname: "SoPay",
    description: "SoPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sopay/"
    },
    rank: "1910"
},{
    name: "celsius",
    code: "CEL",
    icon: "cel",
    longname: "Celsius",
    description: "Celsius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/celsius/"
    },
    rank: "1911"
},{
    name: "ethereum-meta",
    code: "ETHM",
    icon: "ethm",
    longname: "Ethereum Meta",
    description: "Ethereum Meta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-meta/"
    },
    rank: "1912"
},{
    name: "jingtum-tech",
    code: "SWTC",
    icon: "swtc",
    longname: "Jingtum Tech",
    description: "Jingtum Tech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jingtum-tech/"
    },
    rank: "1913"
},{
    name: "veridocglobal",
    code: "VDG",
    icon: "vdg",
    longname: "VeriDocGlobal",
    description: "VeriDocGlobal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veridocglobal/"
    },
    rank: "1914"
},{
    name: "aware",
    code: "AT",
    icon: "at",
    longname: "AWARE",
    description: "AWARE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aware/"
    },
    rank: "1915"
},{
    name: "atidium",
    code: "ATD",
    icon: "atd",
    longname: "Atidium",
    description: "Atidium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atidium/"
    },
    rank: "1916"
},{
    name: "cobrabytes",
    code: "COBRA",
    icon: "cobra",
    longname: "Cobrabytes",
    description: "Cobrabytes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cobrabytes/"
    },
    rank: "1917"
},{
    name: "acchain",
    code: "ACC-2",
    icon: "acc-2",
    longname: "ACChain",
    description: "ACChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acchain/"
    },
    rank: "1918"
},{
    name: "medibit",
    code: "MEDIBIT",
    icon: "medibit",
    longname: "MediBit",
    description: "MediBit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medibit/"
    },
    rank: "1919"
},{
    name: "future1coin",
    code: "F1C",
    icon: "f1c",
    longname: "Future1coin",
    description: "Future1coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/future1coin/"
    },
    rank: "1920"
},{
    name: "endorsit",
    code: "EDS",
    icon: "eds",
    longname: "Endorsit",
    description: "Endorsit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/endorsit/"
    },
    rank: "1921"
},{
    name: "blockcdn",
    code: "BCDN",
    icon: "bcdn",
    longname: "BlockCDN",
    description: "BlockCDN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockcdn/"
    },
    rank: "1922"
},{
    name: "embercoin",
    code: "EMB",
    icon: "emb",
    longname: "EmberCoin",
    description: "EmberCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/embercoin/"
    },
    rank: "1923"
},{
    name: "x12-coin",
    code: "X12",
    icon: "x12",
    longname: "X12 Coin",
    description: "X12 Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x12-coin/"
    },
    rank: "1924"
},{
    name: "candy",
    code: "CANDY",
    icon: "candy",
    longname: "Candy",
    description: "Candy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/candy/"
    },
    rank: "1925"
},{
    name: "monero-original",
    code: "XMO",
    icon: "xmo",
    longname: "Monero Original",
    description: "Monero Original coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero-original/"
    },
    rank: "1926"
},{
    name: "graviocoin",
    code: "GIO",
    icon: "gio",
    longname: "Graviocoin",
    description: "Graviocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/graviocoin/"
    },
    rank: "1927"
},{
    name: "nuggets",
    code: "NUG",
    icon: "nug",
    longname: "Nuggets",
    description: "Nuggets coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nuggets/"
    },
    rank: "1928"
},{
    name: "haracoin",
    code: "HRC",
    icon: "hrc",
    longname: "Haracoin",
    description: "Haracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/haracoin/"
    },
    rank: "1929"
},{
    name: "bitnautic-token",
    code: "BTNT",
    icon: "btnt",
    longname: "BitNautic Token",
    description: "BitNautic Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitnautic-token/"
    },
    rank: "1930"
},{
    name: "budbo",
    code: "BUBO",
    icon: "bubo",
    longname: "Budbo",
    description: "Budbo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/budbo/"
    },
    rank: "1931"
},{
    name: "cedex-coin",
    code: "CEDEX",
    icon: "cedex",
    longname: "CEDEX Coin",
    description: "CEDEX Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cedex-coin/"
    },
    rank: "1932"
},{
    name: "mobilinktoken",
    code: "MOLK",
    icon: "molk",
    longname: "MobilinkToken",
    description: "MobilinkToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobilinktoken/"
    },
    rank: "1933"
},{
    name: "cmitcoin",
    code: "CMIT",
    icon: "cmit",
    longname: "CMITCOIN",
    description: "CMITCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cmitcoin/"
    },
    rank: "1934"
},{
    name: "snipcoin",
    code: "SNIP",
    icon: "snip",
    longname: "SnipCoin",
    description: "SnipCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snipcoin/"
    },
    rank: "1935"
},{
    name: "savenode",
    code: "SNO",
    icon: "sno",
    longname: "SaveNode",
    description: "SaveNode coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/savenode/"
    },
    rank: "1936"
},{
    name: "invictus-hyperion-fund",
    code: "IHF",
    icon: "ihf",
    longname: "Invictus Hyperion Fund",
    description: "Invictus Hyperion Fund coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/invictus-hyperion-fund/"
    },
    rank: "1937"
},{
    name: "esports-token",
    code: "EST",
    icon: "est",
    longname: "Esports Token",
    description: "Esports Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/esports-token/"
    },
    rank: "1938"
},{
    name: "elliot-coin",
    code: "ELLI",
    icon: "elli",
    longname: "Elliot Coin",
    description: "Elliot Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elliot-coin/"
    },
    rank: "1939"
},{
    name: "valuto",
    code: "VLU",
    icon: "vlu",
    longname: "Valuto",
    description: "Valuto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/valuto/"
    },
    rank: "1940"
},{
    name: "gamechain",
    code: "GCS",
    icon: "gcs",
    longname: "GameChain System",
    description: "GameChain System coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamechain/"
    },
    rank: "1941"
},{
    name: "xrt-token",
    code: "XRT",
    icon: "xrt",
    longname: "XRT Token",
    description: "XRT Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xrt-token/"
    },
    rank: "1942"
},{
    name: "bitcoin-god",
    code: "GOD",
    icon: "god",
    longname: "Bitcoin God",
    description: "Bitcoin God coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-god/"
    },
    rank: "1943"
},{
    name: "meetone",
    code: "MEETONE",
    icon: "meetone",
    longname: "MEET.ONE",
    description: "MEET.ONE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/meetone/"
    },
    rank: "1944"
},{
    name: "nam-coin",
    code: "NAM",
    icon: "nam",
    longname: "NAM COIN",
    description: "NAM COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nam-coin/"
    },
    rank: "1945"
},{
    name: "coin2play",
    code: "C2P",
    icon: "c2p",
    longname: "Coin2Play",
    description: "Coin2Play coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin2play/"
    },
    rank: "1946"
},{
    name: "terranova",
    code: "TER",
    icon: "ter",
    longname: "TerraNova",
    description: "TerraNova coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/terranova/"
    },
    rank: "1947"
},{
    name: "lendroid-support-token",
    code: "LST",
    icon: "lst",
    longname: "Lendroid Support Token",
    description: "Lendroid Support Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lendroid-support-token/"
    },
    rank: "1948"
},{
    name: "cryptopiafeeshares",
    code: "CEFS",
    icon: "cefs",
    longname: "CryptopiaFeeShares",
    description: "CryptopiaFeeShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptopiafeeshares/"
    },
    rank: "1949"
},{
    name: "golos-gold",
    code: "GBG",
    icon: "gbg",
    longname: "Golos Gold",
    description: "Golos Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golos-gold/"
    },
    rank: "1950"
},{
    name: "contractnet",
    code: "CNET",
    icon: "cnet",
    longname: "ContractNet",
    description: "ContractNet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/contractnet/"
    },
    rank: "1951"
},{
    name: "yuki",
    code: "YUKI",
    icon: "yuki",
    longname: "YUKI",
    description: "YUKI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yuki/"
    },
    rank: "1952"
},{
    name: "cardbuyers",
    code: "BCARD",
    icon: "bcard",
    longname: "CARDbuyers",
    description: "CARDbuyers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardbuyers/"
    },
    rank: "1953"
},{
    name: "excaliburcoin",
    code: "EXC-1",
    icon: "exc-1",
    longname: "Excaliburcoin",
    description: "Excaliburcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/excaliburcoin/"
    },
    rank: "1954"
},{
    name: "pandemia",
    code: "PNDM",
    icon: "pndm",
    longname: "Pandemia",
    description: "Pandemia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pandemia/"
    },
    rank: "1955"
},{
    name: "rubex-money",
    code: "RBMC",
    icon: "rbmc",
    longname: "Rubex Money",
    description: "Rubex Money coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubex-money/"
    },
    rank: "1956"
},{
    name: "hondaiscoin",
    code: "HNDC",
    icon: "hndc",
    longname: "HondaisCoin",
    description: "HondaisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hondaiscoin/"
    },
    rank: "1957"
},{
    name: "capdaxtoken",
    code: "XCD",
    icon: "xcd",
    longname: "CapdaxToken",
    description: "CapdaxToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/capdaxtoken/"
    },
    rank: "1958"
},{
    name: "pecunio",
    code: "PCO",
    icon: "pco",
    longname: "Pecunio",
    description: "Pecunio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pecunio/"
    },
    rank: "1959"
},{
    name: "plusonecoin",
    code: "PLUS1",
    icon: "plus1",
    longname: "PlusOneCoin",
    description: "PlusOneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plusonecoin/"
    },
    rank: "1960"
},{
    name: "obxcoin",
    code: "OBX",
    icon: "obx",
    longname: "OBXcoin",
    description: "OBXcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obxcoin/"
    },
    rank: "1961"
},{
    name: "rabbitcoin",
    code: "RBBT",
    icon: "rbbt",
    longname: "RabbitCoin",
    description: "RabbitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rabbitcoin/"
    },
    rank: "1962"
},{
    name: "twist",
    code: "TWIST",
    icon: "twist",
    longname: "TWIST",
    description: "TWIST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/twist/"
    },
    rank: "1963"
},{
    name: "noir",
    code: "NOR",
    icon: "nor",
    longname: "Noir",
    description: "Noir coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noir/"
    },
    rank: "1964"
},{
    name: "idol-coin",
    code: "IDOL",
    icon: "idol",
    longname: "IDOL COIN",
    description: "IDOL COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/idol-coin/"
    },
    rank: "1965"
},{
    name: "helper-search-token",
    code: "HSN",
    icon: "hsn",
    longname: "Helper Search Token",
    description: "Helper Search Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helper-search-token/"
    },
    rank: "1966"
},{
    name: "mooncoin",
    code: "MOON",
    icon: "moon",
    longname: "Mooncoin",
    description: "Mooncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mooncoin/"
    },
    rank: "1967"
},{
    name: "concierge-coin",
    code: "CCC",
    icon: "ccc",
    longname: "Concierge Coin",
    description: "Concierge Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/concierge-coin/"
    },
    rank: "1968"
},{
    name: "fargocoin",
    code: "FRGC",
    icon: "frgc",
    longname: "Fargocoin",
    description: "Fargocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fargocoin/"
    },
    rank: "1969"
},{
    name: "coffeecoin",
    code: "CFC",
    icon: "cfc",
    longname: "CoffeeCoin",
    description: "CoffeeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coffeecoin/"
    },
    rank: "1970"
},{
    name: "qube",
    code: "QUBE",
    icon: "qube",
    longname: "Qube",
    description: "Qube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qube/"
    },
    rank: "1971"
},{
    name: "bastonet",
    code: "BSN",
    icon: "bsn",
    longname: "Bastonet",
    description: "Bastonet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bastonet/"
    },
    rank: "1972"
},{
    name: "mirq",
    code: "MRQ",
    icon: "mrq",
    longname: "MIRQ",
    description: "MIRQ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mirq/"
    },
    rank: "1973"
},{
    name: "record",
    code: "RCD",
    icon: "rcd",
    longname: "RECORD",
    description: "RECORD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/record/"
    },
    rank: "1974"
},{
    name: "stex",
    code: "STEX",
    icon: "stex",
    longname: "STEX",
    description: "STEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stex/"
    },
    rank: "1975"
},{
    name: "omencoin",
    code: "OMEN",
    icon: "omen",
    longname: "OmenCoin",
    description: "OmenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omencoin/"
    },
    rank: "1976"
},{
    name: "superior-coin",
    code: "SUP",
    icon: "sup",
    longname: "Superior Coin",
    description: "Superior Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/superior-coin/"
    },
    rank: "1977"
},{
    name: "sphre-air",
    code: "XID",
    icon: "xid",
    longname: "Sphre AIR ",
    description: "Sphre AIR  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sphre-air/"
    },
    rank: "1978"
},{
    name: "internet-of-things",
    code: "XOT",
    icon: "xot",
    longname: "Internet of Things",
    description: "Internet of Things coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-of-things/"
    },
    rank: "1979"
},{
    name: "centaure",
    code: "CEN-1",
    icon: "cen-1",
    longname: "Centaure",
    description: "Centaure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centaure/"
    },
    rank: "1980"
},{
    name: "rocket-pool",
    code: "RPL",
    icon: "rpl",
    longname: "Rocket Pool",
    description: "Rocket Pool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rocket-pool/"
    },
    rank: "1981"
},{
    name: "traid",
    code: "TRAID",
    icon: "traid",
    longname: "Traid",
    description: "Traid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/traid/"
    },
    rank: "1982"
},{
    name: "cottoncoin",
    code: "COTN",
    icon: "cotn",
    longname: "CottonCoin",
    description: "CottonCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cottoncoin/"
    },
    rank: "1983"
},{
    name: "plexcoin",
    code: "PLX",
    icon: "plx",
    longname: "PlexCoin",
    description: "PlexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plexcoin/"
    },
    rank: "1984"
},{
    name: "adenz",
    code: "DNZ",
    icon: "dnz",
    longname: "Adenz",
    description: "Adenz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adenz/"
    },
    rank: "1985"
},{
    name: "corion",
    code: "COR",
    icon: "cor",
    longname: "CORION",
    description: "CORION coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/corion/"
    },
    rank: "1986"
},{
    name: "dynamiccoin",
    code: "DMC",
    icon: "dmc",
    longname: "DynamicCoin",
    description: "DynamicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamiccoin/"
    },
    rank: "1987"
},{
    name: "btcmoon",
    code: "BTCM",
    icon: "btcm",
    longname: "BTCMoon",
    description: "BTCMoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/btcmoon/"
    },
    rank: "1988"
},{
    name: "altcommunity-coin",
    code: "SONO",
    icon: "sono",
    longname: "SONO",
    description: "SONO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcommunity-coin/"
    },
    rank: "1989"
},{
    name: "halloween-coin",
    code: "HALLO",
    icon: "hallo",
    longname: "Halloween Coin",
    description: "Halloween Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halloween-coin/"
    },
    rank: "1990"
},{
    name: "blakestar",
    code: "ERA",
    icon: "era",
    longname: "ERA",
    description: "ERA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakestar/"
    },
    rank: "1991"
},{
    name: "eplus-coin",
    code: "EPLUS",
    icon: "eplus",
    longname: "EPLUS Coin",
    description: "EPLUS Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eplus-coin/"
    },
    rank: "1992"
},{
    name: "first-bitcoin",
    code: "BIT-2",
    icon: "bit-2",
    longname: "First Bitcoin",
    description: "First Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/first-bitcoin/"
    },
    rank: "1993"
},{
    name: "quotient",
    code: "XQN",
    icon: "xqn",
    longname: "Quotient",
    description: "Quotient coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quotient/"
    },
    rank: "1994"
},{
    name: "animecoin",
    code: "ANI",
    icon: "ani",
    longname: "Animecoin",
    description: "Animecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/animecoin/"
    },
    rank: "1995"
},{
    name: "zengold",
    code: "ZENGOLD",
    icon: "zengold",
    longname: "ZenGold",
    description: "ZenGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zengold/"
    },
    rank: "1996"
},{
    name: "alphabitcoinfund",
    code: "ABC",
    icon: "abc",
    longname: "Alphabit",
    description: "Alphabit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alphabitcoinfund/"
    },
    rank: "1997"
},{
    name: "bubble",
    code: "BUB",
    icon: "bub",
    longname: "Bubble",
    description: "Bubble coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bubble/"
    },
    rank: "1998"
},{
    name: "labh-coin",
    code: "LABH",
    icon: "labh",
    longname: "Labh Coin",
    description: "Labh Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/labh-coin/"
    },
    rank: "1999"
},{
    name: "proud-money",
    code: "PROUD",
    icon: "proud",
    longname: "PROUD Money",
    description: "PROUD Money coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proud-money/"
    },
    rank: "2000"
}];