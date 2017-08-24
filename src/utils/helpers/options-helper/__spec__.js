import OptionsHelper from './options-helper';

describe('OptionsHelper', () => {
  it('alignBinary', () => {
    expect(OptionsHelper.alignBinary).toEqual([
      'left',
      'right'
    ]);
  });
  it('alignFull', () => {
    expect(OptionsHelper.alignFull).toEqual([
      'center',
      'left',
      'right'
    ]);
  });
  it('buttonColors', () => {
    expect(OptionsHelper.buttonColors).toEqual([
      'blue',
      'grey',
      'magenta',
      'red',
      'white'
    ]);
  });
  it('colors', () => {
    expect(OptionsHelper.colors).toEqual([
      'default',
      'error',
      'help',
      'info',
      'maintenance',
      'new',
      'success',
      'warning'
    ]);
  });
  it('icons', () => {
    expect(OptionsHelper.icons).toEqual([
      'add',
    'alert',
    'analysis',
    'arrow_down',
    'arrow_left',
    'arrow_right',
    'arrow_up',
    'attach',
    'blocked',
    'blocked_square',
    'bulk_destroy',
    'business',
    'calendar',
    'call',
    'camera',
    'card_view',
    'caret_down',
    'cart',
    'chat',
    'chart_bar',
    'chart_line',
    'chart_pie',
    'chat_notes',
    'chevron_down',
    'chevron_left',
    'chevron_right',
    'chevron_up',
    'clock',
    'close',
    'collaborate',
    'copy',
    'connect',
    'credit_card',
    'cross',
    'csv',
    'delete',
    'delivery',
    'disputed',
    'download',
    'drag',
    'drag_vertical',
    'draft',
    'dropdown',
    'duplicate',
    'edit',
    'edited',
    'email',
    'error',
    'favourite',
    'favourite_lined',
    'fax',
    'feedback',
    'filter',
    'filter_new',
    'fit_height',
    'fit_width',
    'folder',
    'gift',
    'graph',
    'grid',
    'help',
    'home',
    'in_progress',
    'info',
    'image',
    'key',
    'link',
    'list_view',
    'locked',
    'logout',
    'marker',
    'message',
    'messages',
    'minus',
    'mobile',
    'pdf',
    'people',
    'person',
    'phone',
    'plus',
    'print',
    'progressed',
    'question',
    'refresh',
    'save',
    'search',
    'services',
    'settings',
    'share',
    'shop',
    'sort_down',
    'sort_up',
    'sync',
    'tick',
    'unlocked',
    'upload',
    'uploaded',
    'view',
    'warning'
    ]);
  });
  it('pageSizes', () => {
    expect(OptionsHelper.pageSizes).toEqual([
      10, 25, 50
    ]);
  });
  it('positions', () => {
    expect(OptionsHelper.positions).toEqual([
      'bottom',
      'left',
      'right',
      'top'
    ]);
  });
  it('sizesFull', () => {
    expect(OptionsHelper.sizesFull).toEqual([
      'extra-small',
      'small',
      'medium-small',
      'medium',
      'medium-large',
      'large',
      'extra-large'
    ]);
  });
  it('sizesPod', () => {
    expect(OptionsHelper.sizesPod).toEqual([
      'extra-small',
      'small',
      'medium',
      'large',
      'extra-large'
    ]);
  });
  it('sizesRestricted', () => {
    expect(OptionsHelper.sizesRestricted).toEqual([
      'small',
      'medium',
      'large'
    ]);
  });
  it('sizesBinary', () => {
    expect(OptionsHelper.sizesBinary).toEqual([
      'small',
      'large'
    ]);
  });
  it('themesBinary', () => {
    expect(OptionsHelper.themesBinary).toEqual([
      'primary',
      'secondary'
    ]);
  });
  it('themesFull', () => {
    expect(OptionsHelper.themesFull).toEqual([
      'primary',
      'secondary',
      'tertiary',
      'tile',
      'transparent'
    ]);
  });
});
