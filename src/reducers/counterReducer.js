import {SHOW_DETAIL, HIDE_DETAIL, CATCH_POKE, SHOW_BACKPACK,HIDE_BACKPACK, ADD_POKELIST} from '../actions/ActionType';

let istate = {
  value:1, 
  detail:false,
  backpack: false,
  pkid: 1,
  pokelistmap: {},
  catchlist:[]
}

const counterReducer = (state = istate, action) => {
  switch (action.type) {
    case HIDE_DETAIL:
      return{
        ...state,
        detail: false
      }
      case SHOW_DETAIL:
      return{
        ...state,
        detail: true,
        pkid: action.payload
      }
      case CATCH_POKE:
        let url = `https://pokeapi.co/api/v2/pokemon/${action.payload}/`
         let temp = []
         let obj = {}
         obj["url"] = url
         obj["name"] = state.pokelistmap[url]
         return{
           ...state,
           catchlist: [...state.catchlist, obj]
         }
         return state
      case HIDE_BACKPACK:
        return{
          ...state,
          backpack:false
        }
      case SHOW_BACKPACK:
      return{
        ...state,
        backpack:true
      }
      case ADD_POKELIST:
        
        return{
          ...state,
          pokelistmap:{...action.payload}
        }
    default:
      return state
  }
}

export default counterReducer;
