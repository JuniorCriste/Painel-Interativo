import flet as ft

def PainelInterativo(page: ft.Page):
    page.bgcolor = ft.colors.BLUE_300
    page.window_full_screen = True
    page.window_aways_on_top = True
    page.title = "Painel Interativo - 100% Capixabas!"
    page.update()


ft.app(target=PainelInterativo)        
