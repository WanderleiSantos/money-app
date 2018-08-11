import React from 'react'
import MenuItem from './MenuItem'
import MenuTree from './Menutree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path="/" label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path="billingCycle" label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)