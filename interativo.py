import flet as ft
import asyncio

def PainelInterativo(page: ft.Page):
    page.bgcolor = ft.colors.BLUE_500
    page.window_full_screen = True
    page.window_aways_on_top = True
    page.title = "Painel Interativo - 100% Capixabas!"

    async def on_click(e):
        e.control.scale = 1.1
        page.update()

        await asyncio.sleep(0.1)

        e.control.scale = 1.0
        e.control.update()
        
    button_container = ft.Row(
        spacing = 5,
        alignment = ft.MainAxisAlignment.CENTER,
        wrap= True,
        width= 1000
    )    



    # Botões 
    btn1 = ft.Container(content=ft.Image(src="img/element1.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn2 = ft.Container(content=ft.Image(src="img/element2.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn3 = ft.Container(content=ft.Image(src="img/element3.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn4 = ft.Container(content=ft.Image(src="img/element4.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn5 = ft.Container(content=ft.Image(src="img/element5.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn6 = ft.Container(content=ft.Image(src="img/element6.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn7 = ft.Container(content=ft.Image(src="img/element7.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn8 = ft.Container(content=ft.Image(src="img/element8.png", width=300, height=300), on_click=on_click, border_radius=10)
    btn9 = ft.Container(content=ft.Image(src="img/element9.png", width=300, height=300), on_click=on_click, border_radius=10)

    
    
    #page.add(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9)
    button_container.controls.extend([btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9])
    page.add(button_container)


    page.update()


ft.app(target=PainelInterativo)        
