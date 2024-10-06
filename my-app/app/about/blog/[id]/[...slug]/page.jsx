import React from 'react'

const page = ({params}) => {

        if(params.slug?.length==2) {
            return (
                <h1>
                    dslfdoad
                </h1>
            )} else if(params.slug?.length==1){
                return (<h2>
                dfisajfioad
                </h2>)
            }
                return (
                <h1>
                    3rd Page
                </h1>
                )
        

}

export default page