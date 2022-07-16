import Docupilot from './docupilot';
import * as _API from './api';

class _Docupilot extends Docupilot {
  readonly FoldersService = _API.FoldersService;
  readonly TemplatesService = _API.TemplatesService;
  readonly GenerateService = _API.GenerateService;
  readonly HistoryService = _API.HistoryService;
  readonly LinkedAccountsService = _API.LinkedAccountsService;
  readonly GenerateBulkService = _API.GenerateBulkService;
  readonly TemplateDeliveryService = _API.TemplateDeliveryService;
  readonly UsersService = _API.UsersService;
}

export const client = new _Docupilot();
