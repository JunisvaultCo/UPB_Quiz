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
            "name": "Regex (hopefully fine)",
            "questions": [
                {
                    "text":"Scrieti o expresie regulata care genereaza limbajul acceptat de automatul finit determinist din imagine."
                    + "<br> FOLOSITI DOAR CARACTERELE: {0,1,*,(,),U}. NU FOLOSITI SPATII ALBE.",
                    "img": "Regex.png",
                    "isField": true,
                    "isRegex": true,
                    "allowed": [
                        "0", "1", "*", "(", ")", "U"
                    ],
                    "correct": [
                        "0(10)*01*",
                        "(01)*001*",
                        "(01)*00(1)*",
                        "0(10)*0(1)*"
                    ]
                },
                {
                    "text":"Selectati din lista de mai jos acele expresii regulate care genereaza acelasi limbaj.",
                    "options": [
                        "(0*1*)*",
                        "0*1*",
                        "(0 U 1)*",
                        "1*0*",
                        "(1*0*)*"
                    ],
                    "correct": [
                        "(0*1*)*",
                        "(0 U 1)*",
                        "(1*0*)*"
                    ]
                },
                {
                    "text":"Scrieti o expresie regulata pentru limbajul tuturor cuvintelor binare care incep si se termina cu acelasi bit (0 sau 1). "
                    + "<br> FOLOSITI DOAR CARACTERELE: {0,1,*,(,),U}. NU FOLOSITI SPATII ALBE.",
                    "isField": true,
                    "isRegex": true,
                    "allowed": [
                        "0", "1", "*", "(", ")", "U"
                    ],
                    "correct": [
                        "0U1U(0(0U1)*0)U(1(0U1)*1)",
                        "0U1U(0(0U1)*0)U(1(1U0)*1)",
                        "0U1U(0(1U0)*0)U(1(0U1)*1)",
                        "0U1U(0(1U0)*0)U(1(1U0)*1)",
                        
                        "0U1U(1(0U1)*1)U(0(0U1)*0)",
                        "0U1U(1(1U0)*1)U(0(0U1)*0)",
                        "0U1U(1(0U1)*1)U(0(1U0)*0)",
                        "0U1U(1(1U0)*1)U(0(1U0)*0)",
                        
                        "0U1U(0(0*1*)*0)U(1(0*1*)*1)",
                        "0U1U(0(0*1*)*0)U(1(1*0*)*1)",
                        "0U1U(0(1*0*)*0)U(1(0*1*)*1)",
                        "0U1U(0(1*0*)*0)U(1(1*0*)*1)",
                        
                        "0U1U(1(0*1*)*1)U(0(0*1*)*0)",
                        "0U1U(1(1*0*)*1)U(0(0*1*)*0)",
                        "0U1U(1(0*1*)*1)U(0(1*0*)*0)",
                        "0U1U(1(1*0*)*1)U(0(1*0*)*0)",

                        
                        "1U0U(0(0U1)*0)U(1(0U1)*1)",
                        "1U0U(0(0U1)*0)U(1(1U0)*1)",
                        "1U0U(0(1U0)*0)U(1(0U1)*1)",
                        "1U0U(0(1U0)*0)U(1(1U0)*1)",
                        
                        "1U0U(1(0U1)*1)U(0(0U1)*0)",
                        "1U0U(1(1U0)*1)U(0(0U1)*0)",
                        "1U0U(1(0U1)*1)U(0(1U0)*0)",
                        "1U0U(1(1U0)*1)U(0(1U0)*0)",
                        
                        "1U0U(0(0*1*)*0)U(1(0*1*)*1)",
                        "1U0U(0(0*1*)*0)U(1(1*0*)*1)",
                        "1U0U(0(1*0*)*0)U(1(0*1*)*1)",
                        "1U0U(0(1*0*)*0)U(1(1*0*)*1)",
                        


                        "1U0U1(0*1*)*1U0(0*1*)*0",
                        "1U0U1(1*0*)*1U0(0*1*)*0",
                        "1U0U1(0*1*)*1U0(1*0*)*0",
                        "1U0U1(1*0*)*1U0(1*0*)*0",

                        
                        "0U1U0(0U1)*0U1(0U1)*1",
                        "0U1U0(0U1)*0U1(1U0)*1",
                        "0U1U0(1U0)*0U1(0U1)*1",
                        "0U1U0(1U0)*0U1(1U0)*1",
                        
                        "0U1U1(0U1)*1U0(0U1)*0",
                        "0U1U1(1U0)*1U0(0U1)*0",
                        "0U1U1(0U1)*1U0(1U0)*0",
                        "0U1U1(1U0)*1U0(1U0)*0",
                        
                        "0U1U0(0*1*)*0U1(0*1*)*1",
                        "0U1U0(0*1*)*0U1(1*0*)*1",
                        "0U1U0(1*0*)*0U1(0*1*)*1",
                        "0U1U0(1*0*)*0U1(1*0*)*1",
                        
                        "0U1U1(0*1*)*1U0(0*1*)*0",
                        "0U1U1(1*0*)*1U0(0*1*)*0",
                        "0U1U1(0*1*)*1U0(1*0*)*0",
                        "0U1U1(1*0*)*1U0(1*0*)*0",

                        
                        "1U0U0(0U1)*0U1(0U1)*1",
                        "1U0U0(0U1)*0U1(1U0)*1",
                        "1U0U0(1U0)*0U1(0U1)*1",
                        "1U0U0(1U0)*0U1(1U0)*1",
                        
                        "1U0U1(0U1)*1U0(0U1)*0",
                        "1U0U1(1U0)*1U0(0U1)*0",
                        "1U0U1(0U1)*1U0(1U0)*0",
                        "1U0U1(1U0)*1U0(1U0)*0",
                        
                        "1U0U0(0*1*)*0U1(0*1*)*1",
                        "1U0U0(0*1*)*0U1(1*0*)*1",
                        "1U0U0(1*0*)*0U1(0*1*)*1",
                        "1U0U0(1*0*)*0U1(1*0*)*1",
                        
                        "1U0U1(0*1*)*1U0(0*1*)*0",
                        "1U0U1(1*0*)*1U0(0*1*)*0",
                        "1U0U1(0*1*)*1U0(1*0*)*0",
                        "1U0U1(1*0*)*1U0(1*0*)*0"
                    ]
                },
                {
                    "text":"Fie L limbajul {w in {0,1}*. numarul de 0 din w este egal cu numarul de 1 din w}. Care din urmatoarele afirmatii sunt adevarate?",
                    "options": [
                        "L este un limbaj finit",
                        "L = L*",
                        "L = {0, 1}*",
                        "L = {1, 0}*",
                        "L = LL"
                    ],
                    "correct": [
                        "L = L*",
                        "L = LL"
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
        },
        {
            "name": "Examen (slot 1)",
            "questions": [
                {
                    "text":"Fie A un limbaj independent de context si B un limbaj regulat. Care din urmatoarele limbaje sunt independente de context?",
                    "options": [
                        "A \\ B",
                        "BA",
                        "A intersectat cu B",
                        "AB",
                        "B \\ A"
                    ],
                    "correct": [
                        "A \\ B",
                        "BA",
                        "A intersectat cu B",
                        "AB"
                    ]
                },
                {
                    "text":"Scrieti o expresie regulata care genereaza limbajul numerelor impare codificate in binar care incep si se termina cu acelasi simbol."
                    + "<br> FOLOSITI DOAR CARACTERELE: {0,1,*,(,),U}. NU FOLOSITI SPATII ALBE.",
                    "isField": true,
                    "isRegex": true,
                    "allowed": [
                        "0", "1", "*", "(", ")", "U"
                    ],
                    "correct": [
                        "1U1(0U1)*1",
                        "1U1(1U0)*1",
                        "1U1(0*1*)*1",
                        "1U1(1*0*)*1",

                        "1U(1(0U1)*1)",
                        "1U(1(1U0)*1)",
                        "1U(1(0*1*)*1)",
                        "1U(1(1*0*)*1)",

                        "1(0U1)*1U1",
                        "1(1U0)*1U1",
                        "1(0*1*)*1U1",
                        "1(1*0*)*1U1"
                    ]
                },
                {
                    "text":"Care afirmatie este adevarata priviot la urmatorul automat finit:",
                    "img": "Examen_slot1_1.png",
                    "options": [
                        "automatul este unul finit nedeterminist",
                        "automatul accepta limbajul vid",
                        "automatul accepta limbajul {w in {a,b}*. #a(w) = 2k, cu k >= 0}",
                        "automatul accepta limbajul L((ab*a)*)",
                        "automatul este unul finit determinist",
                        "functia de tranzitie nu este totala"
                    ],
                    "correct": [
                        "automatul accepta limbajul {w in {a,b}*. #a(w) = 2k, cu k >= 0}",
                        "automatul este unul finit determinist"
                    ]
                },
                {
                    "text":"Fie A un automat push-down ce are urmatorul comportament: in momentul in care pozitia k de pe stiva este scrisa,"
                    + "<br>toate pozitiile anterioare sunt sterse automat si nu mai pot recuperate. Stiind ca fiecarui astfel de automat ii asociem"
                    + "<br>un numarul natural fix k (notam acest lucru Ak), care sunt toate afirmatiile adevarate despre L(Ak)?",
                    "options": [
                        "L este independent de context",
                        "L este regulat",
                        "L este dependent de context",
                        "L este vid",
                        "L contine doar cuvinte de lungime mai mica sau egala decat k",
                        "L este finit"
                    ],
                    "correct": [
                        "L este independent de context",
                        "L este regulat",
                        "L este dependent de context"
                    ]
                },
                {
                    "text":"Care din cele de mai jos pot fi folosite pentru a arata ca limbajul {xyx . x in {0,1}* iar y in L(0*)} nu este regulat?",
                    "options": [
                        "wn = 0^{2n} cu k = 2",
                        "wn = 1^n01^n cu k = 2",
                        "wn = 01^n01^n cu k = 0",
                        "wn = 10^n1 cu k = 0"
                    ],
                    "correct": [
                        "wn = 1^n01^n cu k = 2"
                    ]
                },
                {
                    "text":"Care din urmatorii algoritmi au timpul de executie worst-case exponential?",
                    "options": [
                        "Algoritmul de conversie a unei expresii regulate la AFD",
                        "Algoritmul de conversie al unui APD la gramatic independenta de context",
                        "Algoritmul Brzozovsky de minimizare a unui AFD (min(A) = reverse(det(reverse(det(A))))",
                        "Algoritmul de conversie a unei gramatici independente de context la APD"
                    ],
                    "correct": [
                        "Algoritmul de conversie a unei expresii regulate la AFD",
                        "Algoritmul Brzozovsky de minimizare a unui AFD (min(A) = reverse(det(reverse(det(A))))"
                    ]
                },
                {
                    "text":"Fie N un AFN. Cum putem verifica daca L(N) este un limbaj finit?",
                    "options": [
                        "verificam daca N nu contine sink states.",
                        "verificam daca N contine cai accesibile de la starea initiala la cea finala",
                        "verificam daca N contine un numar finit de stari",
                        "verificam daca conversia lui N la AFD contine acelasi numar de stari ca A",
                        "verificam daca conversia lui N la AFD nu contine cicluri (inafara sink-urilor)"
                    ],
                    "correct": [
                        "verificam daca conversia lui N la AFD nu contine cicluri (inafara sink-urilor)"
                    ]
                },
                {
                    "text":"Fie gramatica G in Forma Normala Chomsky definita peste alfabetul {a,b}*" +
                    "<br> astfel: V = {S,X,A,B,a,b} unde S este simbolul de start iar R contine regulile A <- a" +
                    "<br> si B <- b. Adaugati regulile necesare pentru ca G sa ramana in Forma Normala Chomsky si" +
                    "<br> sa genereze limbajul {a^nb^m, 1 <= m <= n}" +
                    "<br> SE VA SCRIE IN FORMA SIMPLA, FARA SPATII SAU LITERE IN PLUS, DOAR LITERE MARI si \<,-|ab",
                    "isField": true,
                    "isRegex": false,
                    "allowed": [
                        "S", "<", "-", "|", "X", "a", "b", "A", "B",","
                    ],
                    "correct": [
                        "S<-AX|AS|AB,X<-SB",
                        "S<-AX|AB|AS,X<-SB",
                        "S<-AB|AX|AS,X<-SB",
                        "S<-AB|AS|AX,X<-SB",
                        "S<-AS|AB|AX,X<-SB",
                        "S<-AS|AX|AB,X<-SB",

                        "X<-SB,S<-AX|AS|AB",
                        "X<-SB,S<-AX|AB|AS",
                        "X<-SB,S<-AB|AX|AS",
                        "X<-SB,S<-AB|AS|AX",
                        "X<-SB,S<-AS|AB|AX",
                        "X<-SB,S<-AS|AX|AB",

                        
                        "S<-AX|AS|a,X<-SB",
                        "S<-AX|a|AS,X<-SB",
                        "S<-a|AX|AS,X<-SB",
                        "S<-a|AS|AX,X<-SB",
                        "S<-AS|a|AX,X<-SB",
                        "S<-AS|AX|a,X<-SB",

                        "X<-SB,S<-AX|AS|a",
                        "X<-SB,S<-AX|a|AS",
                        "X<-SB,S<-a|AX|AS",
                        "X<-SB,S<-a|AS|AX",
                        "X<-SB,S<-AS|a|AX",
                        "X<-SB,S<-AS|AX|a"
                    ]
                },
                {
                    "text":"Care afirmatie este adevarata privitor la urmatorul automat cu stiva A:",
                    "img":"Examen_slot1_2.png",
                    "options": [
                        "A accepta prin stare finala toate cuvintele w, pentru care #a(w) \> #b(w)",
                        "A accepta prin stiva vida toate cuvintele w, pentru care #a(w) = #b(w)",
                        "A accepta prin stiva vida toate cuvintele w, pentru care #a(w) \> #b(w)",
                        "A accepta prin stare finala toate cuvintele w, pentru care #a(w) \< #b(w)",
                        "A accepta prin stiva vida toate cuvintele w, pentru care #b(w) \> #a(w)",
                        "A accepta prin stare finala toate cuvintele w, pentru care #a(w) = #b(w)"
                    ],
                    "correct": [
                        "A accepta prin stare finala toate cuvintele w, pentru care #a(w) \> #b(w)",
                        "A accepta prin stiva vida toate cuvintele w, pentru care #b(w) \> #a(w)"
                    ]
                },
                {
                    "text":"Care din urmatoarele gramatici sunt ambigue?",
                    "options": [
                        "S <- abS | Sba | aS | epsilon",
                        "S <- aS | Sa | epsilon",
                        "S <- aSb | bSa | epsilon",
                        "S <- aS | Sb | SS | epsilon"
                    ],
                    "correct": [
                        "S <- abS | Sba | aS | epsilon",
                        "S <- aS | Sa | epsilon",
                        "S <- aS | Sb | SS | epsilon"
                    ]
                },
                {
                    "text":"Fie o gramatica G avand doi non-terminali (S si X) si regulile:"
                    + "<br> S<-bS|X|epsilon. Definiti o regula pentru X astfel incat G sa"
                    + "<br> genereze limbajul acceptat de AF-ul de mai jos.",
                    "img":"Examen_slot1_1.png",
                    "isField": true,
                    "isRegex": false,
                    "allowed": [
                        "S", "<", "-", "X", "a", "b", ","
                    ],
                    "correct": [
                        "X<-aSaS"
                    ]
                },
                {
                    "text":"Fie A un Automat Finit Determinist si B rezultatul aplicari unui algoritm de" 
                    + "<br>minimizare asupra A. Care afirmatii sunt adevarate?",
                    "options": [
                        "L(A) = L(B)",
                        "L(B) este un limbaj regulat",
                        "daca numarul de stari al lui B este egal cu cel al lui A, atunci A este un automat minimal",
                        "B poate avea un numar exponential de stari in raport cu A",
                        "numarul de stari al lui B este mai mic sau egal cu al lui A"
                    ],
                    "correct": [
                        "L(A) = L(B)",
                        "L(B) este un limbaj regulat",
                        "daca numarul de stari al lui B este egal cu cel al lui A, atunci A este un automat minimal",
                        "numarul de stari al lui B este mai mic sau egal cu al lui A"
                    ]
                },
                {
                    "text":"Fie G o gramatica in Forma Normala Chomsky, si w un cuvant din L(G). Care afirmatii sunt adevarate?",
                    "options": [
                        "|w| <= 2^h - 1 (lungimea lui w), unde h este adancimea arborelui de parsare",
                        "fiecare nod din arborele de parsare are cel mult doi copii",
                        "fiecare nod din arborele de parsare are exact doi copii",
                        "oricare derivare a cuvantului w este o derivare stanga"
                    ],
                    "correct": [
                        "|w| <= 2^h - 1 (lungimea lui w), unde h este adancimea arborelui de parsare",
                        "fiecare nod din arborele de parsare are cel mult doi copii"
                    ]
                },
                {
                    "text":"Fie urmatoarea gramatica independenta de context: S <- 0S1S | X | epsilon"
                    + "<br> Definiti o regula pentru X astfel incat gramatica sa genereze limbajul binar in"
                    + "<br> care numarul de biti 0 este egal cu numarul de biti 1",
                    "isField": true,
                    "isRegex": false,
                    "allowed": [
                        "S", "<", "-", "X", "1", "0", ","
                    ],
                    "correct": [
                        "X<-1S0S"
                    ]
                },
                {
                    "text":"Care din cele de mai jos sunt limbaje regulate?",
                    "options": [
                        "L = {uv, unde u,v apartin L(A), iar A este un Automat Finit Determinist}",
                        "{w in {0,1}*, w este un palindrom de lungime impara}",
                        "{w . w este cel mai lung prefix comun al cuvintelor u,v unde u apartine A, v apartine B, iar A si B sunt limbaje regulate}",
                        "L = {w in {0,1}*, unde #0(w) > #1(w)}",
                        "orice limbaj definit peste un alfabet cu un singur simbol"
                    ],
                    "correct": [
                        "L = {uv, unde u,v apartin L(A), iar A este un Automat Finit Determinist}",
                        "{w . w este cel mai lung prefix comun al cuvintelor u,v unde u apartine A, v apartine B, iar A si B sunt limbaje regulate}"
                    ]
                },
                {
                    "text":"Care din cele de mai jos sunt proprietati de inchidere pentru limbaje independente de context?",
                    "options": [
                        "Kleene Star",
                        "reuniunea cu un limbaj regulat",
                        "intersectia",
                        "reverse",
                        "concatenarea"
                    ],
                    "correct": [
                        "Kleene Star",
                        "reuniunea cu un limbaj regulat",
                        "reverse",
                        "concatenarea"
                    ]
                },
                {
                    "text":"Fie limbajul A={ww^R}, B = L(0*1*) si C = A intersectat cu B. Care din urmatoarele afirmatii sunt adevarate privitor la C?",
                    "options": [
                        "C contine doar cuvinte de lungime para",
                        "C continue un numar de 0 egal cu numarul de 1",
                        "C este un limbaj regulat",
                        "putem folosi cuvantul 0^n1^{2n}0^n pentru a demonstra folosind lema de pompare ca limbajul C este independent de context"
                    ],
                    "correct": [
                        "C contine doar cuvinte de lungime para",
                        "C este un limbaj regulat"
                    ]
                },
                {
                    "text":"Care din urmatorii algoritmi au timpul de executie worst-case exponential?",
                    "options": [
                        "Algoritmul CYK de verificare a apartenentei unui cuvant w la limbajul L(G) a unei gramatici date",
                        "Algoritmul de minimizare bazat pe echivalenta starilor",
                        "Algoritmul Subset Construction de conversie a unui AFN intr-un AFD",
                        "Algoritmul Thomson de conversie a unei expresii regulate intr-un AFN"
                    ],
                    "correct": [
                        "Algoritmul Subset Construction de conversie a unui AFN intr-un AFD"
                    ]
                },
                {
                    "text":"Care din urmatoarele masini pot accepta limbajul {ww . w in {0,1}*}?",
                    "options": [
                        "Automat Finit Nedeterminist",
                        "Masina Turing",
                        "Automat Finit Determinist",
                        "Automat Push-Down (cu stiva)"
                    ],
                    "correct": [
                        "Masina Turing"
                    ]
                },
                {
                    "text":"Care din afirmatiile urmatoare sunt adevarate cu privire la simbolul ⊦ (one-step),"
                    + "<br> definit la Automate Push-Down (APD)?",
                    "options": [
                        "⊦ defineste multimea simbolilor stivei unui APD",
                        "⊦ defineste functia de tranzitie a unui APD",
                        "⊦ este folosita pentru a descrie efectul unei tranzitii a unui APD",
                        "⊦ este folosita pentru a descrie continutul stivei in timpul computatiei unui APD",
                        "⊦ este o relatie binara peste configuratiile unui APD"
                    ],
                    "correct": [
                        "⊦ este folosita pentru a descrie efectul unei tranzitii a unui APD",
                        "⊦ este o relatie binara peste configuratiile unui APD"
                    ]
                },
                {
                    "text":"Alegeti un cuvant si o valoare k cu care putem demonstra folosind lema de"
                    + "<br> pompare ca limbajul A intersectat cu B nu este regulat. A = {ww^R . w in {0,1}*}"
                    + "<br> iar B = {ww . w in {0,1}*}. Scrieti raspunsul sub forma wn=...,k=... unde w_n va"
                    + "<br> contine numere si semnul ^ iar k va fi un numar.",
                    "isField": true,
                    "isRegex": false,
                    "allowed": [
                        "w", "n", "k", "=", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "^", ","
                    ],
                    "correct": [
                        "wn=0^n10^2n10^n,k=0",
                        "wn=1^n01^2n01^n,k=0",
                        "wn=01^n001^n0,k=0",
                        "wn=10^n110^n1,k=0"
                    ]
                },
                {
                    "text":"Care afirmatie este adevarata privitor la urmatorul automat finit:",
                    "img": "Examen_slot1_3.png",
                    "options": [
                        "automatul este finit determinist",
                        "automatul este minimal",
                        "algoritmul subset construction va genera (inclusiv sink-states) 4 stari accesibile",
                        "algoritmul subset construction va genera (inclusiv sink-states) 3 stari accesibile",
                    ],
                    "correct": [
                        "algoritmul subset construction va genera (inclusiv sink-states) 4 stari accesibile"
                    ]
                },
                {
                    "text":"Care din urmatoarele expresii regulate sunt echivalente?",
                    "options": [
                        "(0*1*)*",
                        "(0*1 U 1*0)*",
                        "((00)* U (11)*)*",
                        "(0 U 1)*",
                        "(0*(0 U 1)1*)*"
                    ],
                    "correct": [
                        "(0*1*)*",
                        "(0*1 U 1*0)*",
                        "(0 U 1)*",
                        "(0*(0 U 1)1*)*"
                    ]
                }
            ]
        }
    ]
}