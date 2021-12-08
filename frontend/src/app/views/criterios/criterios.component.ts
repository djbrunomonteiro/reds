import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.css']
})
export class CriteriosComponent implements OnInit {

  textos = [{
    title: '',
    subtitle1: '',
    subtitle2: '',
    subtitle3: '',
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    item6: '',
    item7: '',
    item8: '',
    item9: '',
    item10: '',
    item11: '',
    item12: '',

  }];
  
  
  ativadoCategorias: boolean = false;
  btnpedagogico: boolean = false;
  btncultura: boolean = false;
  btndesign: boolean = false;
  btntraducao: boolean = false;
  btnmidia: boolean = false;

  video: string = '';
  
  constructor() { }

  ngOnInit(): void {    
    this.ativadoCategorias = false;
    this.btnpedagogico = false;
    this.btntraducao = false;
    this.btncultura = false;
    this.btndesign = false;
    this.btnmidia = false;
    
  
  }



  mudaCategoria(t: string){
    this.ativadoCategorias = true;
    
    switch(t){
      
      case 'pedagogico':        
        this.textos[0].title = "CRITÉRIOS REFERENTES AO CONTEXTO PEDAGÓGICO";
        this.textos[0].subtitle1 = "CRITÉRIOS PEDAGÓGICOS";
        this.textos[0].item1 = "C1. Adequação aos objetivos de aprendizagem.";
        this.textos[0].item2 = "C2. Qualidade e confiabilidade do conteúdo.";
        this.textos[0].item3 = "C3. Adequação à mídia digital.";
        this.textos[0].item4 = "";
        this.textos[0].subtitle2 = "CRITÉRIOS COGNITIVOS";
        this.textos[0].item5 = "C4. Retenção da atenção e motivação.";
        this.textos[0].item6 = "C5. Redução da sobrecarga cognitiva.";
        this.textos[0].item7 = "";
        this.textos[0].item8 = "";
        this.textos[0].subtitle3 = "";
        this.textos[0].item9 = "";
        this.textos[0].item10 = "";
        this.textos[0].item11 = "";
        this.textos[0].item12 = "";
        this.btnpedagogico = true;
        this.btntraducao = false;
        this.btncultura = false;
        this.btndesign = false;
        this.btnmidia = false;
        this.video = '11_crit_cont_pedag';

        break;
      
      case 'cultura':
        this.textos[0].title = "CRITÉRIOS REFERENTES À CULTURA SURDA";
        this.textos[0].subtitle1 = "CRITÉRIOS LINGUÍSTICOS";
        this.textos[0].item1 = "C1. Utilização da Libras e do Português escrito.";
        this.textos[0].item2 = "C2. Utilização de exemplos do cotidiano do surdo.";
        this.textos[0].item3 = "C3. Utilização e apresentação de legendas.";
        this.textos[0].item4 = "";
        this.textos[0].subtitle2 = "CRITÉRIOS COGNITIVOS";
        this.textos[0].item5 = "C4. Utilização de recursos visuais.";
        this.textos[0].item6 = "C5. Apresentação de exemplos antes de conceitos.";
        this.textos[0].item7 = "C6. Redução das informações concomitantes.";
        this.textos[0].item8 = "";
        this.textos[0].subtitle3 = "";
        this.textos[0].item9 = "";
        this.textos[0].item10 = "";
        this.textos[0].item11 = "";
        this.textos[0].item12 = "";
        this.btnpedagogico = false;
        this.btntraducao = false;
        this.btncultura = true;
        this.btndesign = false;
        this.btnmidia = false;
        this.video = '12_crit_cult_surd';

        break;
      
      case 'design':
        this.textos[0].title = "CRITÉRIOS REFERENTES AO DESIGN DA INTERFACE";
        this.textos[0].subtitle1 = "CRITÉRIOS DA ORGANIZAÇÃO VISUAL";
        this.textos[0].item1 = "C1. Facilidade de interação com a interface.";
        this.textos[0].item2 = "C2. Apresentação de opções de acessibilidade.";
        this.textos[0].item3 = "";
        this.textos[0].item4 = "";
        this.textos[0].subtitle2 = "CRITÉRIOS DE USABILIDADE";
        this.textos[0].item5 = "C3. Agradabilidade da interface.";
        this.textos[0].item6 = "C4. Utilização das cores e contraste.";
        this.textos[0].item7 = "C5. Hierarquização e Alinhamento dos elementos visuais.";
        this.textos[0].item8 = "C6. Composição dos elementos visuais.";
        this.textos[0].subtitle3 = "";
        this.textos[0].item9 = "";
        this.textos[0].item10 = "";
        this.textos[0].item11 = "";
        this.textos[0].item12 = "";
        this.btnpedagogico = false;
        this.btntraducao = false;
        this.btncultura = false;
        this.btndesign = true;
        this.btnmidia = false;
        this.video = '15_crit_desig_interf';
        break;
      
      case 'traducao':
        this.textos[0].title = "CRITÉRIOS REFERENTES À TRADUÇÃO E INTERPRETAÇÃO";
        this.textos[0].subtitle1 = "CRITÉRIOS LINGUÍSTICOS";
        this.textos[0].item1 = "C1. Qualidade do processo de tradução.";
        this.textos[0].item2 = "C2. Consistência da língua de sinais.";
        this.textos[0].item3 = "C3. Utilização de glossários.";
        this.textos[0].item4 = "C4. Utilização da datilologia.";
        this.textos[0].subtitle2 = "CRITÉRIOS DA INTERPRETAÇÃO";
        this.textos[0].item5 = "C5. Fluência e ritmo da língua de sinais.";
        this.textos[0].item6 = "C6. Interação do apresentador com outros elementos visuais.";
        this.textos[0].item7 = "";
        this.textos[0].item8 = "";
        this.textos[0].subtitle3 = "";
        this.textos[0].item9 = "";
        this.textos[0].item10 = "";
        this.textos[0].item11 = "";
        this.textos[0].item12 = "";
        this.btnpedagogico = false;
        this.btntraducao = true;
        this.btncultura = false;
        this.btndesign = false;
        this.btnmidia = false;
        this.video = '13_crit_tard_inter';
        break;
      
      case 'midia':
        this.textos[0].title = "CRITÉRIOS REFERENTES ÀS MÍDIAS DIGITAIS";
        this.textos[0].subtitle1 = "CRITÉRIOS MÍDIAS ESTÁTICAS";
        this.textos[0].item1 = "C1. Qualidade dos textos.";
        this.textos[0].item2 = "C2. Qualidade de tabelas e gráficos.";
        this.textos[0].item3 = "C3. Adequação e qualidade das imagens.";
        this.textos[0].item4 = "";
        this.textos[0].subtitle2 = "CRITÉRIOS MÍDIAS DINÂMICAS";
        this.textos[0].item5 = "C4. Apresentação e Qualidade dos Vídeos.";
        this.textos[0].item6 = "C5. Qualidade da filmagem.";
        this.textos[0].item7 = "C6. Adequação do roteiro e narrativa.";
        this.textos[0].item8 = "C7. Qualidade das animações.";
        this.textos[0].subtitle3 = "CRITÉRIOS MÍDIAS INTERATIVAS";
        this.textos[0].item9 = "C8. Presença e controle de recursos interativos.";
        this.textos[0].item10 = "C9. Facilidade na interação e feedback";
        this.textos[0].item11 = "";
        this.textos[0].item12 = "";
        this.btnpedagogico = false;
        this.btntraducao = false;
        this.btncultura = false;
        this.btndesign = false;
        this.btnmidia = true;
        this.video = '14_crit_mid_dig';
        break;

      default:
        break
    }
   
  }
  reloadBlock(){
    this.ativadoCategorias = false;
  }
}
