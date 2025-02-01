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
        
    
    # Botão 
    btn1 = ft.Container(
        content=ft.Image(src="img/element1.png", width=100, height=100),
        on_click=on_click,
        border_radius=10
    )
    
    # Botão com imagem local
    btn2 = ft.Container(
        content=ft.Image(src="img/element2.png", width=100, height=100),
        on_click=on_click,
        border_radius=10
    )
    
    page.add(btn1, btn2)


    page.update()


ft.app(target=PainelInterativo)        
