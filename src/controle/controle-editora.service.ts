import { Injectable } from "@angular/core"
import { Editora } from "../modelo/editora"

@Injectable({
  providedIn: "root",
})
export class ControleEditoraService {
  editoras: Editora[]

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: "Alta Books",
      },
      {
        codEditora: 2,
        nome: "Pearson",
      },
      {
        codEditora: 3,
        nome: "Addison Wesley",
      },
    ]
  }

  getEditoras(): Editora[] {
    return this.editoras
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0]
    return editora ? editora.nome : ""
  }
}
