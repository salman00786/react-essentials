export default function Tabs({children, buttons, ButtonsTab = "menu"}){

    
    return(
        <>
        <ButtonsTab>
            {buttons}
        </ButtonsTab>
        {children}
        </>
    )
}