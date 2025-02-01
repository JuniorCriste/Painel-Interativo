import flet as ft

class PainelInterativo:
    def __init__(self, page: ft.Page):
        self.Page = page
        self.bgcolor = ft.colors.BLUE_300
        self.page.window_full_screen = True
        self.page.window_aways_on_top = True
        self.page.title = "Painel Interativo - 100% Capixabas!"

        self.page.update()


ft.app(target=PainelInterativo)        
