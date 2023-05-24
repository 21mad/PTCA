import { connect } from "react-redux";

// Action creator
function performAction(action){
    return { type: "PERFORM_ACTION", name: action }
}

function performAction2(action){
    return {type: "PERFORM_ACTION2", name: action}
}

// Machine state changer

function Machine(props){
    function handleClick(e){
        props.performAction(e.target.value);
        props.performAction2(e.target.value);
        let signal = document.getElementById('signal');
        signal.textContent = e.target.value;
        // e.target.
    }

    return(
        <>  
            <div>
                Произвести входной сигнал:
                <button value="a" onClick={handleClick}>A</button>
                <button value="b" onClick={handleClick}>B</button>
                <button value="res" onClick={handleClick}>Reset</button>
            </div>
            <div>
                <h2>Текущий входной сигнал: <span id="signal" style={{color: 'green'}}>-</span></h2>
            </div>
            <div className="machines" style={{paddingLeft: '30px'}}>
                <div className="machine">
                    <h1>Автомат S1</h1>
                    <div className="col-2">
                        Состояние: <h3>{props.machineState}</h3>
                        Выходной сигнал: <h3 style={{color: 'red'}}>{props.machineOutput}</h3>
                    </div>
                </div>
                <div className="machine">
                    <h1>Автомат S2</h1>
                    <div className="col-2">
                        Состояние: <h3>{props.machineState2}</h3>
                        Выходной сигнал: <h3 style={{color: 'red'}}>{props.machineOutput2}</h3>
                    </div>
                </div>
            </div>
            <div>
                <h2>Текущий выходной сигнал: <span style={{color: 'red'}}>{props.machineOutput + props.machineOutput2}</span></h2>
            </div>
        </>
    )
}

function mapStateToProps(state){
    return {
        machineState: state.machineState,
        machineOutput: state.machineOutput,
        machineState2: state.machineState2,
        machineOutput2: state.machineOutput2
    };
}

const mapDispatchToProps = {
    performAction,
    performAction2
}

export default connect(mapStateToProps, mapDispatchToProps)(Machine);