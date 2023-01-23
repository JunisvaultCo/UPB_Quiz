
//class AST
//left will be filled first
//right can be null
//type

//class NFA
//transitions[node] list
//nodes list
//final
//start will always be 0

//class DFA
//transitions[node][0] transitions[node][1]
//nodes list
//final
//start will always be 0

function parseRegexAST(reg)
{
    
}

function ASTtoNFA(ast)
{
    switch (ast.type) {
        case "STAR":
        break;
        case "UNION":
        break;
        case "CONCAT":
        break;
        default:
            
        break;
    }
}

function NFAtoDFA(nfa)
{
    
}

function minimiseDFA(dfa)
{

}

function RegexToMinimisedDFA(reg)
{
    let ast = parseRegexAST(reg);
    let nfa = ASTtoNFA(ast);
    let dfa = minimiseDFA(NFAtoDFA(nfa));
    return dfa;
}

function verifyRegex(test, correct)
{
    let testD = RegexToMinimisedDFA(test);
    let correctD = RegexToMinimisedDFA(correct);
    //rename state names

    //verify if adjacency list is the same
}