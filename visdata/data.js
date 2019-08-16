fetch("http://randomuser.me/api?results=25")
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        for(let i=0; i <myJson.results.length; i++){
           console.log(myJson.results[i].name["first"]);
            
            let title = myJson.results[i].name["title"]
            let first = myJson.results[i].name["first"]
            let last  = myJson.results[i].name["last"]
            let gender = myJson.results[i].gender
            let email = myJson.results[i].email


            let tr = document.createElement("tr")
            tr.innerHTML=
            "<th>" + title + "</th>" +
            "<th>" + first + "</th>" +
            "<th>" + last + "</th>" +
            "<th>" + gender + "</th>" +
            "<th>" + email + "</th>";

            document.querySelector("table").appendChild(tr);
        }
    });




// let data ={
//     "results": [{
//         "gender": "male",
//         "name": {
//             "title": "mr",
//             "first": "guillermo",
//             "last": "nieto"
//         },
//         "location": {
//             "street": "7992 calle de arganzuela",
//             "city": "toledo",
//             "state": "melilla",
//             "postcode": 33740,
//             "coordinates": {
//                 "latitude": "-18.7740",
//                 "longitude": "-179.8852"
//             },
//             "timezone": {
//                 "offset": "-8:00",
//                 "description": "Pacific Time (US & Canada)"
//             }
//         },
//         "email": "guillermo.nieto@example.com",
//         "login": {
//             "uuid": "6a2c4dd4-de35-47ac-a357-b8b7c2563913",
//             "username": "goldenkoala762",
//             "password": "clifton",
//             "salt": "16ouEOUN",
//             "md5": "2dcebe9ffec5dc9e6ae4ebd09364d237",
//             "sha1": "a22c825683a81feb73998fb4d817ff5257434822",
//             "sha256": "9b2a4501c6881153c0690e692c034e70d14bb6e917938e970d62013d941c8ec0"
//         },
//         "dob": {
//             "date": "1971-08-09T08:13:59Z",
//             "age": 47
//         },
//         "registered": {
//             "date": "2014-01-24T19:10:25Z",
//             "age": 5
//         },
//         "phone": "971-342-502",
//         "cell": "693-800-246",
//         "id": {
//             "name": "DNI",
//             "value": "49579382-E"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/43.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
//         },
//         "nat": "ES"
//     }, {
//         "gender": "female",
//         "name": {
//             "title": "mrs",
//             "first": "alyssa",
//             "last": "garcia"
//         },
//         "location": {
//             "street": "539 rue de la gare",
//             "city": "perpignan",
//             "state": "seine-et-marne",
//             "postcode": 41452,
//             "coordinates": {
//                 "latitude": "86.9124",
//                 "longitude": "-49.3314"
//             },
//             "timezone": {
//                 "offset": "-9:00",
//                 "description": "Alaska"
//             }
//         },
//         "email": "alyssa.garcia@example.com",
//         "login": {
//             "uuid": "c0046a7f-8cf5-4e42-8e05-710abd58851e",
//             "username": "smallbutterfly855",
//             "password": "meatball",
//             "salt": "GGtf5BuZ",
//             "md5": "e404b74369a8bd8fb0c9938acf5a3339",
//             "sha1": "66da11bc1e8c337c07b3980720afd16639e3793f",
//             "sha256": "a27d676793df158f9678deb30f61059cb6626b5e15bde534bb217e425681f0a9"
//         },
//         "dob": {
//             "date": "1994-06-11T14:44:35Z",
//             "age": 25
//         },
//         "registered": {
//             "date": "2002-11-26T07:14:59Z",
//             "age": 16
//         },
//         "phone": "04-07-48-13-57",
//         "cell": "06-79-51-35-78",
//         "id": {
//             "name": "INSEE",
//             "value": "2NNaN40713066 80"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/27.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
//         },
//         "nat": "FR"
//     }, {
//         "gender": "male",
//         "name": {
//             "title": "mr",
//             "first": "loris",
//             "last": "lemoine"
//         },
//         "location": {
//             "street": "6057 rue de la baleine",
//             "city": "argenteuil",
//             "state": "loire-atlantique",
//             "postcode": 77562,
//             "coordinates": {
//                 "latitude": "-8.9225",
//                 "longitude": "-63.7262"
//             },
//             "timezone": {
//                 "offset": "+6:00",
//                 "description": "Almaty, Dhaka, Colombo"
//             }
//         },
//         "email": "loris.lemoine@example.com",
//         "login": {
//             "uuid": "d9d1df04-a1c7-4e25-9bbf-8258cc71b251",
//             "username": "crazyzebra155",
//             "password": "outkast",
//             "salt": "GpfWlluN",
//             "md5": "5b17f918cada3cec993c6260acf2fc93",
//             "sha1": "703a418dfcf5b45d7f7a171e46426b99896745cb",
//             "sha256": "42e1b47757cc73b289aecf90c6c5fd921c1d441cf96946703791aec2763f43af"
//         },
//         "dob": {
//             "date": "1956-01-29T09:28:31Z",
//             "age": 63
//         },
//         "registered": {
//             "date": "2005-04-08T03:34:37Z",
//             "age": 14
//         },
//         "phone": "05-67-00-26-51",
//         "cell": "06-14-35-33-79",
//         "id": {
//             "name": "INSEE",
//             "value": "1NNaN77460560 15"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/96.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
//         },
//         "nat": "FR"
//     }, {
//         "gender": "male",
//         "name": {
//             "title": "mr",
//             "first": "roland",
//             "last": "little"
//         },
//         "location": {
//             "street": "5767 mcgowen st",
//             "city": "new haven",
//             "state": "idaho",
//             "postcode": 58222,
//             "coordinates": {
//                 "latitude": "28.7999",
//                 "longitude": "43.9248"
//             },
//             "timezone": {
//                 "offset": "+9:00",
//                 "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
//             }
//         },
//         "email": "roland.little@example.com",
//         "login": {
//             "uuid": "d08279c9-919c-4831-8325-aa4f033feab1",
//             "username": "greenrabbit442",
//             "password": "7777777",
//             "salt": "rhgPsKtu",
//             "md5": "529dfd3ffd449eca5a8a445b7da378c5",
//             "sha1": "18ee8c500bcfd0373fd7999709de72a1dced7be4",
//             "sha256": "84653f7c074e253172dbb0149a95106da837c805b699a45ed8cb3c337812b852"
//         },
//         "dob": {
//             "date": "1948-12-11T18:47:50Z",
//             "age": 70
//         },
//         "registered": {
//             "date": "2012-07-15T17:20:29Z",
//             "age": 7
//         },
//         "phone": "(343)-459-0611",
//         "cell": "(753)-369-0411",
//         "id": {
//             "name": "SSN",
//             "value": "162-99-7106"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/4.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
//         },
//         "nat": "US"
//     }, {
//         "gender": "female",
//         "name": {
//             "title": "mrs",
//             "first": "alicia",
//             "last": "clark"
//         },
//         "location": {
//             "street": "902 lake of bays road",
//             "city": "richmond",
//             "state": "yukon",
//             "postcode": "H4D 8X5",
//             "coordinates": {
//                 "latitude": "-76.9484",
//                 "longitude": "-74.8775"
//             },
//             "timezone": {
//                 "offset": "+3:00",
//                 "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
//             }
//         },
//         "email": "alicia.clark@example.com",
//         "login": {
//             "uuid": "a9227585-4bfc-4b7a-89a0-2af1d8e97938",
//             "username": "beautifultiger364",
//             "password": "gobucks",
//             "salt": "BXgMGkN2",
//             "md5": "aa766febec390b4cb45902150abd9797",
//             "sha1": "089a34d93a2af2f5ed7261216f8ef39632592745",
//             "sha256": "2a12d394bca681588dac000be88d508ed0a52007c65363218e2ff485662b90fa"
//         },
//         "dob": {
//             "date": "1964-03-01T00:34:36Z",
//             "age": 55
//         },
//         "registered": {
//             "date": "2016-03-06T22:15:12Z",
//             "age": 3
//         },
//         "phone": "589-416-5789",
//         "cell": "633-271-2663",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/32.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/32.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/32.jpg"
//         },
//         "nat": "CA"
//     }, {
//         "gender": "female",
//         "name": {
//             "title": "ms",
//             "first": "elizabeth",
//             "last": "perkins"
//         },
//         "location": {
//             "street": "3163 station road",
//             "city": "portmarnock",
//             "state": "south dublin",
//             "postcode": 85863,
//             "coordinates": {
//                 "latitude": "-39.4503",
//                 "longitude": "-134.1532"
//             },
//             "timezone": {
//                 "offset": "-3:00",
//                 "description": "Brazil, Buenos Aires, Georgetown"
//             }
//         },
//         "email": "elizabeth.perkins@example.com",
//         "login": {
//             "uuid": "1a494506-c61a-4067-a79f-0921b9559e17",
//             "username": "heavysnake519",
//             "password": "brian1",
//             "salt": "9Y5qHEJ3",
//             "md5": "5df28614c2354b1c14fddde3875c30e3",
//             "sha1": "86a45616d7442f40e667f330e24d1fae85342097",
//             "sha256": "a5741f1c67b7a688bbf176054cf8fe1b05a7e20dd0e5b89664e44b0e68d13f10"
//         },
//         "dob": {
//             "date": "1986-10-01T18:19:57Z",
//             "age": 32
//         },
//         "registered": {
//             "date": "2015-05-29T15:31:35Z",
//             "age": 4
//         },
//         "phone": "041-748-2774",
//         "cell": "081-421-9273",
//         "id": {
//             "name": "PPS",
//             "value": "9251080T"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/18.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
//         },
//         "nat": "IE"
//     }, {
//         "gender": "female",
//         "name": {
//             "title": "ms",
//             "first": "linda",
//             "last": "hawkins"
//         },
//         "location": {
//             "street": "6657 broadway",
//             "city": "bath",
//             "state": "gwynedd county",
//             "postcode": "RN01 5LF",
//             "coordinates": {
//                 "latitude": "-70.4528",
//                 "longitude": "-117.5816"
//             },
//             "timezone": {
//                 "offset": "+8:00",
//                 "description": "Beijing, Perth, Singapore, Hong Kong"
//             }
//         },
//         "email": "linda.hawkins@example.com",
//         "login": {
//             "uuid": "2b4ffb10-a2b1-4399-99be-67c1982ad60e",
//             "username": "crazytiger622",
//             "password": "0987",
//             "salt": "RBpiugkb",
//             "md5": "c08465b3783c3d2bea238323fad92045",
//             "sha1": "a9d498250b3164fcd2f69f74ed45f76bfceb628c",
//             "sha256": "0db2c47d2f4291b2f8d1f48efdf97b3ba88188647b0575ba2cdf7ac879613c0c"
//         },
//         "dob": {
//             "date": "1988-07-16T20:09:37Z",
//             "age": 31
//         },
//         "registered": {
//             "date": "2006-10-19T11:27:33Z",
//             "age": 12
//         },
//         "phone": "016977 8158",
//         "cell": "0762-288-711",
//         "id": {
//             "name": "NINO",
//             "value": "EM 72 11 51 O"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/79.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
//         },
//         "nat": "GB"
//     }, {
//         "gender": "male",
//         "name": {
//             "title": "mr",
//             "first": "ricky",
//             "last": "rodriguez"
//         },
//         "location": {
//             "street": "9371 preston rd",
//             "city": "mackay",
//             "state": "south australia",
//             "postcode": 8528,
//             "coordinates": {
//                 "latitude": "-37.1166",
//                 "longitude": "-47.0110"
//             },
//             "timezone": {
//                 "offset": "-5:00",
//                 "description": "Eastern Time (US & Canada), Bogota, Lima"
//             }
//         },
//         "email": "ricky.rodriguez@example.com",
//         "login": {
//             "uuid": "d58ce639-9bde-4a55-bb24-aa5462de89b5",
//             "username": "yellowbird963",
//             "password": "quest1",
//             "salt": "I0i1MgXv",
//             "md5": "343ec903fce8bef774f16d007d601b7c",
//             "sha1": "269e6392d35c33ee73a5491b5a88efee3cd62b8c",
//             "sha256": "3e41f4b70ea7da268d2097e0eaf0c2959aa41428ab93db802567955fc857d471"
//         },
//         "dob": {
//             "date": "1994-04-14T09:03:21Z",
//             "age": 25
//         },
//         "registered": {
//             "date": "2005-03-06T19:07:57Z",
//             "age": 14
//         },
//         "phone": "05-1438-9565",
//         "cell": "0450-277-592",
//         "id": {
//             "name": "TFN",
//             "value": "290657962"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/94.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
//         },
//         "nat": "AU"
//     }, {
//         "gender": "female",
//         "name": {
//             "title": "ms",
//             "first": "maya",
//             "last": "noel"
//         },
//         "location": {
//             "street": "7486 rue saint-georges",
//             "city": "toulouse",
//             "state": "somme",
//             "postcode": 38413,
//             "coordinates": {
//                 "latitude": "38.8962",
//                 "longitude": "82.9264"
//             },
//             "timezone": {
//                 "offset": "+6:00",
//                 "description": "Almaty, Dhaka, Colombo"
//             }
//         },
//         "email": "maya.noel@example.com",
//         "login": {
//             "uuid": "55ccddfd-e487-49e2-bd7c-c38c7d4bb773",
//             "username": "lazyostrich968",
//             "password": "dima",
//             "salt": "pUJVJ1DM",
//             "md5": "db7023439bbae9d6cef49fddbf8cd493",
//             "sha1": "b8e9814b4066506331ff9418ec69002e03395a21",
//             "sha256": "d6eda8581f1a8e23fe7ea9b0cd5db2c81dbdc622c98be4325817368b6d47138c"
//         },
//         "dob": {
//             "date": "1974-11-18T22:20:42Z",
//             "age": 44
//         },
//         "registered": {
//             "date": "2006-09-24T16:33:30Z",
//             "age": 12
//         },
//         "phone": "04-27-46-15-00",
//         "cell": "06-55-87-11-06",
//         "id": {
//             "name": "INSEE",
//             "value": "2NNaN64701082 12"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/82.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
//         },
//         "nat": "FR"
//     }, {
//         "gender": "female",
//         "name": {
//             "title": "mademoiselle",
//             "first": "kristina",
//             "last": "meyer"
//         },
//         "location": {
//             "street": "1652 avenue goerges clémenceau",
//             "city": "grossaffoltern",
//             "state": "schwyz",
//             "postcode": 1994,
//             "coordinates": {
//                 "latitude": "-70.8209",
//                 "longitude": "159.0207"
//             },
//             "timezone": {
//                 "offset": "+9:30",
//                 "description": "Adelaide, Darwin"
//             }
//         },
//         "email": "kristina.meyer@example.com",
//         "login": {
//             "uuid": "3b6f4821-d18c-496a-9a00-73b642512004",
//             "username": "heavymouse110",
//             "password": "stanford",
//             "salt": "8VdkpSAN",
//             "md5": "5ffbba4a50d9dda86eb40d17166a69bd",
//             "sha1": "3b3811d6f0920f6fce42a67950b3a5bc6f976107",
//             "sha256": "496761084b3654d84e06ddc338a25b2420fbb8d1dc2b53b7f6f0b3b9ca24cee7"
//         },
//         "dob": {
//             "date": "1982-06-16T00:51:26Z",
//             "age": 37
//         },
//         "registered": {
//             "date": "2007-03-24T17:43:06Z",
//             "age": 12
//         },
//         "phone": "(690)-846-7361",
//         "cell": "(510)-501-6689",
//         "id": {
//             "name": "AVS",
//             "value": "756.7306.0097.12"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/7.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
//         },
//         "nat": "CH"
//     }],
//     "info": {
//         "seed": "a391e04f977a342f",
//         "results": 10,
//         "page": 1,
//         "version": "1.2"
//     }
// }
// let body = $(body);
// let firstPerson = document.createElement("p")
// firstPerson.innerText = data.results[0].name["first"];
// body.append(firstPerson);

// console.log(data.results[0].name[first]);

