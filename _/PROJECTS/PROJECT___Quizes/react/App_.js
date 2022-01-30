import React, {useRef, useState, useEffect, useLayoutEffect, useCallback, useMemo, useContext} from 'react'
import { render, createPortal } from 'react-dom'
import "regenerator-runtime/runtime.js";






//EXO pas encore réussi
const MyProvider = React.createContext({
    handle: ()=>{},
    obj: {}
})
export default function Exo(){
    const [val, setVal] = useState({name:"Doe", firstName:"John"})
    const handle = useCallback(function(e){
        console.log(e);
        // setVal()
    })


    return <MyProvider.Provider v={()=>({handle,value:val})}>
        <FormContext defaultValue={{name:"Doe", firstName:"John"}} onSubmit={handle}>
            <FormField name="name">Nom</FormField>
            <FormField name="firstName">Prénom</FormField>
            <PrimaryButton>Send</PrimaryButton>
        </FormContext>
    </MyProvider.Provider>
}
function FormContext({children}){
    return <MyProvider.Consumer>
        {v=><form onSubmit={v.handle}>
            {children}
        </form>
        }
    </MyProvider.Consumer>
}
function FormField(){
    return "FormField"
}
function PrimaryButton() {
    return <div>
        <button>
            "PrimaryButton"
        </button>
            
    </div>
}


const context = {un: "je suis un", deux: "je suis deux", trois: "je suis trois"}
const ThemeContext = React.createContext({
    theme: context.un,
    toggle: ()=>{}
})
console.log(ThemeContext);
/*export default */function Un(){
    // return <div>
    //     <button className={context.un}>un boutton</button>
    //     <Deux theme={context} />
    // </div>
    const [theme, setTheme] = useState("un")
    const toggle = useCallback(function(){
        setTheme(t=>t==='un'?'deux':'un')
    })
    const currentTheme = useMemo(function(){
        return {
            theme: context[theme],
            toggle
        }
    }, [theme, toggle])
    // const currentTheme = context[theme]


    return <ThemeContext.Provider value={currentTheme}>
        <div>
            <button className={context.un}>un boutton</button>
            <Deux />
        </div>
        <SwitchButton>toggle</SwitchButton>
    </ThemeContext.Provider>
}
function Deux(props) {
    return <div>
        {/* <button className={props.theme.deux}>2button</button> */}
        <ButtonContext>2button</ButtonContext>
        <ButtonClassContext>2button</ButtonClassContext>
        <Trois />
    </div>
}
function Trois(props) {
    return <div>
        <ButtonContext___>3button</ButtonContext___>
        <ButtonClassContext___>3button</ButtonClassContext___>
    </div>
}
function SwitchButton(){
    const {toggle} = useContext(ThemeContext)
    return <button onClick={toggle}>toggle</button>
}
function ButtonContext({children}){
    return <ThemeContext.Consumer>
        {value=>{
            return <button test={"okok!!_"+value.theme} className={value.theme}>{children}</button>
        }}
    </ThemeContext.Consumer>
}
function ButtonContext___({children}){
    const {theme} = useContext(ThemeContext)
    return <button test={"okok??_"+theme} className={theme}>{children}</button>
}
/* ButtonContext ET ButtonContext___  DONNENT LE MÊME RÉSULTAT*/
class ButtonClassContext extends React.Component{

    render(){
        const {children} = this.props
        return <ThemeContext.Consumer>
            {val=>{
                return <button test="okokCLASS" className={val.theme}>{children}</button>
            }}
        </ThemeContext.Consumer>
    }
}
class ButtonClassContext___ extends React.Component{

    render(){
        const {children} = this.props
        const {theme} = this.context
        return <button test="okokCLASS___" className={theme}>{children}</button>
        // const value = this.context
        // return <button test="okokCLASS___" className={value}>{children}</button>
    }
}
ButtonClassContext___.contextType = ThemeContext
class Yo extends React.Component{
    render(){
        const child="oui"
        return <button>{this.props.children}</button>
    }
}



function TestModal(){

    const modalit = (e) => {
        e.target.addEventListener('shown.bs.modal', function () {
            ok.focus()
        })
    }

    useEffect(()=>{

    }, [])
    return <div id="testModal">
        <p>Je suis un test pour le portail de react</p>
        <p>en cliquant sur le lien suivant je vais rediriger la sortie vers un autre élément DOM !!</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <MyModal target={document.body} />
        <div id="out"></div>
    </div>
}
function MyModal(props){
    return createPortal(<>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>,
    props.target)
}


class PureClass extends React.PureComponent {
    constructor(props) {
        super(props);
        
    }
    render(){
        console.log('pure oui');
        return <div {...this.props}>
            PureClass
        </div>
    }
}




const PureFunction = React.memo(function(props){
    console.log('pure');
    return <div {...props}>
            PureFunction
        </div>
})
function Purecomp(){
    console.log("rendering");
    let ok="oui"
    const cb = useCallback(() => {
        alert('ok')
    }, [])
    const cb_ = () => {
        alert('ok')
        ok="noin"
    }
    return <div>
        yes
        <PureClass onClick={cb}/>
        <PureFunction onClick={cb}/>
        {/* <PureClass onClick={cb_}/>
        <PureFunction onClick={cb_}/> */}
    </div>
}


/*export default */function Parent(){
    console.log(('rerender'));

    const child_input = useRef()
    let count = 0
    let [count_, setCount_] = useState(0)
    let ef = useEffect(()=>{
        console.log(('useEffect'));
        document.body.style.background="green"
        ok.click()
        const ti = setInterval(()=>{console.log('interval'+count_)},1000)
        return ()=>{
            clearInterval(ti)
        }
    },[count_])
    let lef = useLayoutEffect(()=>{
        console.log("useLayoutEffect");
        document.body.style.background="brown"
        // setTimeout(()=>{alert('ok')},2000)
    })

    let ask = function(e){
        console.log(child_input);

    }
    const do_count = useCallback(()=>{
        setCount_(c=>c+1)
        console.log(count_);
    })
    
    return <div>
        <Child oo={child_input}/>
        {/* <span ref={child_input}>{count}</span> */}
        <button id="ok" onClick={ask}>log span</button>
        <button onClick={do_count}>increment {count_}</button>
        {/* {count_} */}
        <Purecomp />
    </div>
}
function Child(props){
    const parent_ref = props.oo

    return <section ref={parent_ref}>
        i am the child
    </section>
}
// setTimeout(()=>{render(<div>oui</div>,document.querySelector('#root'))},8000)















function useIncrement(init, step) {
    const [count, setCount] = useState(init)
    const increment = () => {
        setCount(c=>c+step)
    }
    return [count, increment]
}


function Compteur(){
    const [count, setCount] = useState(0)
    const [hook, setHook] = useIncrement(0,2)
    const handleClick = function(e){
        setCount(count=>count+1)
        // setCount(count+1)
    }
    useEffect(()=>{
        const timer = setInterval(()=>{
            document.title = "okay: "+hook
            console.log('ok')
            setHook()
        }, 5000)
        return function(){
            clearInterval(timer)
        }
    },[])

    // return <button onClick={handleClick}>btn {hook}</button>
    return <button onClick={setHook}>btn {hook}</button>
    // return <button onClick={}>STOP</button>
}
// setTimeout(()=>{render(<div>oui</div>,document.querySelector('#root'))},10000)



function useIncrementer(init, step){
    const [count, setCount] = useState(init)
    function increment(){
        return setCount(()=>count + step)
    }
    return [count, increment]
}
function useToggle(init){
    const [bool, toggleBool] = useState(init)
    function toggle(){
        console.log(bool);
        toggleBool(v=>!v)
        // console.log(compteurVisible);
    }
    return [bool, toggle]
}
function useFetch(array=[]){
    const [value, setValue] = useState(array)
    function setFetch(v){
        // value = await fetch(url)
        console.log(v);
        console.log(value);
        // setValue(v=>v)
        console.log(value);
    }
    return [value, setFetch]
}
function useFetche(init, url){
    const [value, setValue] = useState(init)
    const [loading, setLoading] = useState(true)
    
    async function setFetch(url){
        let a = await fetch(url)
        let b = await a.json()
        console.log(a);
        console.log(b);
        if(a.ok)setValue(b)
        else alert(JSON.stringify(b))
        console.log(value);
        setLoading(false)
    }
    function ok(url){
        console.log(url);
        if(url)setValue(100)
        else setValue(3)
    }
    // return [value, ok]
    return [value, loading, setFetch]
}
/*export default */function Encoreun(){
    const [mon, useMon] = useIncrementer(0,2)
    const [compteurVisible, toggle] = useToggle(true)
    // const [fetched, setFetch] = useFetch([])
    const [fetcheed, loading, setFetche] = useFetche([])
    // const [loading, setLoading] = useState(true)

    const [test, setTest] = useState([])

    // console.log(test);
    // useEffect(() => {
    //     setFetche('https://jsonplaceholder.typicode.com/todos')
    // }, [])
    // setTimeout(()=>{alert('iii');console.log(fetcheed);},2000)
    // console.log(fetcheed);
    
    // setTimeout(()=>useMon())

    useEffect(() => {
        setFetche('https://jsonplaceholder.typicode.com/todos')
        return ()=>{alert('composant entrain d\'être démonté: une fonction qui se charge de son propre nettoyage')}
    },[])

    // if(loading)return <div>Chargement....</div>
    function show(){
        console.log(fetcheed);
    }
    return <div>
        {compteurVisible && <Compteur />}
        <input type="checkbox" checked={compteurVisible} onChange={toggle} />
        <button onClick={()=>{setFetche('https://jsonplaceholder.typicode.com/todos')}}>incr: {mon}</button>
        <button onClick={show}></button>
        {loading&&<div>charge....</div>}
        <ul>
            {fetcheed.map(e=>(
                <li>
                    <span>{e.id}</span>
                    <span>{e.title}</span>
                    <span>{e.usedId}</span>
                    <span>{e.completed}</span>
                </li>
            ))}
        </ul>
    </div>
}
// setTimeout(()=>{render(<div>okok composant rechargé</div>, document.querySelector('#root'))},3000)

/********************************************* */
/********************************************* */
/********************************************* */

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // Crée une référence pour stocker l’élément DOM textInput
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
      console.log(this.textInput);
    }
  
    focusTextInput() {
      // Donne explicitement le focus au champ texte en utilisant l’API DOM native.
      // Remarque : nous utilisons `current` pour cibler le nœud DOM
      this.textInput.current.focus();
    }
  
    render() {
      // Dit à React qu’on veut associer la ref `textInput` créée
      // dans le constructeur avec le `<input>`.
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Donner le focus au champ texte"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
}


class CRef extends React.Component {
    constructor(props) {
        super(props);
        this.theRef = this.props.myRef

      
    }

    ok = () => {
        console.log(this.theRef);
        console.log("je suis là");
        this.theRef.current.style.background="red"
    }

    render(){
        return(
            <input ref={this.props.myRef} onClick={this.ok} />
            // <input ref={this.theRef} />
        )
    }
}
class TestRefClass extends React.Component{
    constructor(props) {
        super(props);
        this.ref = React.createRef()
        this.refClass = React.createRef()
      
    }
    handleClick = () => {
        this.refClass.current.click()
        console.log(this.refClass);
    }
    render(){
        console.log(this.refClass.current);

        return<div ref={this.ref} onClick={this.handleClick}>
            <CRef myRef={this.refClass} />
            je suis un composant CLASS
            <input
                type="button"
                value="Donner le focus au champ texte"
                onClick={this.handleClick}
            />
        </div>
    }
}
function TestRefFunc(props){

    const ref = React.createRef()
    console.log(ref);

    return<div>
        {/* <_MyRef ref={ref} >je suis un élément React composant FUNCTION</_MyRef> */}
        <div>je suis un div composant FUNCTION</div>
    </div>
}

const _MyRef = React.forwardRef(()=>MyRef)
// const _MyRef = React.forwardRef((props, ref) => (
//     <button ref={ref}>{props.children}</button>
// ))
const MyRef = (props, ref) => (
    <button ref={ref}>{props.children}</button>
)
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
));

// Vous pouvez maintenant obtenir une ref directement attachée au bouton DOM :
const ref = React.createRef();
<FancyButton ref={ref}>Cliquez ici</FancyButton>;
console.log(ref);



/*export default */class App extends React.Component{
    constructor(props){
        super(props)
        // let {type,  json} = props
        this.TestRefClass = React.createRef()
        this.TestRefFunc = React.createRef()

        /*
        const blockComponents = {
            consigne:{},
            question:{},
            choices:{},
            responses:{},
            indice:{},
            explanation:{},
            validation:{},
        }
        // alert(type)
        // console.log(json)

        console.log(json_oc)
        this.quizPartie1 = json_oc[0]
        
        this.quizPartie1 = this.quizPartie1.map((e,i)=>{
            return [
                blockComponents.question = this.getQuestion(e, i),
                blockComponents.choices = this.getChoices(e, i)
            ]
        })
        */

    }
    
    /*
    getConsigne = () => {
        
    }

    getQuestion = (quizFrame, index) => {
        return (
            <Question key={index} response_={quizFrame.explain} question={quizFrame.question}></Question>
        )
    }

    getChoices = (quizFrame, index) => {
        let checkbox = quizFrame.responses.filter(e=>e==1).length > 1 ? true : false
        return (
            <form key={"_"+index}>
                {quizFrame.choices.map((e,i)=>{
                    return (
                        <div key={index}>
                            <label for={"question"+index+"_"+i}>{e}</label>
                            <input id={"question"+index+"_"+i} name={"question"+index} type={checkbox ? "checkbox" : "radio"} />
                        </div>
                    )
                })}
            </form>
        )
    }

    getResponse_ = (quizFrame, index) => {

    }

    getIndices = (quizFrame, index) => {

    }
    
    getExplanation = (quizFrame, index) => {

    }

    getValidation = (quizFrame, index) => {

    }
    */


    render(){
        return (
            <>
                {/* <Compteur />
                <TestRefClass ref={this.testRefClass}/>
                <TestRefFunc ref={this.testRefFunc}/> */}
                <header className="navbar navbar-expand-sm navbar-light bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">primary</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" aria-current="page" href="#">un</a>
                                <a className="nav-link" aria-current="page" href="#">Deux</a>
                                <TestModal />
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                </main>
            </>
        )
    }
}