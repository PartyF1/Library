import Button from "./button"
import { useState } from "react";

function Header(props) {
    const { activeButton, setActiveButton } = props;
    return (
        <div key={activeButton}>
            <Button onClick={setActiveButton}
                isActive={activeButton}
                name="books"
                title='Книги'
            >
            </Button>
            <Button onClick={setActiveButton}
                isActive={activeButton}
                name="journals"
                title='Статьи'
            >
            </Button>
            <Button onClick={setActiveButton}
                isActive={activeButton}
                name="urls"
                title='Интернет-ссылки'
            >
            </Button>
        </div>
    )
}
export default Header;