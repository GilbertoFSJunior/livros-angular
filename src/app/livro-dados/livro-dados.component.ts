import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ControleEditoraService } from "../../controle/controle-editora.service"
import { ControleLivrosService } from "../../controle/controle-livros.service"
import { Editora } from "../../modelo/editora"
import { Livro } from "../../modelo/livro"

@Component({
  selector: "app-livro-dados",
  templateUrl: "./livro-dados.component.html",
  styleUrls: ["./livro-dados.component.css"],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro
  autoresForm: string = ""
  editoras: Array<Editora> = []

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {
    this.livro = new Livro(1, "", "", [], 0)
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split("\n")
    this.servLivros.incluir(this.livro)
    this.router.navigateByUrl("/lista")
  }

  cancelar(): void {
    this.router.navigateByUrl("/lista")
  }
}
