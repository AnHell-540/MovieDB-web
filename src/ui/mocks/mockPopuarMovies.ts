import { rest } from "msw";

export const mockPopularMoviesHandler = [
  // URL desde .env?
  rest.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          page: 1,
          results: [
            {
              adult: false,
              backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
              genre_ids: [878, 12, 28],
              id: 653346,
              original_language: "en",
              original_title: "Kingdom of the Planet of the Apes",
              overview:
                "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
              popularity: 6245.898,
              poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
              release_date: "2024-05-08",
              title: "Kingdom of the Planet of the Apes",
              video: false,
              vote_average: 6.894,
              vote_count: 902,
            },
            {
              adult: false,
              backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
              genre_ids: [10752, 28, 18],
              id: 929590,
              original_language: "en",
              original_title: "Civil War",
              overview:
                "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
              popularity: 2730.901,
              poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
              release_date: "2024-04-10",
              title: "Civil War",
              video: false,
              vote_average: 7,
              vote_count: 1424,
            },
            {
              adult: false,
              backdrop_path: "/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg",
              genre_ids: [878, 28, 12],
              id: 823464,
              original_language: "en",
              original_title: "Godzilla x Kong: The New Empire",
              overview:
                "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
              popularity: 2726.153,
              poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
              release_date: "2024-03-27",
              title: "Godzilla x Kong: The New Empire",
              video: false,
              vote_average: 7.227,
              vote_count: 2627,
            },
            {
              adult: false,
              backdrop_path: "/ga4OLm4qLxPqKLMzjJlqHxVjst3.jpg",
              genre_ids: [28, 80, 53],
              id: 573435,
              original_language: "en",
              original_title: "Bad Boys: Ride or Die",
              overview:
                "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
              popularity: 2862.77,
              poster_path: "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
              release_date: "2024-06-05",
              title: "Bad Boys: Ride or Die",
              video: false,
              vote_average: 7.542,
              vote_count: 108,
            },
            {
              adult: false,
              backdrop_path: "/oavbmL3iddJUmC8nQjL6bLHwAP4.jpg",
              genre_ids: [27, 53],
              id: 719221,
              original_language: "en",
              original_title: "Tarot",
              overview:
                "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
              popularity: 1834.14,
              poster_path: "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
              release_date: "2024-05-01",
              title: "Tarot",
              video: false,
              vote_average: 6.504,
              vote_count: 412,
            },
            {
              adult: false,
              backdrop_path: "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
              genre_ids: [878, 28],
              id: 614933,
              original_language: "en",
              original_title: "Atlas",
              overview:
                "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
              popularity: 1828.902,
              poster_path: "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
              release_date: "2024-05-23",
              title: "Atlas",
              video: false,
              vote_average: 6.727,
              vote_count: 677,
            },
            {
              adult: false,
              backdrop_path: "/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
              genre_ids: [27],
              id: 437342,
              original_language: "en",
              original_title: "The First Omen",
              overview:
                "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
              popularity: 1389.513,
              poster_path: "/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
              release_date: "2024-04-03",
              title: "The First Omen",
              video: false,
              vote_average: 6.767,
              vote_count: 452,
            },
            {
              adult: false,
              backdrop_path: "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
              genre_ids: [28, 35],
              id: 746036,
              original_language: "en",
              original_title: "The Fall Guy",
              overview:
                "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
              popularity: 1382.602,
              poster_path: "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
              release_date: "2024-04-24",
              title: "The Fall Guy",
              video: false,
              vote_average: 7.283,
              vote_count: 1131,
            },
            {
              adult: false,
              backdrop_path: "/uVu2fBc114un7F1GD76RBouWyBP.jpg",
              genre_ids: [16, 10751, 18, 12, 35],
              id: 1022789,
              original_language: "en",
              original_title: "Inside Out 2",
              overview:
                "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
              popularity: 1293.16,
              poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
              release_date: "2024-06-12",
              title: "Inside Out 2",
              video: false,
              vote_average: 8.2,
              vote_count: 19,
            },
            {
              adult: false,
              backdrop_path: "/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg",
              genre_ids: [10752],
              id: 1136318,
              original_language: "en",
              original_title: "Battle Over Britain",
              overview:
                "A young pilot, fresh out of training, is called to join a Flight while they wait for the call to scramble. Throughout a single day, he witnesses the skies of southern England filled with deadly dog fights, and after every exhausting battle the men return to their dispersal hut, only to find another of their number missing. Unwilling to surrender, the pilot and his comrades unite to take to the skies once more, determined to defend not only the airfield, but their entire country.",
              popularity: 1217.246,
              poster_path: "/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg",
              release_date: "2023-12-01",
              title: "Battle Over Britain",
              video: false,
              vote_average: 6.417,
              vote_count: 12,
            },
            {
              adult: false,
              backdrop_path: "/shrwC6U8Bkst9T9J7fr1A50n6x6.jpg",
              genre_ids: [28, 12, 878],
              id: 786892,
              original_language: "en",
              original_title: "Furiosa: A Mad Max Saga",
              overview:
                "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
              popularity: 1122.616,
              poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
              release_date: "2024-05-22",
              title: "Furiosa: A Mad Max Saga",
              video: false,
              vote_average: 7.665,
              vote_count: 802,
            },
            {
              adult: false,
              backdrop_path: "/kYgQzzjNis5jJalYtIHgrom0gOx.jpg",
              genre_ids: [16, 28, 10751, 35, 14],
              id: 1011985,
              original_language: "en",
              original_title: "Kung Fu Panda 4",
              overview:
                "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
              popularity: 918.614,
              poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
              release_date: "2024-03-02",
              title: "Kung Fu Panda 4",
              video: false,
              vote_average: 7.124,
              vote_count: 1929,
            },
            {
              adult: false,
              backdrop_path: "/1m1rXopfNDVL3UMiv6kriYaJ3yE.jpg",
              genre_ids: [28, 53, 80, 878],
              id: 882059,
              original_language: "en",
              original_title: "Boy Kills World",
              overview:
                "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
              popularity: 769.762,
              poster_path: "/25JskXmchcYwj3jHRmcPm738MpB.jpg",
              release_date: "2024-04-24",
              title: "Boy Kills World",
              video: false,
              vote_average: 6.899,
              vote_count: 264,
            },
            {
              adult: false,
              backdrop_path: "/b93N6Mb08NhFhobB8KrR5GBaPP5.jpg",
              genre_ids: [878, 27],
              id: 969686,
              original_language: "en",
              original_title: "4 Horsemen: Apocalypse",
              overview:
                "A small team of scientists must race against time to stop what seems to be a cascade of global disasters signaling the possible apocalypse and end of days.",
              popularity: 920.018,
              poster_path: "/dt3mo4tArf2llDiht91cnvUtSgT.jpg",
              release_date: "2022-04-29",
              title: "4 Horsemen: Apocalypse",
              video: false,
              vote_average: 5.772,
              vote_count: 81,
            },
            {
              adult: false,
              backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
              genre_ids: [878, 12],
              id: 693134,
              original_language: "en",
              original_title: "Dune: Part Two",
              overview:
                "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
              popularity: 763.143,
              poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
              release_date: "2024-02-27",
              title: "Dune: Part Two",
              video: false,
              vote_average: 8.169,
              vote_count: 4417,
            },
            {
              adult: false,
              backdrop_path: "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
              genre_ids: [878, 27, 28],
              id: 940721,
              original_language: "ja",
              original_title: "ゴジラ-1.0",
              overview:
                "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
              popularity: 898.788,
              poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
              release_date: "2023-11-03",
              title: "Godzilla Minus One",
              video: false,
              vote_average: 7.63,
              vote_count: 1582,
            },
            {
              adult: false,
              backdrop_path: "/vblTCXOWUQGSc837vgbhDRi4HSc.jpg",
              genre_ids: [28, 80, 35, 53],
              id: 955555,
              original_language: "ko",
              original_title: "범죄도시3",
              overview:
                "Detective Ma Seok-do changes his affiliation from the Geumcheon Police Station to the Metropolitan Investigation Team, in order to eradicate Japanese gangsters who enter Korea to commit heinous crimes.",
              popularity: 877.731,
              poster_path: "/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg",
              release_date: "2023-05-31",
              title: "The Roundup: No Way Out",
              video: false,
              vote_average: 7.131,
              vote_count: 214,
            },
            {
              adult: false,
              backdrop_path: "/s9hW1DHfgy5ppK1fTUJuMKh4YFK.jpg",
              genre_ids: [28, 53],
              id: 980083,
              original_language: "en",
              original_title: "Top Gunner: Danger Zone",
              overview:
                "An airliner filled with 800 passengers is forced to fly fast and low, above farmlands, suburbs and skyscraper-packed cities or the tons of explosives aboard will detonate. When an elite unit of US Air Force fighter jets is sent to provide escort, they find themselves facing a squadron of unidentifiable warplanes which ignites a deadly air battle that threatens to destroy all life above and below.",
              popularity: 859.294,
              poster_path: "/29UCk1nvPzn2XubLk5rKDMlHBRu.jpg",
              release_date: "2022-05-20",
              title: "Top Gunner: Danger Zone",
              video: false,
              vote_average: 4.333,
              vote_count: 15,
            },
            {
              adult: false,
              backdrop_path: "/eAIHqfS3kXm7kZl4j7ZBfdegyEz.jpg",
              genre_ids: [53, 28, 80],
              id: 38700,
              original_language: "en",
              original_title: "Bad Boys for Life",
              overview:
                "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
              popularity: 831.506,
              poster_path: "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
              release_date: "2020-01-15",
              title: "Bad Boys for Life",
              video: false,
              vote_average: 7.127,
              vote_count: 7843,
            },
            {
              adult: false,
              backdrop_path: "/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
              genre_ids: [27, 9648, 53],
              id: 1041613,
              original_language: "en",
              original_title: "Immaculate",
              overview:
                "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
              popularity: 643.983,
              poster_path: "/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
              release_date: "2024-03-20",
              title: "Immaculate",
              video: false,
              vote_average: 6.29,
              vote_count: 576,
            },
          ],
          total_pages: 44613,
          total_results: 892241,
        })
      );
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          "dates": {
            "maximum": "2024-07-03",
            "minimum": "2024-06-12"
          },
          "page": 1,
          "results": [
            {
              "adult": false,
              "backdrop_path": "/ga4OLm4qLxPqKLMzjJlqHxVjst3.jpg",
              "genre_ids": [
                28,
                80,
                53
              ],
              "id": 573435,
              "original_language": "en",
              "original_title": "Bad Boys: Ride or Die",
              "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
              "popularity": 2862.77,
              "poster_path": "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
              "release_date": "2024-06-05",
              "title": "Bad Boys: Ride or Die",
              "video": false,
              "vote_average": 7.581,
              "vote_count": 111
            },
            {
              "adult": false,
              "backdrop_path": "/uVu2fBc114un7F1GD76RBouWyBP.jpg",
              "genre_ids": [
                16,
                10751,
                18,
                12,
                35
              ],
              "id": 1022789,
              "original_language": "en",
              "original_title": "Inside Out 2",
              "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
              "popularity": 1293.16,
              "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
              "release_date": "2024-06-12",
              "title": "Inside Out 2",
              "video": false,
              "vote_average": 8.2,
              "vote_count": 19
            },
            {
              "adult": false,
              "backdrop_path": "/1m1rXopfNDVL3UMiv6kriYaJ3yE.jpg",
              "genre_ids": [
                28,
                53,
                80,
                878
              ],
              "id": 882059,
              "original_language": "en",
              "original_title": "Boy Kills World",
              "overview": "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
              "popularity": 769.762,
              "poster_path": "/25JskXmchcYwj3jHRmcPm738MpB.jpg",
              "release_date": "2024-04-24",
              "title": "Boy Kills World",
              "video": false,
              "vote_average": 6.899,
              "vote_count": 264
            },
            {
              "adult": false,
              "backdrop_path": "/vWzJDjLPmycnQ42IppEjMpIhrhc.jpg",
              "genre_ids": [
                16,
                35,
                10751,
                12
              ],
              "id": 748783,
              "original_language": "en",
              "original_title": "The Garfield Movie",
              "overview": "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
              "popularity": 638.279,
              "poster_path": "/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
              "release_date": "2024-04-30",
              "title": "The Garfield Movie",
              "video": false,
              "vote_average": 6.394,
              "vote_count": 155
            },
            {
              "adult": false,
              "backdrop_path": "/k37Ccgu05Am1xxgN5GaW0HX9Kkl.jpg",
              "genre_ids": [
                27,
                53
              ],
              "id": 1087388,
              "original_language": "en",
              "original_title": "Sting",
              "overview": "After raising an unnervingly talented spider in secret, 12-year-old Charlotte must face the truth about her pet and fight for her family's survival.",
              "popularity": 507.996,
              "poster_path": "/zuSAZIG1PSrxFwPeAlGtg9LTwxo.jpg",
              "release_date": "2024-04-12",
              "title": "Sting",
              "video": false,
              "vote_average": 6.357,
              "vote_count": 119
            },
            {
              "adult": false,
              "backdrop_path": "/oZDRuGHhe5uY8wBqFJcJZT9kdvJ.jpg",
              "genre_ids": [
                27,
                9648,
                53
              ],
              "id": 1086747,
              "original_language": "en",
              "original_title": "The Watchers",
              "overview": "When 28-year-old artist Mina finds shelter after getting stranded in an expansive, untouched forest in western Ireland, she unknowingly becomes trapped alongside three strangers that are watched and stalked by mysterious creatures each night.",
              "popularity": 472.629,
              "poster_path": "/vZVEUPychdvZLrTNwWErr9xZFmu.jpg",
              "release_date": "2024-06-06",
              "title": "The Watchers",
              "video": false,
              "vote_average": 5.8,
              "vote_count": 59
            },
            {
              "adult": false,
              "backdrop_path": "/rmNlWyez5cniGtXkgixG1ezdqVk.jpg",
              "genre_ids": [
                28,
                53
              ],
              "id": 1093995,
              "original_language": "en",
              "original_title": "Chief of Station",
              "overview": "After learning that the death of his wife was not an accident, a former CIA Station Chief is forced back into the espionage underworld, teaming up with an adversary to unravel a conspiracy that challenges everything he thought he knew.",
              "popularity": 427.519,
              "poster_path": "/uuA01PTtPombRPvL9dvsBqOBJWm.jpg",
              "release_date": "2024-05-02",
              "title": "Chief of Station",
              "video": false,
              "vote_average": 5.256,
              "vote_count": 45
            },
            {
              "adult": false,
              "backdrop_path": "/nv6F6tz7r61DUhE7zgHwLJFcTYp.jpg",
              "genre_ids": [
                35,
                80,
                10749
              ],
              "id": 974635,
              "original_language": "en",
              "original_title": "Hit Man",
              "overview": "A mild-mannered professor moonlighting as a fake hit man in police stings ignites a chain reaction of trouble when he falls for a potential client.",
              "popularity": 453.52,
              "poster_path": "/1126gjlBf4hTm9Sgf0ox3LGVEBt.jpg",
              "release_date": "2024-05-16",
              "title": "Hit Man",
              "video": false,
              "vote_average": 6.907,
              "vote_count": 162
            },
            {
              "adult": false,
              "backdrop_path": "/nxxCPRGTzxUH8SFMrIsvMmdxHti.jpg",
              "genre_ids": [
                35,
                14,
                10751
              ],
              "id": 639720,
              "original_language": "en",
              "original_title": "IF",
              "overview": "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up.",
              "popularity": 368.021,
              "poster_path": "/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
              "release_date": "2024-05-08",
              "title": "IF",
              "video": false,
              "vote_average": 7.02,
              "vote_count": 124
            },
            {
              "adult": false,
              "backdrop_path": "/mYPsDej53aibXId6BSxb3Q5fAHg.jpg",
              "genre_ids": [
                9648,
                53,
                80,
                18
              ],
              "id": 978592,
              "original_language": "en",
              "original_title": "Sleeping Dogs",
              "overview": "Roy Freeman, an ex-homicide detective with a fractured memory, is forced to revisit a case he can't remember. As a man's life hangs in the balance on death row, Freeman must piece together the brutal evidence from a decade-old murder investigation, uncovering a sinister web of buried secrets and betrayals linking to his past. With only instincts to trust, he faces a chilling truth - sometimes, it's best to let sleeping dogs lie.",
              "popularity": 318.742,
              "poster_path": "/5DwQhh1HvTo7edaOeMX49NUyZqy.jpg",
              "release_date": "2024-03-21",
              "title": "Sleeping Dogs",
              "video": false,
              "vote_average": 7.109,
              "vote_count": 165
            },
            {
              "adult": false,
              "backdrop_path": "/ycCj6Ssuu2IdM23AYR7B8nbxQPA.jpg",
              "genre_ids": [
                16,
                10751,
                35,
                28
              ],
              "id": 519182,
              "original_language": "en",
              "original_title": "Despicable Me 4",
              "overview": "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, and the family is forced to go on the run.",
              "popularity": 252.732,
              "poster_path": "/7aE05hgqGxMECJdZiLuQKs3abTV.jpg",
              "release_date": "2024-06-20",
              "title": "Despicable Me 4",
              "video": false,
              "vote_average": 0,
              "vote_count": 0
            },
            {
              "adult": false,
              "backdrop_path": "/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg",
              "genre_ids": [
                878,
                9648,
                53
              ],
              "id": 720321,
              "original_language": "en",
              "original_title": "Breathe",
              "overview": "Air-supply is scarce in the near future, forcing a mother and daughter to fight for survival when two strangers arrive desperate for an oxygenated haven.",
              "popularity": 347.659,
              "poster_path": "/wTW2t8ocWDlHns8I7vQxuqkyK58.jpg",
              "release_date": "2024-04-04",
              "title": "Breathe",
              "video": false,
              "vote_average": 5.153,
              "vote_count": 75
            },
            {
              "adult": false,
              "backdrop_path": "/a8VgPlIQaX2WfUfYxhF4ItpkTO.jpg",
              "genre_ids": [
                18,
                53
              ],
              "id": 812037,
              "original_language": "fr",
              "original_title": "L'été dernier",
              "overview": "One summer, a French teenager who has been living with his mother in the city moves in with his estranged father’s family in the countryside, where he clashes with his stepmother.",
              "popularity": 194.292,
              "poster_path": "/8WwVhNc2dPtmPiwnm5MdKRHmeUQ.jpg",
              "release_date": "2023-09-13",
              "title": "Last Summer",
              "video": false,
              "vote_average": 5.767,
              "vote_count": 133
            },
            {
              "adult": false,
              "backdrop_path": "/2ak94bJfXxHR5vBxwrpkycwOKv3.jpg",
              "genre_ids": [
                53,
                18
              ],
              "id": 758679,
              "original_language": "en",
              "original_title": "Mothers' Instinct",
              "overview": "Alice and Celine are inseparable and share everything, from their daily routines to their secrets. Their perfect harmony is shattered when one of their sons dies in a tragic accident while under Alice’s care. Celine blames Alice for the death of her child and becomes obsessed with protecting her surviving son from any harm. Alice, on the other hand, feels guilty and paranoid that Celine is plotting to harm her and her family. A gripping battle of wills ensues as the two women spiral into madness and violence.",
              "popularity": 175.054,
              "poster_path": "/xscMEP5VsvCLxFvrDQD84biWsLA.jpg",
              "release_date": "2024-01-11",
              "title": "Mothers' Instinct",
              "video": false,
              "vote_average": 6.628,
              "vote_count": 78
            },
            {
              "adult": false,
              "backdrop_path": "/cZmOrIOkJ2SNfVdiO85dUbOAYnL.jpg",
              "genre_ids": [
                16,
                18
              ],
              "id": 1012201,
              "original_language": "ja",
              "original_title": "劇場版ハイキュー!! ゴミ捨て場の決戦",
              "overview": "Shoyo Hinata joins Karasuno High's volleyball club to be like his idol, a former Karasuno player known as the 'Little Giant'. But Hinata soon learns that he must team up with his middle school nemesis, Tobio Kageyama. Their clashing styles form a surprising weapon, but can their newfound teamwork defeat their rival Nekoma High in the highly anticipated 'Dumpster Battle', the long awaited ultimate showdown between two opposing underdog teams?",
              "popularity": 220.559,
              "poster_path": "/ntRU0OA4etGGiMMmH1Yw0bnaMdW.jpg",
              "release_date": "2024-02-16",
              "title": "HAIKYU!! The Dumpster Battle",
              "video": false,
              "vote_average": 7.5,
              "vote_count": 30
            },
            {
              "adult": false,
              "backdrop_path": "/b4xaqpUZFUkgyJ1VcFEPXmDML34.jpg",
              "genre_ids": [
                27
              ],
              "id": 845783,
              "original_language": "en",
              "original_title": "Baghead",
              "overview": "Following the death of her estranged father, Iris learns she has inherited a run-down, centuries-old pub. She travels to Berlin to identify her father’s body and meet with The Solicitor to discuss the estate. Little does she know, when the deed is signed she will become inextricably tied to an unspeakable entity that resides in the pub’s basement – Baghead – a shape-shifting creature that can transform into the dead.",
              "popularity": 162.689,
              "poster_path": "/lbOyeiiRYAE6Nm2e7xiNAAaRwZB.jpg",
              "release_date": "2023-12-28",
              "title": "Baghead",
              "video": false,
              "vote_average": 6.703,
              "vote_count": 231
            },
            {
              "adult": false,
              "backdrop_path": "/4yrOyO3N55XazHQXXYoqiiPQd40.jpg",
              "genre_ids": [
                27
              ],
              "id": 938614,
              "original_language": "en",
              "original_title": "Late Night with the Devil",
              "overview": "A live broadcast of a late-night talk show in 1977 goes horribly wrong, unleashing evil into the nation's living rooms.",
              "popularity": 194.312,
              "poster_path": "/u3YQJctMzFN2wAvnkmXy41bXhFv.jpg",
              "release_date": "2024-03-19",
              "title": "Late Night with the Devil",
              "video": false,
              "vote_average": 7.3,
              "vote_count": 457
            },
            {
              "adult": false,
              "backdrop_path": "/oMiKHO3H5RixfLsiU5Vumhlp5sj.jpg",
              "genre_ids": [
                80,
                10749,
                53
              ],
              "id": 948549,
              "original_language": "en",
              "original_title": "Love Lies Bleeding",
              "overview": "Reclusive gym manager Lou falls hard for Jackie, an ambitious bodybuilder headed through town to Las Vegas in pursuit of her dream. But their love ignites violence, pulling them deep into the web of Lou’s criminal family.",
              "popularity": 162.933,
              "poster_path": "/p7jyFWiLyHPttqYBFAlLJwtYTYH.jpg",
              "release_date": "2024-03-08",
              "title": "Love Lies Bleeding",
              "video": false,
              "vote_average": 6.6,
              "vote_count": 224
            },
            {
              "adult": false,
              "backdrop_path": "/1XyIHrP7X7rn3UBkNy9hPb9vCUf.jpg",
              "genre_ids": [
                27,
                878,
                53
              ],
              "id": 762441,
              "original_language": "en",
              "original_title": "A Quiet Place: Day One",
              "overview": "As New York City is invaded by alien creatures who hunt by sound, a woman named Sammy fights to survive.",
              "popularity": 166.007,
              "poster_path": "/yrpPYKijwdMHyTGIOd1iK1h0Xno.jpg",
              "release_date": "2024-06-26",
              "title": "A Quiet Place: Day One",
              "video": false,
              "vote_average": 0,
              "vote_count": 0
            },
            {
              "adult": false,
              "backdrop_path": "/qSc5JzPvSm6KxVv54nrn7SNXFtk.jpg",
              "genre_ids": [
                16,
                10402,
                35
              ],
              "id": 1192209,
              "original_language": "pt",
              "original_title": "Arca de Noé",
              "overview": "A pair of mice attempt to board Noah's Ark: Vini, a charismatic poet with terrible stage fright, and Tito, a talented and charming guitarist. When the rains come, only one male and one female of each species is allowed on Noah's Ark. With the help of an ingenious cockroach and fate's good luck, Vini and Tito sneak their way onto the Ark and together avert a showdown among the ships carnivores and plant eaters. All the while, the animals perform a series of classic songs inspired by world renowned poet, Vinicius de Moraes. Can these talented stowaways use music to break the tension and help these cooped up creatures survive the 40 days and 40 nights together?",
              "popularity": 127.073,
              "poster_path": "/j1Rjw6a62UwrbTNT0I3JzZnnCmr.jpg",
              "release_date": "2024-01-05",
              "title": "Noah's Ark",
              "video": false,
              "vote_average": 7.023,
              "vote_count": 64
            }
          ],
          "total_pages": 49,
          "total_results": 980
        })
      );
    }
  ),

  rest.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json({
          "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "popularity": 143.511,
      "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 26274
    },
    {
      "adult": false,
      "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "popularity": 142.286,
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "release_date": "1972-03-14",
      "title": "The Godfather",
      "video": false,
      "vote_average": 8.694,
      "vote_count": 19928
    },
    {
      "adult": false,
      "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_language": "en",
      "original_title": "The Godfather Part II",
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      "popularity": 91.727,
      "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "release_date": "1974-12-20",
      "title": "The Godfather Part II",
      "video": false,
      "vote_average": 8.577,
      "vote_count": 12033
    },
    {
      "adult": false,
      "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_language": "en",
      "original_title": "Schindler's List",
      "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      "popularity": 76.603,
      "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      "release_date": "1993-12-15",
      "title": "Schindler's List",
      "video": false,
      "vote_average": 8.568,
      "vote_count": 15441
    },
    {
      "adult": false,
      "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
      "genre_ids": [
        18
      ],
      "id": 389,
      "original_language": "en",
      "original_title": "12 Angry Men",
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "popularity": 70.719,
      "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
      "release_date": "1957-04-10",
      "title": "12 Angry Men",
      "video": false,
      "vote_average": 8.543,
      "vote_count": 8300
    },
    {
      "adult": false,
      "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 19404,
      "original_language": "hi",
      "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "popularity": 35.466,
      "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
      "release_date": "1995-10-20",
      "title": "Dilwale Dulhania Le Jayenge",
      "video": false,
      "vote_average": 8.537,
      "vote_count": 4396
    },
    {
      "adult": false,
      "backdrop_path": "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
      "genre_ids": [
        16,
        10751,
        14
      ],
      "id": 129,
      "original_language": "ja",
      "original_title": "千と千尋の神隠し",
      "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      "popularity": 110.017,
      "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "release_date": "2001-07-20",
      "title": "Spirited Away",
      "video": false,
      "vote_average": 8.538,
      "vote_count": 15996
    },
    {
      "adult": false,
      "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_language": "en",
      "original_title": "The Dark Knight",
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "popularity": 137.87,
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "release_date": "2008-07-16",
      "title": "The Dark Knight",
      "video": false,
      "vote_average": 8.516,
      "vote_count": 32044
    },
    {
      "adult": false,
      "backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
      "genre_ids": [
        35,
        53,
        18
      ],
      "id": 496243,
      "original_language": "ko",
      "original_title": "기생충",
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "popularity": 96.086,
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "release_date": "2019-05-30",
      "title": "Parasite",
      "video": false,
      "vote_average": 8.51,
      "vote_count": 17618
    },
    {
      "adult": false,
      "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
      "genre_ids": [
        14,
        18,
        80
      ],
      "id": 497,
      "original_language": "en",
      "original_title": "The Green Mile",
      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      "popularity": 105.71,
      "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
      "release_date": "1999-12-10",
      "title": "The Green Mile",
      "video": false,
      "vote_average": 8.505,
      "vote_count": 16885
    },
    {
      "adult": false,
      "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
      "genre_ids": [
        16,
        10749,
        18
      ],
      "id": 372058,
      "original_language": "ja",
      "original_title": "君の名は。",
      "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      "popularity": 82.987,
      "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
      "release_date": "2016-08-26",
      "title": "Your Name.",
      "video": false,
      "vote_average": 8.494,
      "vote_count": 11024
    },
    {
      "adult": false,
      "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      "genre_ids": [
        53,
        80
      ],
      "id": 680,
      "original_language": "en",
      "original_title": "Pulp Fiction",
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      "popularity": 262.045,
      "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      "release_date": "1994-09-10",
      "title": "Pulp Fiction",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 27205
    },
    {
      "adult": false,
      "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
      "genre_ids": [
        12,
        14,
        28
      ],
      "id": 122,
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Return of the King",
      "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
      "popularity": 123.359,
      "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      "release_date": "2003-12-01",
      "title": "The Lord of the Rings: The Return of the King",
      "video": false,
      "vote_average": 8.481,
      "vote_count": 23489
    },
    {
      "adult": false,
      "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 13,
      "original_language": "en",
      "original_title": "Forrest Gump",
      "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      "popularity": 107.716,
      "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      "release_date": "1994-06-23",
      "title": "Forrest Gump",
      "video": false,
      "vote_average": 8.476,
      "vote_count": 26724
    },
    {
      "adult": false,
      "backdrop_path": "/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
      "genre_ids": [
        37
      ],
      "id": 429,
      "original_language": "it",
      "original_title": "Il buono, il brutto, il cattivo",
      "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
      "popularity": 72.853,
      "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      "release_date": "1966-12-22",
      "title": "The Good, the Bad and the Ugly",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 8311
    },
    {
      "adult": false,
      "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 769,
      "original_language": "en",
      "original_title": "GoodFellas",
      "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
      "popularity": 97.393,
      "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      "release_date": "1990-09-12",
      "title": "GoodFellas",
      "video": false,
      "vote_average": 8.463,
      "vote_count": 12464
    },
    {
      "adult": false,
      "backdrop_path": "/dlC0ed9Ugh3FzydnkBtV5lRXUu4.jpg",
      "genre_ids": [
        16,
        18,
        10752
      ],
      "id": 12477,
      "original_language": "ja",
      "original_title": "火垂るの墓",
      "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
      "popularity": 0.043,
      "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
      "release_date": "1988-04-16",
      "title": "Grave of the Fireflies",
      "video": false,
      "vote_average": 8.461,
      "vote_count": 5274
    },
    {
      "adult": false,
      "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 346,
      "original_language": "ja",
      "original_title": "七人の侍",
      "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
      "popularity": 39.539,
      "poster_path": "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
      "release_date": "1954-04-26",
      "title": "Seven Samurai",
      "video": false,
      "vote_average": 8.456,
      "vote_count": 3518
    },
    {
      "adult": false,
      "backdrop_path": "/k3SBILYxHRgjORb5tbvA5dm2N4h.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 11216,
      "original_language": "it",
      "original_title": "Nuovo Cinema Paradiso",
      "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
      "popularity": 46.802,
      "poster_path": "/9JhfVOveaY00o8njQu2Xrp4YWud.jpg",
      "release_date": "1988-11-17",
      "title": "Cinema Paradiso",
      "video": false,
      "vote_average": 8.454,
      "vote_count": 4211
    },
    {
      "adult": false,
      "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
      "genre_ids": [
        35,
        18
      ],
      "id": 637,
      "original_language": "it",
      "original_title": "La vita è bella",
      "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
      "popularity": 50.429,
      "poster_path": "/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
      "release_date": "1997-12-20",
      "title": "Life Is Beautiful",
      "video": false,
      "vote_average": 8.452,
      "vote_count": 12745
    }
  ],
  "total_pages": 472,
  "total_results": 9425
        })
      );
    }
  )
];
