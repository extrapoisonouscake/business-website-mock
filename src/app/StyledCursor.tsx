"use client"

import { useEffect, useRef } from "react"

const CURSOR_SIZE = 8// size * 4 === pixels

export function StyledCursor(){
	const ref = useRef<HTMLDivElement>(null)
	useEffect(()=>{
		const {current:cursor} = ref
		console.log(cursor)
		if(!cursor) return
	
		const handler = (e:MouseEvent)=>{
			
			setTimeout(()=>{
				const halfOfSizeinPX = CURSOR_SIZE * 4 / 2
				cursor.style.transform = `translate(${e.pageX + halfOfSizeinPX}px,${e.pageY + halfOfSizeinPX}px)`
			},500)
		}
		document.addEventListener('mousemove',handler)
		return ()=>document.removeEventListener('mousemove',handler)
	},[ref])
	return(
		<div ref={ref} className={`fixed -top-${CURSOR_SIZE} -left-${CURSOR_SIZE} size-${CURSOR_SIZE} mix-blend-exclusion pointer-events-none`}>
			<div className="absolute bg-white rounded-full mix-blend-exclusion size-full origin-center"/>
		</div>
	)
}