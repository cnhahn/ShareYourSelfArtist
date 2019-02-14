// this prevents a signed-in user from accessing home or sign in page
import { store } from '../store'
import { firebase } from '@firebase/app';
import { isNullOrUndefined } from 'util';

export default (to, from, next) => {
    
//console.log('userId: ' + localStorage.getItem('userId'))
/*console.log('user:')
console.log(store.getters.user)*/
const key = localStorage.getItem('userId')
    if (!(key>=0)) {

        if (from.name != 'Home' && from.name != null && to.name == 'sign_in')
        {
            // force refresh, or else signin page has dash components
            location.reload()
            next()
        }
        else
        {
            next()
        }
    }
    else if (key >= 0 && (to.name == 'Home' || to.name == 'sign_in') )
    {
        next('artist_dashboard')
    }
    else
    {
        next()
    }
}