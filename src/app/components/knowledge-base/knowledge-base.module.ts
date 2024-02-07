import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";

import { KnowledgeBaseRoutingModule } from "./knowledge-base-routing.module";
import { KnowledgeBaseComponent } from "./knowledge-base.component";

@NgModule({
  declarations: [KnowledgeBaseComponent],
  imports: [CommonModule, KnowledgeBaseRoutingModule, FormsModule, SharedModule],
})
export class KnowledgeBaseModule {}
