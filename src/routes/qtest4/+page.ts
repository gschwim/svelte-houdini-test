// import { graphql } from '$houdini'
//
// export const _houdini_load = graphql`
// 	query char3 {
// 	  character(id: 3)
// 	  {
// 	    name
// 	  }
// 	  
// 	}`
//

import { Char3aStore, Char4Store } from '$houdini'

export const _houdini_load = [new Char3aStore(), new Char4Store()]
