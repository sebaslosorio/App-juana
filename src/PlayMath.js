import React, { useState } from 'react'
import ProblemComponent from './components/ProblemComponent'
import './index'
import {score} from './components/ProblemComponent'

export default function PlayMath () {
    return (
        <div className="container">
            <ProblemComponent/>
        </div>
    )
}
