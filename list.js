var list = {
    "list": [
        {
            "name": "DFAs",
            "questions": [
                {
                    "text":"Care dintre urmatoarele cuvinte sunt acceptate de urmatorul AFD:",
                    "img": "DFAs.png",
                    "options": [
                        "ABAB",
                        "ABCD",
                        "ABAC",
                        "ABACAC",
                        "ABABAB",
                        "ABACACAC",
                        "ABACABAC",
                        "ABABACACAC"
                    ],
                    "correct": [
                        "ABACAC",
                        "ABACACAC",
                        "ABABACACAC"
                    ]
                },
                {
                    "text":"Care dintre urmatoarele afirmatii sunt adevarate privitor la AFD-ul din poza:",
                    "options": [
                        "Starea initiala este 0",
                        "K = {0, 1, 2, 3, 4, 5, 6, 7}",
                        "Alfabetul este {A,B,C}",
                        "Functia delta este totala",
                        "F = {6}"
                    ],
                    "correct": [
                        "Starea initiala este 0",
                        "K = {0, 1, 2, 3, 4, 5, 6, 7}",
                        "Alfabetul este {A,B,C}",
                        "Functia delta este totala",
                        "F = {6}"
                    ]
                },
                {
                    "text":"Configuratia accesibila din doi pasi, din (3,BACABA) este:",
                    "options": [
                        "(3,BACABA)",
                        "(6,BACABA)",
                        "(7,BACABA)",
                        "(6,epsilon)",
                        "(7,epsilon)",
                        "(3,CABA)",
                        "(3,BACA)",
                        "(7,BACA)"
                    ],
                    "correct": [
                        "(3,CABA)"
                    ]
                }
            ]
        },
        {
            "name": "NFA",
            "questions": [
                {
                    "text":"Care afirmatii sunt adevarate relativ la urmatorul AF:",
                    "img": "NFA.png",
                    "options": [
                        "AF-ul este determinist",
                        "AF-ul este nedeterminist",
                        "ABCABC este acceptat",
                        "ABCBCB este acceptat"
                    ],
                    "correct": [
                        "AF-ul este nedeterminist",
                        "ABCABC este acceptat",
                        "ABCBCB este acceptat"
                    ]
                },
                {
                    "text":"Sa presupunem ca am construit un AFN aplicand algoritmul de transformare asupra regex-ului A U (BC)*. AFN-ul rezultat va avea:",
                    "options": [
                        "6 stari",
                        "7 stari",
                        "8 stari",
                        "9 stari",
                        "10 stari",
                        "11 stari",
                        "12 stari"
                    ],
                    "correct": [
                        "10 stari"
                    ]
                },
                {
                    "text":"Sa presupunem ca am construit un AFN aplicand algoritmul de transformare asupra regex-ului A U (BC)*. AFN-ul rezultat va avea:",
                    "options": [
                        "6 tranzitii",
                        "7 tranzitii",
                        "8 tranzitii",
                        "9 tranzitii",
                        "10 tranzitii",
                        "11 tranzitii",
                        "12 tranzitii"
                    ],
                    "correct": [
                        "12 tranzitii"
                    ]
                }
            ]
        },
        {
            "name": "Subset construction",
            "questions": [
                {
                    "text":"Cate stari accesibile (inclusiv sink states) si stari finale are AFD-ul obtinut din transformarea urmatorului AFN, folosind algoritmul Subset?",
                    "img": "Subset Construction.png",
                    "options": [
                        "o stare accesibila",
                        "o stare finala",
                        "2 stari accesibile",
                        "2 stari finale",
                        "3 stari accesibile",
                        "3 stari finale",
                        "4 stari accesibile",
                        "4 stari finale",
                        "5 stari accesibile",
                        "5 stari finale",
                        "6 stari accesibile",
                        "6 stari finale",
                        "7 stari accesibile",
                        "7 stari finale"
                    ],
                    "correct": [
                        "o stare finala",
                        "5 stari accesibile"
                    ]
                },
                {
                    "text":"Transformati urmatoarea expresie regulata A(BA)* in AFN, si apoi in AFD. Cate stari accesibile (inclusiv sink states) si finale contine acesta din urma?",
                    "options": [
                        "o stare accesibila",
                        "o stare finala",
                        "2 stari accesibile",
                        "2 stari finale",
                        "3 stari accesibile",
                        "3 stari finale",
                        "4 stari accesibile",
                        "4 stari finale",
                        "5 stari accesibile",
                        "5 stari finale",
                        "6 stari accesibile",
                        "6 stari finale",
                        "7 stari accesibile",
                        "7 stari finale"
                    ],
                    "correct": [
                        "2 stari finale",
                        "5 stari accesibile"
                    ]
                }
            ]
        },
        {
            "name": "Minimizare",
            "questions": [
                {
                    "text":"Care stari nu pot fi distinse din acest AFD?",
                    "img": "Minimizare.png",
                    "options": [
                        "1 si 2",
                        "1 si 3",
                        "1 si 4",
                        "1 si 5",
                        "1 si 6",
                        "2 si 3",
                        "2 si 4",
                        "2 si 5",
                        "2 si 6",
                        "3 si 4",
                        "3 si 5",
                        "3 si 6",
                        "4 si 5",
                        "4 si 6",
                        "5 si 6"
                    ],
                    "correct": [
                        "1 si 2",
                        "3 si 4",
                        "5 si 6"
                    ]
                }
            ]
        },
        {
            "name": "Dfa-to-Regex",
            "questions": [
                {
                    "text":"Daca starea p ar fi eliminata, care ar fi tranzitiile ce ar trebui create in locul acesteia?",
                    "img": "Dfa-to-Regex.png",
                    "options": [
                        "De la q la r, cu eticheta AAB",
                        "De la q la r, cu eticheta AB*A",
                        "De la q la r, cu eticheta AA",
                        "De la q la r, cu eticheta AB*A U B",
                        "De la q la p, cu eticheta AB*",
                        "De la q la p, cu eticheta AB",
                        "De la q la p, cu eticheta AB*C",
                        "De la q la q, cu eticheta AC",
                        "De la q la q, cu eticheta (AC)*",
                        "De la q la q, cu eticheta AB*C",
                        "De la p la q, cu eticheta B*A",
                        "De la p la q, cu eticheta CAB*A"
                    ],
                    "correct": [
                        "De la q la r, cu eticheta AB*A U B",
                        "De la q la q, cu eticheta AB*C"
                    ]
                }
            ]
        },
        {
            "name": "Closure-properties",
            "questions": [
                {
                    "text":"Fie L1 un limbaj acceptat de un AFN avand exact 3 stari si L2=L( (00 U 1)*). Care din urmatoarele afirmatii sunt adevarate?",
                    "options": [
                        "L1 intersectat cu L2 este un limbaj regulat",
                        "L1 reunit cu L2 este un limbaj regulat",
                        "complementul lui L1 intersectat cu complementul lui L2 este un limbaj regulat",
                        "complementul lui L2 reunit cu complementul lui L1 este un limbaj regulat",
                        "diferenta simetrica intre L1 si L2 este un limbaj regulat"
                    ],
                    "correct": [
                        "L1 intersectat cu L2 este un limbaj regulat",
                        "L1 reunit cu L2 este un limbaj regulat",
                        "complementul lui L1 intersectat cu complementul lui L2 este un limbaj regulat",
                        "complementul lui L2 reunit cu complementul lui L1 este un limbaj regulat",
                        "diferenta simetrica intre L1 si L2 este un limbaj regulat"
                    ]
                },
                {
                    "text":"Care din urmatoarele limbaje sunt regulate?",
                    "options": [
                        "L((01 U 10)*)",
                        "Orice limbaj acceptat de un AFN ce contine numar par de stari.",
                        "{w din {0,1}* | w codifica in binar un numar prim}",
                        "{w din {0,1}* | dupa fiecare 0 din w urmeaza doi de 1, si dupa fiecare 1 urmeaza trei de zero}",
                        "{w din {0,1}* | #0(w) = 2 * #1(w) sau #1(w) = 2 * #0(w)} (#0(w) reprezinta numarul de 0 in w)"

                    ],
                    "correct": [
                        "L((01 U 10)*)",
                        "Orice limbaj acceptat de un AFN ce contine numar par de stari.",
                        "{w din {0,1}* | dupa fiecare 0 din w urmeaza doi de 1, si dupa fiecare 1 urmeaza trei de zero}"
                    ]
                }
            ]
        },
        {
            "name": "Pumping lemma",
            "questions": [
                {
                    "text":"Care afirmatie este adevarata vizavi de limbajul expressilor boolene standard, peste alfabetul {0,1,^,!,V}?",
                    "options": [
                        "Limbajul este finit",
                        "Limbajul este infinit",
                        "Limbajul este numarabil",
                        "Limbajul este regulat"
                    ],
                    "correct": [
                        "Limbajul este infinit",
                        "Limbajul este numarabil",
                        "Limbajul este regulat"
                    ]
                },
                {
                    "text":"Ce perechi de cuvinte si constante k pot fi folosite pentru a arata folosind lema de pompare ca limbajul {0^n1^m cu m >= n > 0} nu este regulat?",
                    "options": [
                        "wn = 0^n1^n si k = 0",
                        "wn = 0^n1^n si k = 1",
                        "wn = 0^n1^n si k = 2",
                        "wn = 0^{2n}1^n si k = 0",
                        "wn = 0^{n}1^{n+1} si k = 3"
                    ],
                    "correct": [
                        "wn = 0^n1^n si k = 2",
                        "wn = 0^{n}1^{n+1} si k = 3"
                    ]
                }
            ]
        },
        {
            "name": "PDAs",
            "questions": [
                {
                    "text":"Care afirmatii sunt adevarate privitor la APD-ul din imagine?",
                    "img": "PDAs.png",
                    "options": [
                        "Accepta prin stare finala",
                        "Accepta prin stiva vida",
                        "Alfabetul stivei este {X,Z0}",
                        "Alfabetul stivei este {A,B,C,X,Z0}",
                        "Exista mai multe stari succesor pentru aceeasi combinatie stare, simbol-input, simbol-stiva"
                    ],
                    "correct": [
                        "Accepta prin stiva vida",
                        "Alfabetul stivei este {X,Z0}"
                    ]
                },
                {
                    "text":"Ce limbaj accepta APD-ul din imaginea anterioara?",
                    "options": [
                        "{A^nB^nC^n, cu n >= 1}",
                        "{A^nB^m, cu n >= 1}",
                        "{A^nB^mC^k, cu n >= m >= k >= 1}",
                        "{A^{n+m}B^nC^{n+1}, cu n, m >= 1}",
                        "{A^nB^{n+m}C^{m+1}, cu n, m >= 1}",
                        "{A^nB^{n+m}C^m, cu n, m >= 1}",
                        "{A^nB^mC^{n+m}, cu n, m >= 1}"
                    ],
                    "correct": [
                        "{A^nB^{n+m}C^{m+1}, cu n, m >= 1}"
                    ]
                }
            ]
        },
        {
            "name": "FNC-and-other",
            "questions": [
                {
                    "text":"Care din urmatoarele gramatici accepta limbajul {ww^R | w in {0,1}*}? (w^R este inversul lui w, de exemplu 011^R este 110)",
                    "options": [
                        "S <- 0A0 | 1A1 | epsilon, A <- 0S0 | 1S1 | epsilon",
                        "S <- 0S1 | 1S0 | epsilon",
                        "S <- 0A | 1A | epsilon, A <- S1 | S0 | epsilon",
                        "S <- 0S0 | 1S1 | epsilon"
                    ],
                    "correct": [
                        "S <- 0A0 | 1A1 | epsilon, A <- 0S0 | 1S1 | epsilon",
                        "S <- 0S0 | 1S1 | epsilon"
                    ]
                },
                {
                    "text":"Fie urmatoarea gramatica: S <- X | AX, X <- Y | BY, Y <- AB, A <- a, B <- b. Care dintre regulile de mai jos se vor regasi in transformarea acestei gramatici in FNC?",
                    "options": [
                        "S <- AB",
                        "S <- BY",
                        "S <- AX",
                        "S <- ab",
                        "X <- AB",
                        "X <- AX",
                        "X <- SB",
                        "Y <- AB"
                    ],
                    "correct": [
                        "S <- AB",
                        "S <- BY",
                        "S <- AX",
                        "X <- AB",
                        "Y <- AB"
                    ]
                },
                {
                    "text":"Cate reguli va contine transformarea in FNC a gramaticii:<br>S <- AX | BY <br>X <- AX | a | epsilon <br> Y <- BY | b | epsilon <br> A <- a <br> B <- b <br>",
                    "options": [
                        "5 reguli",
                        "6 reguli",
                        "7 reguli",
                        "8 reguli",
                        "9 reguli",
                        "10 reguli",
                        "11 reguli",
                        "12 reguli"
                    ],
                    "correct": [
                        "10 reguli"
                    ]
                }
            ]
        },
        {
            "name": "Context-Free Languages",
            "questions": [
                {
                    "text":"Care din urmatoarele limbaje nu sunt independente de context?",
                    "options": [
                        "{ww^R | w in {0,1}*}",
                        "{ww | w in {0,1}*}",
                        "{ww^Rw | w in {0,1}*}",
                        "{ww' | w != w' si w,w' in {0,1}*}",
                        "{a^nb^{n+m}c^m | n,m >= 0}",
                        "{a^nb^{n+m}c^{n+m} | n,m >= 0}"
                    ],
                    "correct": [
                        "{ww | w in {0,1}*}",
                        "{ww^Rw | w in {0,1}*}",
                        "{a^nb^{n+m}c^{n+m} | n,m >= 0}"
                    ]
                },
                {
                    "text":"Care din urmatoarele structuri de cuvinte pot fi folosite pentru a demonstra folosind lema de pompare ca limbajul {ww | w in L(a*b*)} nu este independent de context?",
                    "options": [
                        "w = ab",
                        "w_n = a^nb^n",
                        "w_n = a^nb^nb^na^n",
                        "w_n = a^nb^na^nb^n",
                        "w_n = a^{2n}",
                        "w_n = a^{n/2}b^{n/2}"
                    ],
                    "correct": [
                        "w_n = a^nb^na^nb^n"
                    ]
                }
            ]
        }
    ]
}