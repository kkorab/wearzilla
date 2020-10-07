import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import SearchItem from './SearchItem'

const itemVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6
        }
    },
    exit: {
        opacity: 0
    }
}

export default function Search(props) {
    const [searchActive, setSearchActive] = props.value;
    const [filteredBySearch] = props.filtered

    return (
        <>
        {searchActive ? (        
            <AnimatePresence>
                <motion.div 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="search-cnt">
                    {filteredBySearch.length > 0 ? (filteredBySearch.map(item => {
                        return <SearchItem key={item.id} data={item} search={[searchActive, setSearchActive]}/>})) :
                        <h6 className='type-phrase'>type your phrase</h6>
                    }
                <div className="search-cnt-arrow"></div>
                </motion.div>
            </AnimatePresence>
            ) : null}
        </>
    )
}
