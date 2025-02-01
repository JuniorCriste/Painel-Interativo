import flet as ft

def PainelInterativo(page: ft.Page):
    page.bgcolor = ft.colors.BLUE_500
    page.window_full_screen = True
    page.window_aways_on_top = True
    page.title = "Painel Interativo - 100% Capixabas!"

    def on_click(e):
        e.control.scale = 1.1
        page.update()

        def reset_scale():
            e.control.scale = 1.0  # Retorna ao tamanho original
            page.update()
        
        page.run_task(reset_scale, delay=0.2)  # Retorna ao normal após 200ms
    
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
