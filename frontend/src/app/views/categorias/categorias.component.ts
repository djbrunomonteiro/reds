import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  
  btnpedagogico: boolean = false;
  btncultura: boolean = false;
  btndesign: boolean = false;
  btntraducao: boolean = false;
  btnmidia: boolean = false;

  title: string = '';
  text1: string = '';
  text2: string = '';

  ativadoCategorias: boolean = false;
  video: string = '';

  constructor() {}

  ngOnInit(): void {
    this.ativadoCategorias = false;
    this.btnpedagogico = false;
    this.btntraducao = false;
    this.btncultura = false;
    this.btndesign = false;
    this.btnmidia = false;
    this.video = ''
  }

  mudaCategoria(t: string) {
    this.ativadoCategorias = true;

    switch (t) {
      case 'pedagogico':
        this.title = 'CONTEXTO PEDAGÓGICO';
        this.text1 =
          'Categoria composta por critérios que avaliam a adequação do recurso educacional aos objetivos pedagógicos. ';
        this.text2 =
          'Também características cognitivas e emocionais, que oportunizam o melhor uso do recurso e consequente aprendizado do usuário.';
        this.btnpedagogico = true;
        this.btntraducao = false;
        this.btncultura = false;
        this.btndesign = false;
        this.btnmidia = false;
        this.video = 'cat_vd_pedagogico'
        break;

      case 'cultura':
        this.title = 'CULTURA SURDA';
        this.text1 =
          'Categoria composta por critérios que avaliam questões referentes ao uso da Libras e do Português, a cultura visual e a adequação do recurso às características cognitivas do aluno surdo bilíngue.';
        this.text2 = '';
        this.btnpedagogico = false;
        this.btntraducao = false;
        this.btncultura = true;
        this.btndesign = false;
        this.btnmidia = false;
        this.video = 'cat_vd_cultura'

        break;

      case 'design':
        this.title = 'DESIGN DA INTERFACE';
        this.text1 =
          'Categoria composta por critérios que avaliam a organização visual da interface, bem como os aspectos de usabilidade dos recursos educacionais digitais.';
        this.text2 = '';
        this.btnpedagogico = false;
        this.btntraducao = false;
        this.btncultura = false;
        this.btndesign = true;
        this.btnmidia = false;
        this.video = 'cat_vd_design'
        break;

      case 'traducao':
        this.title = 'TRADUÇÃO E INTERPRETAÇÃO';
        this.text1 =
          'Categoria composta por critérios que avaliam a qualidade da tradução e interpretação e a interação entre o apresentador e os elementos visuais nos REDs bilíngues.';
        this.text2 = '';
        this.btnpedagogico = false;
        this.btntraducao = true;
        this.btncultura = false;
        this.btndesign = false;
        this.btnmidia = false;
        this.video = 'cat_vd_traducao'
        break;

      case 'midia':
        this.title = 'MÍDIAS DIGITAIS';
        this.text1 =
          'Categoria composta por critérios que avaliam a qualidade dos elementos das mídias digitais que configuram os recursos educacionais: textos, gráficos, imagens, vídeos, animações, jogos etc.';
        this.text2 = '';
        this.btnpedagogico = false;
        this.btntraducao = false;
        this.btncultura = false;
        this.btndesign = false;
        this.btnmidia = true;
        this.video = 'cat_vd_midia'

        break;

      default:
        break;
    }
  }
  reloadBlock() {
    this.ativadoCategorias = false;
    this.btnpedagogico = false;
    this.btntraducao = false;
    this.btncultura = false;
    this.btndesign = false;
    this.btnmidia = false;
    this.video = ''
    
  }
}
